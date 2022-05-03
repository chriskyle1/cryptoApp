import './styles/App.css'
import React from 'react'
import axios from 'axios'
import { BASE, CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from './globals'
import { useEffect, useState } from 'react'
import CurrencyDetails from './components/CurrencyDetails'
import SelectCurrency from './components/SelectCurrency'
import DisplayCurrency from './components/DisplayCurrency'
import { clear } from '@testing-library/user-event/dist/clear'


const App = () => {
    const [currency, setCurrency] = useState('')
    const [input , setInput] = useState('')
    const [totalCurrency, setTotalCurrency] = useState(null)
    
    const addCurrency = async () => {
        if(input){
            setCurrency(input.toLocaleLowerCase())
        }
        setInput('')
        
    }
    
    const handleChange = (click) => {
        setInput(click.target.value)
    }

    useEffect(() => {
        const getCrypto = async () => {
            
            const response = await axios.get(CURRENCY_NAME)
            
            setTotalCurrency(response.data.data)

        }
        getCrypto()
    }, [])
      
    return(
        <div>
            <h1 className='title'>Welcome to the CryptoApp</h1>
            <h4 className='api'>Powered by Coincap API</h4> 
            <h2>Search for a Currency</h2>
            <SelectCurrency handleChange={handleChange} input={input} addCurrency={addCurrency} /> 
            <CurrencyDetails currency={currency} />
            {totalCurrency ? <DisplayCurrency totalCurrency={totalCurrency} currency={currency}/> : null}        
        </div>
    )
}

export default App