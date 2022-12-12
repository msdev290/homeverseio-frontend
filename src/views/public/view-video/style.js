import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    font-family: Montserrat-Regular;
    .text{
        font-family: Montserrat-Regular;
    }
    .title{
        font-family: Montserrat-Bold;
    }
    .sub-title{
        font-family: Montserrat-SemiBold;
    }
    header{
        font-family: Montserrat-SemiBold;
    }
`

export const Button = styled.button`
    width:100%;
    background-color:#555252;
    border:none;
    color:white;
    font-family:Montserrat-SemiBold;
    border-radius:10px;
    padding: 15px;
    font-weight: 600;
    cursor:pointer;
    max-width:120px;
    &:hover{
        background-color: #404040;
    }
`
export const TextWrapper = styled.div`
    max-width: 350px;
`