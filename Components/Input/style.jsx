import styled from "styled-components";

export const InputContainer = styled.div`
    margin-bottom: 1rem;

    .label{
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: .5rem;
    }

    .error{
        color: #f31;
        font-size: .875rem;
        margin-top: .25rem;
    }
`

export const InputStyled = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: .3s;


    &:focus, &:hover{
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    }
`;
