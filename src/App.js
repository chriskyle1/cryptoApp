import React from 'react'
import axios from 'axios'
import { BASE, CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from './globals'
import { useEffect, useState } from 'react'
// import './styles/App.css'
import CurrencyDetails from './components/CurrencyDetails'


const App = () => {
    const [currency, setCurrency] = useState('')
    const [mark , setMark] = useState('')
    const [selectCurrency, setSelectedCurrency] = useState('')

    const selectedCurrency = (id, props) => {
        const cur = props.currency
        console.log(cur)
        setSelectedCurrency(id)
    }

    // const addCurrency = () => {
    //     let list = [...Mark,currency]
    //     if(currency){
    //         selectCurrency(currency)
    //     }else {
    //         select
    //     }




    // }

    // const getSomething = async () => {
    //     const res = await axios.get(`${CURRENCY_NAME}`)

    //     console.log(res)
    // }

    // getSomething()
    return(
        <div>
            <h1>Welcome to the CryptoApp</h1>
            
            <CurrencyDetails CurrencyDetails={CurrencyDetails} selectedCurrency={selectedCurrency}/>

        </div>
    )
}

export default App