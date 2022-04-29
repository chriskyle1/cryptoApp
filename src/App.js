import './styles/App.css'
import React from 'react'
import axios from 'axios'
import { BASE, CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from './globals'
import { useEffect, useState } from 'react'
import CurrencyDetails from './components/CurrencyDetails'
import SelectCurrency from './components/SelectCurrency'
import DisplayCurrency from './components/DisplayCurrency'


const App = () => {
    const [currency, setCurrency] = useState('')
    const [input , setInput] = useState('')
    const [totalCurrency, setTotalCurrency] = useState(null)

    const addCurrency = async () => {
        if(input){
            setCurrency(input)
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
            <h1>Welcome to the CryptoApp</h1>
            <SelectCurrency handleChange={handleChange} input={input} addCurrency={addCurrency} />
            <CurrencyDetails currency={currency}/>
            {totalCurrency ? <DisplayCurrency totalCurrency={totalCurrency}/> : null}
            
            

        </div>
    )
}

export default App