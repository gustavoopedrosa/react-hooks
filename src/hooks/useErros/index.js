import { useState } from "react";

export function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);

  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (const campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}
