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
    width: 50px;
    height:30px;
    background: forestgreen;
    &:disabled {
        background: #ffff;
    }
`