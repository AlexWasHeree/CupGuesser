import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-red-700 text-white flex">
      <div className="flex-1 container p-6 flex flex-col items-center  space-y-6 md:flex-row">
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
          <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </button>
          <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">
            Fazer Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
