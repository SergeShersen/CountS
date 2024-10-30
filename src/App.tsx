import React, { useState,useEffect } from 'react';
import './App.css';
import { Counts } from './Counts';
import { NextCounts } from './NextCounts';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { countFromLocalStorage, errorForCountAC } from './appReducer';


export function App() {
    const maxGlobalValue = useSelector<RootState, any>(state => state.counts.counterSettings.maxValue)
    const minGlobalValue = useSelector<RootState, any>(state => state.counts.counterSettings.minValue)
    const dispatch = useDispatch()
       

   

        useEffect(() => {
            if(maxGlobalValue < minGlobalValue  ||  maxGlobalValue < 0 ||  minGlobalValue < 0){
                dispatch(errorForCountAC({error: 'Incorrect'}))
            } 
        },[minGlobalValue,maxGlobalValue,])

    return (
        <div className="App">
            <Counts/>
            <NextCounts  />
        </div>
    );
}




