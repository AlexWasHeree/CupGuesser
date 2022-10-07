import React from 'react';
// import { Fragment } from 'react';
import { Icon, Card } from '../../Components';

export const Profile = () => {
  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-4xl flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">CupGuesser</h1>
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
