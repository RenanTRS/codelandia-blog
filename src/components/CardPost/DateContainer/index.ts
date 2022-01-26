import styled from 'styled-components';

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.5rem;

    img{
        width: 1.9rem;

        @media (min-width: 1025px){
            width: 2.2rem;
        }
    }
`;