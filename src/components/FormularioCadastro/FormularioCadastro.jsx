import React, { useState, useReducer } from 'react';
import {
  TextField, Button, Switch, FormControlLabel,
} from '@material-ui/core';

function FormularioCadastro() {
  const initialState = { sobrenome: 'braga', CPF: '0000000000' };
  const [nome, setNome] = useState('');
  const [dados, setDados] = useReducer(reducer, initialState);

  function reducer(state, newstate) {
    console.log(state);
    return ({ ...state, ...newstate });
  }

  function setValue(chave, valor) {
    chave = valor;
    console.log(chave);
    return chave;
  }

  function handleInput(e) {
    // e.target.name = e.target.value
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setDados({[name]: value });
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
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
