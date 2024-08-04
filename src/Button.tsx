import styled from "styled-components"

type ButtonProps = {
    title?: string
    onClick?: () => void
    disabled?: boolean
}


export const Button  = ({title,onClick,disabled}:ButtonProps) => {
    return <A  disabled = {disabled} onClick={onClick}>{title}</A>
}

const A = styled.button`
    width: 100px;
    height:30px;
    background: blue;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: blanchedalmond;
    &:disabled {
        background: #ffff;
    }
`