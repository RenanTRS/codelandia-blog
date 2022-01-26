import styled from 'styled-components';

export const Input = styled.input`
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    color: #ffffff;

    flex: 1;

    height: 4rem;

    background: transparent;

    border: none;

    margin-left: 1.1rem;

    outline: none;

    &::placeholder{
        color: #fff;
    }

    @media (min-width: 1025px){
        font-size: 1.8rem;

        height: 6.5rem;
    }
`;