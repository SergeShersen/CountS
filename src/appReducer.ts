

export  type CounterSettingsType = {
    minValue: number
    maxValue: number
}
let minValues = localStorage.getItem( 'minValues')
if(minValues){
    minValues = JSON.parse(minValues)
}
let maxValues = localStorage.getItem( 'maxValues')
if(maxValues){
    maxValues = JSON.parse(maxValues)
}


export type AppStateType ={
    currentCounter: number 
    counterSettings: CounterSettingsType
    mainError: string
    mainMessage: string
   
}
const appState: AppStateType =  {
    currentCounter: minValues && +minValues || 0,
    counterSettings: {
        minValue: minValues && +minValues || 0,
        maxValue: maxValues && +maxValues || 5,
    },
    mainError: '',
    mainMessage: '',
  
}

export const appReducer = (state = appState , action: ActionType) => {
    switch(action.type ) {
        case 'INC' : {
            const incrementedCount = state.currentCounter + 1
            localStorage.setItem( 'counter', JSON.stringify(incrementedCount))
            const newState = {
                ...state,
                currentCounter: incrementedCount
            }
            return newState
        }
        case 'RESET': {
            return {...state,currentCounter: state.counterSettings.minValue}
        }
        case 'MAX-VALUE':{
           
            const newState = {
                ...state,
                counterSettings: {
                    ...state.counterSettings,
                    maxValue: action.payload.maxValues
                }
            }
            
            return newState
        }
        case 'MIN-VALUE' :{
            
            const newState = {
                ...state,
                counterSettings: {
                    ...state.counterSettings,
                    minValue: action.payload.minValues
                }
            }
            
            return newState
        }
        case 'ERROR' : {
            return {...state,mainError: action.payload.error}
        }
        case 'COUNT' : {
            const newState = {
                ...state,
                currentCounter: action.payload.minValues
            }
            return newState
        }
        default : {
            return state
        }
    }
}

export const incCountAC = () => {
    return { type: 'INC'} as const
}

export const countFromLocalStorage = (payload: {minValues :number}) => {
    return { type: 'COUNT', payload} as const
}

export const maxValueFromLocalStorage = (payload: {maxValues :number}) => {
    return { type: 'MAX-VALUE', payload} as const
}
export const minValueFromLocalStorage = (payload: {minValues :number} ) => {
    return { type: 'MIN-VALUE' , payload} as const
}

export const resetCountAC = () => {
    return { type: 'RESET'} as const
}
export const errorForCountAC = (payload: {error: string}) => {
    return { type: 'ERROR',payload} as const
}

type ErrorForCountActionType = ReturnType<typeof errorForCountAC>
type CountFromLocalStorage = ReturnType<typeof countFromLocalStorage >
type MaxValueFromLocalStorageActionType = ReturnType<typeof maxValueFromLocalStorage>
type MinValueFromLocalStorageActionType = ReturnType<typeof minValueFromLocalStorage>
type IncCountActionType = ReturnType<typeof incCountAC>
type ResetCountActionType = ReturnType<typeof resetCountAC>
type ActionType = ResetCountActionType | IncCountActionType | MaxValueFromLocalStorageActionType | MinValueFromLocalStorageActionType | ErrorForCountActionType |CountFromLocalStorage