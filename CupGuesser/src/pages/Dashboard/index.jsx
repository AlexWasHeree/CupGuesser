import React from 'react';
import { Icon } from '../../Components';

export const Dashboard = () => {
  return (
    <div className="">
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-4xl flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">CupGuesser</h1>
          <a href=";profile">
            <Icon name="profile" className="w-10 " />
          </a>
        </div>
      </header>

      <main>
        <section id="header" className="bg-red-500 text-white p-4">
          <div className="container max-w-4xl space-y-2">
            <span>Olá Victor!</span>
            <h3 className="text-2xl">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content"></section>
      </main>
    </div>
  );
};
