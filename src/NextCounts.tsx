import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from "./Button"
import styled from 'styled-components';

type Props = {
    maxGlobalValue: number
    minGlobalValue: number
    minSaveValue: number
    maxSaveValue: number
    setMaxSaveValue:(maxSaveValue: number) =>void
    setMinSaveValue:(minSaveValue: number) =>void
    setGlobalMaxValue: (maxValue: number) =>void
    setGlobalMinValue:(minValue: number) =>void
    setCount:(minValue: number) =>void
    
}

export const NextCounts  =({setGlobalMaxValue,setGlobalMinValue,setCount,maxGlobalValue,minGlobalValue,setMinSaveValue,setMaxSaveValue,minSaveValue,maxSaveValue}: Props) => {
    
    useEffect ( () => {
        localStorage.setItem('maxValues', JSON.stringify(maxSaveValue) )
    }, [maxSaveValue]
    )
    useEffect ( () => {
        localStorage.setItem('minValues', JSON.stringify(minSaveValue) )
    }, [minSaveValue]
    )

    const changeItemMaxHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setGlobalMaxValue(+(e.currentTarget.value))
    }

    const changeItemMinHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setGlobalMinValue(+(e.currentTarget.value))
    }

   
    
    return (
        <CountScreen>
            <MainsScree>
                <span>
                    <label>Max value</label>
                    <input
                        className= { (maxGlobalValue < 0 || minGlobalValue === maxGlobalValue || minGlobalValue > maxGlobalValue) ? 'error' : ''}
                        type="number" 
                        value={maxGlobalValue} 
                        onChange={changeItemMaxHandler}
                    />
                </span>
                <span>
                    <label>Min value</label>
                    <input
                        className= { (minGlobalValue < 0 || minGlobalValue === maxGlobalValue || minGlobalValue > maxGlobalValue) ? 'error' : ''}
                        type="number"  
                        value={minGlobalValue} 
                        onChange={changeItemMinHandler}
                    />
                </span>
            </MainsScree>  
            <ButtonBox>
                <Button  
                title='Set'
                disabled = {maxGlobalValue === minGlobalValue || maxGlobalValue < minGlobalValue || maxGlobalValue < 0}   
                onClick={() => {
                    setCount(minGlobalValue)
                    setMaxSaveValue(maxGlobalValue)
                    setMinSaveValue(minGlobalValue)
                }} />
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
const MainsScree = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid blue;
    background-color: blanchedalmond;
    width: 256px;
    height: 80px;
    padding: 20px;
    border-radius: 10px;
    span {
        width: 70%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: blue;
        font-size: 15px;
        font-weight: 700;
    }
    input {
        width: 50%;
        height: 30px;
        font-size: 20px;
        
    }

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