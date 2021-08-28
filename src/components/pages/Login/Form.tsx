import React, { useEffect } from "react";
import Title from "../../title/title";
import Wrapper from "../../wrapper/wrapper.component";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import FormField from "../../input/form";
import Error from "../../input/error.component";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation,
} from "@apollo/client";
import { Token } from "graphql";
import UserList from "../UserList/users-list";
import { History } from "history";
import { useHistory } from "react-router-dom";
import { goToUserList } from "../../routes/coordinator";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email obrigatório"),
  password: yup
    .string()
    .required("Digite sua senha")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
      "Senha deve conter pelo menos 7 caracteres, 1 digito e 1 letra"
    ),
});

function Form() {
  const history: History = useHistory();

  const LOGIN = gql`
    mutation login($data: LoginInputType!) {
      login(data: $data) {
        user {
          name
          email
          id
        }
        token
      }
    }
  `;

  const HandleCompleted = (data: any) => {
    console.log(data);
    localStorage.setItem("token", data.login.token);
    goToUserList(history);
  };

  const HandleError = (error: any) => {
    alert(`${error}`);
  };

  const [AddLogin, { data, loading: Loading, error }] = useMutation(LOGIN, {
    onCompleted: HandleCompleted,
    onError: HandleError,
  });

  const handleSubmit = (data: any) => {
    console.log(data);
    AddLogin({ variables: { data } });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");

  return (
    <Wrapper>
      <Title text="Bem vindo(a) à Taqtile!" />
      <form onSubmit={formik.handleSubmit}>
        <FormField
          label="email"
          type="email"
          placeholder="Email"
          {...emailProps}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>Deve inserir um email válido</Error>
        ) : null}
        <FormField
          label="password"
          type="password"
          placeholder="Senha"
          {...passwordProps}
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
        <button id="btnEntrar" disabled={Loading}>
          {" "}
          {Loading ? "Carregando..." : "Entrar"}{" "}
        </button>
      </form>
    </Wrapper>
  );
}

export default Form;
