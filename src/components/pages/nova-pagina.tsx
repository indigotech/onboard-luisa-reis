import React,{useEffect} from 'react';
import Title from '../title/title'

const NovaPagina=(props:any)=>{
    return(
    <div>
    <Title text=""/>
    <button onClick={()=>
    props.history.goBack()
    }>Voltar</button>
    </div>
    )
  }

  export default NovaPagina;