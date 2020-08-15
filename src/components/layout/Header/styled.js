import styled from 'styled-components/macro';

const row = styled.div`
    align-items: center;
    background-color: ${({ theme }) => (theme.main.colors.blue) };
    color: #fff;
    display: flex;
    font-family: Helvetica Neue LT,Helvetica Neue,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    font-size: 20px;
    font-weight: 700;
    justify-content: center;
    padding: 1rem;
    text-align: center;

    > span {
        margin-left: 10px;
    }
`;

export {
    row,
};