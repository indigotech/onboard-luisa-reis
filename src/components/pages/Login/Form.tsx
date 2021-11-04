import React, { useEffect } from "react";
import Title from "../../title/title";
import Wrapper from "../../wrapper/wrapper.component";
import { Validators } from "../../../atomic/obj.form";
import { Form } from "../../../atomic/obj.form";
import { TextField } from "../../../atomic/atm.text-field";

// import { Formik, useFormik } from "formik";
// import * as yup from "yup";
// import FormField from "../../input/form";
// import Error from "../../input/error.component";
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

interface getTriggerMessages_getTriggerMessages {
  __typename: "Trigger";
  id: string;
  title: string;
  text: string;
  active: boolean;
}

interface getTriggerMessages {
  getTriggerMessages: getTriggerMessages_getTriggerMessages[];
}

interface FormData {
  data: getTriggerMessages_getTriggerMessages;
  error: any;
  other: any;
}
interface TriggerMessageManagerProps {
  initialData?: getTriggerMessages_getTriggerMessages;
  onSubmit: (params: getTriggerMessages_getTriggerMessages) => void;
  onCancel: () => void;
}

// const initialValues = {
//   email: "",
//   password: "",
// };

// const validationSchema = yup.object().shape({
//   email: yup.string().email().required("Email obrigatório"),
//   password: yup
//     .string()
//     .required("Digite sua senha")
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
//       "Senha deve conter pelo menos 7 caracteres, 1 digito e 1 letra"
//     ),
// });

export const FormComponent: React.FC<TriggerMessageManagerProps> = ({
  onCancel,
  onSubmit,
  initialData,
}) => {
  // const history: History = useHistory();
  const handleSubmit = (formData: FormData) => {
    if (Object.values(formData.error).length === 0) {
      onSubmit({
        ...formData.data,
      });
    }
  };

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

  // const HandleCompleted = (data: any) => {
  //   console.log(data);
  //   localStorage.setItem("token", data.login.token);
  //   goToUserList(history);
  // };

  // const HandleError = (error: any) => {
  //   alert(`${error}`);
  // };

  // const [AddLogin, { data, loading: Loading, error }] = useMutation(LOGIN, {
  //   onCompleted: HandleCompleted,
  //   onError: HandleError,
  // });

  // const handleSubmit = (data: any) => {
  //   console.log(data);
  //   AddLogin({ variables: { data } });
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: handleSubmit,
  // });
  // const emailProps = formik.getFieldProps("email");
  // const passwordProps = formik.getFieldProps("password");

  return (
    <Wrapper>
      <Title text="Bem vindo(a) à Taqtile!" />
      <Form onSubmit={handleSubmit} >
        <Form.Field
          name="email"
          label="Email"
          validators={[Validators.Required("Campo obrigatório")]}
          initialValue={initialData?.title}
        >
          <TextField type="normal" placeholder="Escreva seu comentário" />
        </Form.Field>
      </Form>
      {/* <form onSubmit={formik.handleSubmit}> */}
      {/* <FormField
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
        ) : null} */}
      {/* <button id="btnEntrar" disabled={Loading}>
          {" "}
          {Loading ? "Carregando..." : "Entrar"}{" "}
        </button> */}
      {/* </form> */}
    </Wrapper>
  );
};

// export default Form;
