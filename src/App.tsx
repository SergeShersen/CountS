import React, { useState,useEffect } from 'react';
import './App.css';
import { Counts } from './Counts';
import { NextCounts } from './NextCounts';


export function App() {
        const [count, setCount] = useState(0)
        const [maxGlobalValue, setMaxGlobalValue] = useState(() => {
            let valueString = localStorage.getItem( 'maxValues')
            if(valueString){
                let newValue = JSON.parse(valueString)
                return newValue
            }else{
                return 5
            }
        }) 
        const [minGlobalValue, setMinGlobalValue] = useState(() => {
            let valueString = localStorage.getItem( 'minValues')
            if(valueString){
                let newValue = JSON.parse(valueString)
                return newValue
            }else{
                return 0
            }
        })
        const [maxSaveValue, setMaxSaveValue] = useState(() => {
            let valueString = localStorage.getItem( 'maxValues')
            if(valueString){
                let newValue = JSON.parse(valueString)
                return newValue
            }else{
                return 5
            }
        }) 
        const [minSaveValue, setMinSaveValue] = useState(() => {
            let valueString = localStorage.getItem( 'minValues')
            if(valueString){
                let newValue = JSON.parse(valueString)
                return newValue
            }else{
                return 0
            }
        }) 
        const [errors, setErrors] = useState('')



        useEffect(() => {
            if(maxGlobalValue < -1 || maxGlobalValue === minGlobalValue || maxGlobalValue < minGlobalValue || minGlobalValue<-1){
                setErrors('Incorrect')
            } else if( maxGlobalValue !== maxSaveValue || minGlobalValue !== minSaveValue){
                setErrors('Press set')
            }else{
                setCount(minGlobalValue)
                setErrors('')
            }
        },[minGlobalValue,minSaveValue,maxGlobalValue,maxSaveValue])


        
    return (
        <div className="App">
            <Counts 
                count={count} 
                setCount={setCount} 
                maxGlobalValue={maxGlobalValue} 
                minGlobalValue={minGlobalValue}  
                errors = {errors} 
                setErrors= {setErrors} 
            />
            <NextCounts 
                setGlobalMaxValue = {setMaxGlobalValue} 
                setGlobalMinValue ={setMinGlobalValue}
                setMaxSaveValue = {setMaxSaveValue}
                setMinSaveValue = {setMinSaveValue}
                maxSaveValue = {maxSaveValue}
                minSaveValue = {minSaveValue}
                maxGlobalValue={maxGlobalValue} 
                minGlobalValue={minGlobalValue} 
                setCount = {setCount} 
            />
        </div>
    );
}




