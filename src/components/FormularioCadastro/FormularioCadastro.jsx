import React, { useState, useReducer } from 'react';
import {
  TextField, Button, Switch, FormControlLabel,
} from '@material-ui/core';

function FormularioCadastro() {
  const initialState = {
    sobrenome: 'braga', CPF: '0000000000', promocoes: true, novidades: true,
  };
  const [nome, setNome] = useState('Vinicius');
  const [dados, setDados] = useReducer(reducer, initialState);

  function reducer(state, newstate) {
    console.log(state);
    return ({ ...state, ...newstate });
  }

  function handleInput(e) {
    // e.target.name = e.target.value
    const { name, value } = e.target;
    setDados({ [name]: value });
  }

  function handleChecked(e) {
    // e.target.name = e.target.value
    const { name, checked } = e.target;
    setDados({ [name]: checked });
  }

  function handleNome(e) {
    // e.target.name = e.target.value
    const { name, value } = e.target;
    setNome(value);
  }

  function enviadados(e) {
    console.log(nome);
    e.preventDefault();
  }

  return (
    <form onSubmit={enviadados}>
      <TextField
        onChange={(event) => {
          handleNome(event);
          // console.log(nome);
        }}
        id="nome"
        name="nome"
        value={nome}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          handleInput(event);
        }}
        id="sobrenome"
        name="sobrenome"
        value={dados.sobrenome}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          handleInput(event);
        }}
        id="CPF"
        value={dados.CPF}
        name="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        name="promocoes"
        control={<Switch name="promocoes" defaultChecked={dados.promocoes} onChange={(event) => handleChecked(event)} color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked={dados.novidades} color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
