export const Card = ({ teamA, teamB, match }) => {
  return (
    <div className="border border-grey-300 rounded-xl p-4 text-center space-y-4">
      <span className="text-sm md:test-base text-grey-700 font-bold">
        {match.time}
      </span>
      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{teamA.slug}</span>
        <img src={`/assets-natrave/bandeiras/${teamA.slug}.png`} alt="" />

        <input
          max={20}
          min={0}
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
        />
        <span className="mx-4 text-red-500 font-bold">x</span>
        <input
          max={20}
          min={0}
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
        />

        <img src={`/assets-natrave/bandeiras/${teamB.slug}.png`} alt="" />
        <span className="uppercase">{teamB.slug}</span>
      </div>
    </div>
  );
};
