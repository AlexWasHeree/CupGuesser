import React from 'react';
import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { Icon, Card, DateSelect } from '../../Components';

export const Profile = () => {
  const [currentDate, setDate] = React.useState(
    formatISO(new Date(2022, 10, 20)),
  );
  const [auth, setAuth] = useLocalStorage('auth', {});

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />;
  }

  const logout = () => {
    setAuth({});
  };
  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-4xl flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">CupGuesser</h1>
          <div onClick={logout} className="p-4 cursor-pointer">
            Sair
          </div>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-4xl space-y-2 p-4">
            <a href="./dashboard">
              <Icon name="back" className="w-8" />
            </a>
            <h3 className="text-2xl">Victor Alexandre</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-xl text-red-500 font-bold">Seus palpites</h2>

          <DateSelect currentDate={currentDate} onChange={setDate} />

          <div className="space-y-4">
            <Card homeTeam={'sui'} awayTeam={'cam'} gamTime={'7:00'} />
          </div>
        </section>
      </main>
    </>
  );
};
