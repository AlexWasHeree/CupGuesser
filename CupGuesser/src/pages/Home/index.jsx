import { useState } from 'react';

export const Home = () => {
  return (
    <div className="h-screen bg-red-700 p-4  text-white flex flex-col items-center space-y-6">
      <header className="container justify-center max-w-6xl flex p-4">
        <h1 className="text-xl font-bold">CupGuesser</h1>
      </header>
      <div className="flex-1 container max-w-6xl p-4 flex flex-col items-center  space-y-6 md:flex-row">
        <div className="md:flex-1 flex justify-center">
          <img
            src="../public/assets-natrave/imagem/img.png"
            alt="dois torcedores"
            className="w-full max-w-md md:max-w-xl md:px-2"
          />
        </div>
        <div className="flex  flex-col space-y-6 md:flex-1">
          <h1 className="text-3xl text-center font-bold md:text-left">
            Dê o seu palpite na Copa do Mundo do Qatar 2022!
          </h1>
          <a
            href="/signup"
            className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl flex justify-center"
          >
            Criar minha conta
          </a>
          <a
            href="/login"
            className="text-white border border-white text-xl px-8 py-4 rounded-xl flex justify-center"
          >
            Fazer Login
          </a>
        </div>
      </div>
    </div>
  );
};
