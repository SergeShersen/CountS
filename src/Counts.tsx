
import React, { useState } from 'react';
import { Button } from "./Button"
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { incCountAC, resetCountAC } from './appReducer';


export const Counts  = ( ) => {
    
   const count = useSelector<RootState, any>(state => state.counts.currentCounter)
   const maxGlobalValue = useSelector<RootState, any>(state => state.counts.counterSettings.maxValue)
   const minGlobalValue = useSelector<RootState, any>(state => state.counts.counterSettings.minValue)
   const errors = useSelector<RootState, any>(state => state.counts.mainError)

   const dispatch = useDispatch()
    
    const incHendler = () => {
        dispatch(incCountAC())
    }
    const resetHendler = () => {
        dispatch(resetCountAC())
    }


    return (
        <CountScreen>
                <h1 className= { maxGlobalValue < minGlobalValue ||  minGlobalValue > maxGlobalValue || count === maxGlobalValue? 'arreror' : 'notArreror'}>{errors ? errors : count}</h1>  
                <ButtonBox>
                    <Button  
                        title = {'inc'} 
                        disabled = { maxGlobalValue < minGlobalValue  || count === maxGlobalValue} 
                        onClick={incHendler}
                    />
                    <Button  
                        title = {'reset'} 
                        disabled = { count <= minGlobalValue } 
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