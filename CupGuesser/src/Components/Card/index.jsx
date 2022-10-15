import axios from 'axios';
import { useLocalStorage } from 'react-use';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const Card = ({
  disabled,
  homeTeam,
  awayTeam,
  gameTime,
  gameId,
  homeTeamScore,
  awayTeamScore,
}) => {
  const [auth] = useLocalStorage('auth');

  const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required(),
  });

  const formik = useFormik({
    onSubmit: (values) => {
      axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/hunches',
        headers: {
          authorization: `Bearer ${auth.accesToken}`,
        },
        data: {
          gameId,
          ...values,
        },
      });
    },
    initialValues: {
      homeTeamScore,
      awayTeamScore,
    },
    validationSchema,
  });

  return (
    <div className="border border-grey-300 rounded-xl p-4 text-center space-y-4">
      <span className="text-sm md:test-base text-grey-700 font-bold">
        {gameTime}
      </span>
      <form className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{homeTeam}</span>
        <img src={`/assets-natrave/bandeiras/${homeTeam}.png`} alt="" />

        <input
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
          max={20}
          min={0}
          type="number"
          name="homeTeamScore"
          value={formik.values.homeTeamScore}
          onChange={formik.handleChange}
          onBlur={formik.handleSubmit}
          disabled={disabled}
        />
        <span className="mx-4 text-red-500 font-bold">x</span>
        <input
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
          max={20}
          min={0}
          type="number"
          name="awayTeamScore"
          value={formik.values.awayTeamScore}
          onChange={formik.handleChange}
          onBlur={formik.handleSubmit}
          disabled={disabled}
        />

        <img src={`/assets-natrave/bandeiras/${awayTeam}.png`} alt="" />
        <span className="uppercase">{awayTeam}</span>
      </form>
    </div>
  );
};
