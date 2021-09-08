import React from 'react'
import Title from '../../title/title'
import { useHistory, useParams } from 'react-router-dom';
import { History } from 'history';
import Wrapper from '../../wrapper/wrapper.component';
import '../index.css'
import { goToUserList } from '../../routes/coordinator';

const UserDetails =()=>{
    const history = useHistory();

    return(
        <Wrapper>
            <Title text="Página do usuário"/> 
            <h3 >Nome: {( localStorage.getItem("userData"))}</h3>
            <h3>Email: {( localStorage.getItem("userEmail"))}</h3>
            <h3>Telefone: {(localStorage.getItem("userPhone"))}</h3>
            <h3>Data de Nascimento: {(localStorage.getItem("userBirth"))}</h3>
            <h3>Função: {(localStorage.getItem("userRole"))}</h3>

            <button className="prev-next" onClick={()=>goToUserList(history)}> Voltar</button>
        </Wrapper>
    )
}

export default UserDetails;