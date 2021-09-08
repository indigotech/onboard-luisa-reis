import React,{useEffect, useState, Component} from 'react';
import Title from '../../title/title'
import '../AddUsers/index.css'
import Error from '../../input/error.component'
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, useMutation} from "@apollo/client";
import * as yup from 'yup';
import {Formik, useFormik} from 'formik'
import FormField from '../../input/form'
import { useHistory } from 'react-router-dom';
import { goToUserList } from '../../routes/coordinator';
import Wrapper from '../../wrapper/wrapper.component';
import '../index.css'


const AddUser =()=>{
  const history = useHistory();

  const initialValues ={
    email: "",
    name: '',
    phone: '',
    role:'',
    birthDate:'',
  }

  const CREATE_USER = gql`
  mutation createUser($data: UserInputType!){
    createUser(data:$data){
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`  

const HandleError =(error:any)=>{
  // alert(`${error}`)  
   alert(error.message)
}

const [AddUser, {data, loading:Loading, error}] = useMutation(CREATE_USER,{ onError: HandleError});

const handleSubmit =()=>{
  goToUserList(history)
}

  const validationSchema = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Campo obrigatório"),
    name:yup
    .string()
    .required("Campo obrigatório"),
    phone:yup
    .string()
    .required("Campo obrigatório"),
    role:yup
    .string()
    .required("Campo obrigatório"),
    birthDate:yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Data de nascimento inválida (XX/XX/XXXX)"
    ),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })
    const emailProps = formik.getFieldProps("email");
    const nameProps = formik.getFieldProps("name");
    const phoneProps = formik.getFieldProps("phone");
    const birthDateProps = formik.getFieldProps("birthDate");
    const roleProps = formik.getFieldProps("role");


return(
  <Wrapper>
  <Title text="Adicionar usuário"/>
  <form 
  onSubmit={formik.handleSubmit}>
  <FormField
      label="email"
      type="email"
      placeholder="Email"
      {...emailProps}/>
      {formik.touched.email && formik.errors.email ? (
    <Error>Deve inserir um email válido</Error>
    ) : null}
       <FormField
      label="name"
      type="name"
      placeholder="Nome"
      {...nameProps}/>
       {formik.touched.name && formik.errors.name ? (
    <Error>Campo obrigatório</Error>
    ) : null}
         <FormField
      label="phone"
      type="phone"
      placeholder="Telefone"
      {...phoneProps}/>
      {formik.touched.phone && formik.errors.phone ? (
    <Error>Campo obrigatório</Error>
    ) : null}
      <FormField
      label="birthDate"
      type="birthDate"
      placeholder="Data de nascimento"
      {...birthDateProps}/>
      {formik.touched.birthDate && formik.errors.birthDate ? (
    <Error>{formik.errors.birthDate}</Error>
    ) : null}
      <FormField
      label="role"
      type="role"
      placeholder="Função"
      {...roleProps}/>
      {formik.touched.role && formik.errors.role ? (
    <Error>{formik.errors.role}</Error>
    ) : null}
    <button  id="btnEntrar" disabled={Loading}> {Loading ? 'Carregando...': "Entrar"}</button>
  </form>
  
  </Wrapper>
  )
}

export default AddUser