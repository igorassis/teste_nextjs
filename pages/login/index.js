import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Router from 'next/router';
import Link from 'next/link'
import {
  InputLabel,
  FormControl,
  Input,
  FormHelperText,
  TextField
} from "@material-ui/core";
import axios from 'axios'
import cookie from 'js-cookie';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;


const Login = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setLoggedIn(true);
    // axios.post('API-BACKEND',{
    //   email: email,
    //   password: password
    // }).then((data)=>{
    //   if(data && data.token){
    //     cookie.set('token', data.token, {expires: 2});
    //   }
    // });
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <p>Login</p>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" value="Submit">Submit</Button>
        {/* {loginError && <p style={{ color: "red" }}>{loginError}</p>} */}
      </StyledForm>

      {LoggedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLoggedIn(false)}
        >
          Logout
        </Button>
      ) : null}

      {LoggedIn ? (
          <Button
            variant="contained"
            color="primary"          
            onClick={() => window.location.href = "http://central.fretebras.com.br/"}
          >
            Listagem de Fretes
          </Button>
      ) : null}

      {LoggedIn ? <p>Logado</p> : <p>Não Logado</p>}
    </>
  );
};

export default Login;
