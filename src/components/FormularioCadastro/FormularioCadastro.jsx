import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";


function FormularioCadastro({aoEnviar, validarCPF}) {


  return (
    <>
    <DadosPessoais/>
    <DadosUsuario/>
    </>
    )
}

export default FormularioCadastro;
