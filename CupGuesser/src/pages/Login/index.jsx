import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLocalStorage } from 'react-use';
import { Navigate } from 'react-router-dom';
import { Icon, Input } from '../../Components/';

export const Login = () => {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const validationSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios({
        method: 'get',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/login',
        auth: {
          username: values.email,
          password: values.password,
        },
      });
      setAuth(res.data);
    },
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
  });

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />;
  }

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

        <form className="space-y-6 p-4" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Digite seu email"
            label="Seu email"
            auth={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            label="Sua senha"
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            disabled={!formik.isValid || formik.isSubmitting}
            type="submit"
            className="block text-white text-center bg-red-300 text-xl px-6 py-3 rounded-xl w-full disabled:opacity-50"
          >
            {formik.isSubmitting ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </main>
    </div>
  );
};
