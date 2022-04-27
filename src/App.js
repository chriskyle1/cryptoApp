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
    const [totalCurrency, setTotalCurrency] = useState('')

    const addCurrency = async () => {
        if(input){
            setCurrency(input)
            console.log(input)
        }
        setInput('')
        
    }

    const handleChange = (click) => {
        setInput(click.target.value)
    }

    useEffect(() => {
        const getCrypto = async () => {
            const crypto = await axios.get(CURRENCY_NAME)
            // console.log(crypto.data.data)
            setTotalCurrency(crypto.data.data)

        }
        getCrypto()
    }, [])
    
    useEffect(() => {
        const totalCurrency = async () => {
            const array = await axios.get(CURRENCY_NAME)
            // console.log(CURRENCY_NAME)
            setTotalCurrency(array)
        }
    }, [])
    
    
    return(
        <div>
            <h1>Welcome to the CryptoApp</h1>
            <SelectCurrency handleChange={handleChange} input={input} addCurrency={addCurrency} />
            <CurrencyDetails currency={currency}/>
            {/* <DisplayCurrency totalCurrency={totalCurrency}/> */}
            
            

        </div>
    )
}

export default App