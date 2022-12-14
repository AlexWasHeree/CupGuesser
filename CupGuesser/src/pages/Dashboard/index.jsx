import React from 'react';
import { useAsync, useLocalStorage, useAsyncFn } from 'react-use';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { format, formatISO } from 'date-fns';
import { Icon, Card, DateSelect } from '../../Components';

export const Dashboard = () => {
  const [currentDate, setDate] = React.useState(
    formatISO(new Date(2022, 10, 20)),
  );
  const [auth] = useLocalStorage('auth', {});

  const [{ value: user, loading, error }, fetchHunches] = useAsyncFn(
    async () => {
      const res = await axios({
        method: 'get',
        baseURL: import.meta.env.VITE_API_URL,
        url: `/${auth.user.username}`,
      });

      const hunches = res.data.hunches.reduce((acc, hunch) => {
        acc[hunch.gameId] = hunch;
        return acc;
      }, {});

      return {
        ...res.data,
        hunches,
      };
    },
  );

  const [games, fetchGames] = useAsyncFn(async (params) => {
    const res = await axios({
      method: 'get',
      baseURL: import.meta.env.VITE_API_URL,
      url: '/game',
      params,
    });

    return res.data;
  });

  React.useEffect(() => {
    fetchHunches();
  }, []);

  React.useEffect(() => {
    fetchGames({ gameTime: currentDate });
  }, [currentDate]);

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />;
  }

  const isLoading = games.loading || loading;
  const hasError = games.error || error;
  const isDone = !isLoading && !hasError;

  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-4xl flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">CupGuesser</h1>
          <a href={`/${auth.user?.username}`}>
            <Icon name="profile" className="w-10 " />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-4xl space-y-2 p-4">
            <span>Olá {auth.user.username}</span>
            <h3 className="text-2xl">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect currentDate={currentDate} onChange={setDate} />

          <div className="space-y-4">
            {isLoading && 'Carregando...'}
            {hasError && 'Ops, algo deu errado.'}

            {isDone &&
              games.value?.map((game) => (
                <Card
                  key={game.id}
                  gameId={game.id}
                  homeTeam={game.homeTeam}
                  awayTeam={game.awayTeam}
                  gameTime={format(new Date(game.gameTime), 'H:mm')}
                  homeTeamScore={user?.hunches?.[game.id]?.homeTeamScore || ''}
                  awayTeamScore={user?.hunches?.[game.id]?.awayTeamScore || ''}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};
