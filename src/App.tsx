import React from 'react';
import ButtonArea from './components/button/button-area';
import Title from './components/title/title';
import Wrapper from './components/wrapper/wrapper.component';
import {Formik, useFormik} from 'formik'
import * as yup from 'yup';
import FormField from './components/input/form'
import Error from './components/input/error.component'

const initialValues ={
  email: "",
  password: ""
}

const validationSchema = yup.object().shape({
  email: yup
  .string()
  .email()
  .required("Email obrigatório"),
  password: yup
  .string()
  .required("Digite sua senha")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
  "Senha deve conter pelo menos 7 caracteres, 1 digito e 1 letra"
  ),
})

function Form (onSubmit:any){
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps("password");
    
    return(
      <Wrapper>
    <Title text="Bem vindo(a) à Taqtile!"/>
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
      <ButtonArea title="entrar" />
      </form>
    </Wrapper>
    )
  }

export default Form;
