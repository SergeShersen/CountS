import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from "./Button"
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { countFromLocalStorage, errorForCountAC, maxValueFromLocalStorage, minValueFromLocalStorage } from './appReducer';




export const NextCounts  =() => {

    const maxGlobalValue = useSelector<RootState, number>(state => state.counts.counterSettings.maxValue)
    const minGlobalValue = useSelector<RootState, number>(state => state.counts.counterSettings.minValue)
    const dispatch = useDispatch()
    
    


    const changeItemMaxHandler = (e:ChangeEvent<HTMLInputElement>) =>{

    localStorage.setItem('maxValues', JSON.stringify(+(e.currentTarget.value)) )
    dispatch(maxValueFromLocalStorage({maxValues:+(e.currentTarget.value)}) )
    dispatch(errorForCountAC({error: 'Pleas set'}))
    }

    const changeItemMinHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    localStorage.setItem('minValues', JSON.stringify(+(e.currentTarget.value)) )
    dispatch(minValueFromLocalStorage({minValues:+(e.currentTarget.value)}) )
    dispatch(errorForCountAC({error: 'Pleas set'}))
    }

   const onSetHandler = () => {

    localStorage.setItem('counter', JSON.stringify(minGlobalValue) )
    dispatch(countFromLocalStorage({minValues:minGlobalValue}))
    dispatch(errorForCountAC({error: ''}))
   }
    
    return (
        <CountScreen>
            <MainsScree>
                <span>
                    <label>Max value</label>
                    <input
                        className= { (maxGlobalValue < 0  || minGlobalValue > maxGlobalValue) ? 'error' : ''}
                        type="number" 

                        value={maxGlobalValue} 
                        onChange={changeItemMaxHandler}
                    />
                </span>
                <span>
                    <label>Min value</label>
                    <input
                        className= { (minGlobalValue < 0 || minGlobalValue > maxGlobalValue) ? 'error' : ''}
                        type="number"  
                        value={minGlobalValue} 
                        onChange={changeItemMinHandler}
                    />
                </span>
            </MainsScree>  
            <ButtonBox>
                <Button  
                title='Set'
                disabled = { maxGlobalValue < minGlobalValue || maxGlobalValue < 0 || minGlobalValue < 0}   
                onClick={onSetHandler} />
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