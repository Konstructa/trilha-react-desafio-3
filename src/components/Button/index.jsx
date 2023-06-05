import { ButtonContainer } from './styles';
import P from 'prop-types';

export const Button = ({title, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  )
}

Button.propTypes = {
    title: P.string.isRequired,
    onClick: P.func
}