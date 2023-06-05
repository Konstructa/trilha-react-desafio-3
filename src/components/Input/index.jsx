import * as Styled from './styles';
import P from 'prop-types';

export const InputText = ({ title, icon }) => {
  return (
    <Styled.InputContainer>
        {icon ? (<Styled.IconContainer>{icon}</Styled.IconContainer>) : null}
        <Styled.InputText value={title} />
    </Styled.InputContainer>
  )
}

InputText.propTypes = {
    title: P.string,
    icon: P.string
}