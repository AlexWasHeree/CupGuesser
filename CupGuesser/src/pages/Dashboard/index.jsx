import React from 'react';
import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom';
import { Icon, Card } from '../../Components';

export const Dashboard = () => {
  const [auth] = useLocalStorage('auth', {});
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
          <div className="flex space-x-4 p-4 items-center justify-center">
            <Icon name="arrowLeft" className="w-6 text-red-500" />
            <span className="font-bold">24 de novembro</span>
            <Icon name="arrowRight" className="w-6 text-red-500" />
          </div>
          <div className="space-y-4">
            <Card
              teamA={{
                slug: 'sui',
              }}
              teamB={{
                slug: 'cam',
              }}
              match={{
                time: '7:00',
              }}
            />
            <Card
              teamA={{
                slug: 'uru',
              }}
              teamB={{
                slug: 'cor',
              }}
              match={{
                time: '10:00',
              }}
            />
            <Card
              teamA={{
                slug: 'por',
              }}
              teamB={{
                slug: 'gan',
              }}
              match={{
                time: '8:00',
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
};
