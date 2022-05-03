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
            <h4>Powered by Coincap API</h4> 
            <img ahref='https://res.cloudinary.com/postman/image/upload/t_team_logo_pubdoc/v1/team/525e5bf5181d9cb4d8c085f31713342b1bbb53d9d0885532cf9300a424cbceb1'></img>
            <SelectCurrency handleChange={handleChange} input={input} addCurrency={addCurrency} /> 
            <CurrencyDetails currency={currency} />
            {totalCurrency ? <DisplayCurrency totalCurrency={totalCurrency} currency={currency}/> : null}        
            

        </div>
    )
}

export default App