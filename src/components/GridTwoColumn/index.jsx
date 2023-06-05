import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../Button';
import { InputText } from '../Input';
import { MdEmail, MdLock, MdPerson  } from "react-icons/md";

export const GridTwoColumn = () => {
  return (
    <Styled.GridTwoColumn>
        <Styled.SubTitle>
            <Styled.Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Styled.Title>
        </Styled.SubTitle>
        <Styled.Register>
            <Styled.DivItem margin={'2rem'}>
                <Styled.Title>
                    Comece agora grátis
                </Styled.Title>
                <Styled.Description>
                    Crie sua conta e make the change._
                </Styled.Description>
            </Styled.DivItem>

            <Styled.DivItem margin={'2rem'}>
                <InputText icon={MdPerson} title={'Nome completo'}/>
                <InputText icon={MdEmail} title={'Email'}/>
                <InputText icon={MdLock} title={'Senha'}/>
            </Styled.DivItem>

            <Styled.DivItem margin={'3.5rem'}>
                <Button title='Criar minha conta'/>
            </Styled.DivItem>
            <Styled.DivItem margin={'2.7rem'}>
                <Styled.Description>
                Ao clicar em criar minha conta grátis, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </Styled.Description>
                <Styled.SubDescription>
                    Já tenho conta. <span>Fazer login</span>
                </Styled.SubDescription>   
                </Styled.DivItem>
        </Styled.Register>
    </Styled.GridTwoColumn>
  )
}

GridTwoColumn.propTypes = {
    children: P.node.isRequired,
}