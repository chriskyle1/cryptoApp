import React from 'react'
import axios from 'axios'
import { BASE, CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from './globals'
import { useEffect, useState } from 'react'
// import './styles/App.css'
import CurrencyDetails from './components/CurrencyDetails'
import SelectCurrency from './components/SelectCurrency'
import DisplayCurrency from './components/DisplayCurrency'


const App = () => {
    const [currencys, setCurrencys] = useState('')
    const [input , setInput] = useState([])
    const [selectCurrency, setSelectedCurrency] = useState('')

    const selectedCurrency = (id, props) => {
        const cur = props.currency
        console.log(cur)
        setSelectedCurrency(id)
    }

    const addCurrency = () => {
        let list = [...currencys, input]
        if(input){
            setCurrencys(list)
            console.log(list)
        }else {
            setInput('')
        }
    }

    const removeCurrency = (index) => {
        let list = [...input]
        list.splice(index,1)
        setCurrencys(list)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    // const getSomething = async () => {
    //     const res = await axios.get(`${CURRENCY_NAME}`)

    //     console.log(res)
    // }

    // getSomething()
    return(
        <div>
            <h1>Welcome to the CryptoApp</h1>
            
            <SelectCurrency addCurrency={addCurrency} handleChange={handleChange} removeCurrency={removeCurrency}currencys={currencys}/>
            <CurrencyDetails CurrencyDetails={CurrencyDetails} selectedCurrency={selectedCurrency}/>

        </div>
    )
}

export default App