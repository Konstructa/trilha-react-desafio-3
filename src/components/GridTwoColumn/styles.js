import styled, {css} from 'styled-components';

export const GridTwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 80vh;
    padding: 6.5rem
`;

export const Register = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 380px;  
    margin: 0 auto;
`;

export const DivItem = styled.div`
   ${({ margin }) => css`
        margin-top: ${margin}
  `}
`;

export const SubTitle = styled.div`
    max-width: 38rem;
    margin: 0 40px;
`;

export const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 700;
`;

export const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 1rem;
 
`;

export const SubDescription = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 1rem; 

    span {
        color: #23DD7A;
        cursor: pointer
    }
`;
