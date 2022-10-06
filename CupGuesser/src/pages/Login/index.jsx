import React from 'react';
import { Icon, Input } from '../../Components/';

export const Login = () => {
  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-6xl flex justify-center">
          <h1 className="text-xl font-bold">CupGuesser</h1>
        </div>
      </header>

      <main className="p-4 container max-w-2xl">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="arrowLeft" className="h-7" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className="space-y-6 p-4">
          <Input
            type="text"
            name="email"
            placeholder="Digite seu email"
            label="Seu email"
          />

          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            label="Sua senha"
          />

          <a
            href="/signup"
            className="block text-white text-center bg-red-300 text-xl px-6 py-3 rounded-xl w-full"
          >
            Entrar
          </a>
        </form>
      </main>
    </div>
  );
};
