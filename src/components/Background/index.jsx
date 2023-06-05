import P from 'prop-types';
import * as Styled from './styles';

export const Background = ({ children }) => {
  return (
    <Styled.Background>
        {children}
    </Styled.Background>
  )
}

Background.propTypes = {
    children: P.node.isRequired,
}