import P from 'prop-types';
import * as Styled from './styles';
import logo from '../../assets/logo-dio.svg'

export const Header = () => {
  return (
    <Styled.Header>
        <img src={logo} alt='img' />
        <Styled.Nav>
          <Styled.NavItem>
            <p>Home</p>
          </Styled.NavItem>
          <Styled.NavButton>
            <p>Entrar</p>
          </Styled.NavButton>
          <Styled.NavButton>
            <p>Cadastrar</p>
          </Styled.NavButton>
        </Styled.Nav>
    </Styled.Header>
  )
}

Header.propTypes = {
    children: P.node.isRequired,
}