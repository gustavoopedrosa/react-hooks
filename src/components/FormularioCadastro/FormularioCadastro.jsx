import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === FORMULARIOS.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const FORMULARIOS = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual((currentValue) => currentValue + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>

        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {FORMULARIOS[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
