import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Icon, Input } from '../../Components';

export const Signup = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    username: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios({
        method: 'post',
        baseURL: 'http://localhost:3000',
        url: '/users',
        data: values,
      });
      console.log(res.data);
    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
  });

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
          <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>

        <form className="space-y-6 p-4" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            label="Seu nome"
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="text"
            name="username"
            placeholder="Digite um nome de usuário"
            label="Seu nome de usuário"
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="text"
            name="email"
            placeholder="Digite seu email"
            label="Seu email"
            value={formik.values.email}
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
            disabled={!formik.isValid}
            type="submit"
            className="block text-white text-center bg-red-300 text-xl px-6 py-3 rounded-xl w-full disabled:opacity-50"
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </div>
  );
};
