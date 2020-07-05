import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {

  const history = useHistory();
  async function handleLogin(e: any){
    e.preventDefault();
    try {
        history.push('/dashboard');
    } catch (error) {
        alert('Falha no Login');
    }
}

  return (
    <Container>
      <Content>
        {/* <h1>Kiara System Control</h1> */}
        <form onSubmit={handleLogin}>
          <h1>Acessar Sistema</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <Link to="signup">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
