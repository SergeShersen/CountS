
import React, { useState } from 'react';
import { Button } from "./Button"
import styled from 'styled-components';




type CountsType = {
    count: number
    setCount: (counts:number) => void
    maxGlobalValue: number
    minGlobalValue: number
    errors: string
    setErrors: (string: string) => void
    
}

export const Counts  = ( {count, setCount, maxGlobalValue, minGlobalValue,errors}:CountsType) => {
    
   
    
    const incHendler = () => {
        setCount(count + 1 )
    }
    const resetHendler = () => {
        setCount(minGlobalValue)
    }


    return (
        <CountScreen>
                <h1 className= { maxGlobalValue < minGlobalValue || maxGlobalValue === minGlobalValue || count === maxGlobalValue || minGlobalValue > maxGlobalValue? 'arreror' : 'notArreror'}>{errors ? errors : count}</h1>  
                <ButtonBox>
                    <Button  
                        title = {'inc'} 
                        disabled = { maxGlobalValue < minGlobalValue || maxGlobalValue === minGlobalValue || count === maxGlobalValue? true : false} 
                        onClick={incHendler}
                    />
                    <Button  
                        title = {'reset'} 
                        disabled = { count > minGlobalValue ? false : true} 
                        onClick={resetHendler}
                    />
                </ButtonBox>
        </CountScreen>
    )
}

const CountScreen = styled.div `
    border: 2px solid blue;
    background-color: blanchedalmond;
    width: 300px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
`
const MainScreen = styled.h2 `
    width: 300px;
    height: 100px;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    border-radius: 10px;
    background-color: blanchedalmond;
    margin: 0;
    
`
const ButtonBox = styled.div `
    margin-top: 20px;
    width: 300px;
    height: 50px;
    border: 2px solid blue;
    border-radius: 10px;
    background-color: blanchedalmond;
    display: flex;
    justify-content: space-around;
    align-items: center;
`