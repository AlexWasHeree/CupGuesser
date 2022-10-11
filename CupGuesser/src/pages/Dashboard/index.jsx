import React from 'react';
import { useAsync, useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { Icon, Card, DateSelect } from '../../Components';

export const Dashboard = () => {
  const [auth] = useLocalStorage('auth', {});
  const state = useAsync(async () => {
    const res = await axios({
      method: 'get',
      baseURL: 'http://localhost:3000',
      url: '/game',
    });
    return res.data;
  });

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-4xl flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">CupGuesser</h1>
          <a href="/profile">
            <Icon name="profile" className="w-10 " />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-4xl space-y-2 p-4">
            <span>Olá Victor!</span>
            <h3 className="text-2xl">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect />

          <div className="space-y-4">
            {state.loading && 'Carregando...'}
            {state.error && 'Ops, algo deu errado.'}
            {!state.loading &&
              !state.error &&
              state.value.map((game, idx) => {
                return (
                  <Card
                    key={`id-${idx}`}
                    homeTeam={{ slug: game.homeTeam }}
                    awayTeam={{ slug: game.awayTeam }}
                    match={{ time: format(new Date(game.gameTime), 'H:mm') }}
                  />
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
};
