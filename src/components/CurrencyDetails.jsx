import React from 'react'
import axios from 'axios'
import { CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from '../globals'
import { useEffect, useState } from 'react'

const CurrencyDetails = (props) => {
    
    const [currencyDetails, setCurrencyDetails] = useState('')
    const [currencySymbol, setCurrencySymbol] = useState('')

    useEffect(() => {
        const getDetails = async () => {
            console.log(props.currency)
            const res = await axios.get(`${CURRENCY_NAME}${props.currency}`)
            const sym = await axios.get(`${CURRENCY_CHANGE}${props.currency}`)
            console.log(res.data)
            setCurrencyDetails(res)
            setCurrencySymbol(sym)
                             
        }
        if(props.currency){
            getDetails()
        }
    }, [props.currency])
        
    
    
    return(
        <div>
            <h2>{currencyDetails.name} {currencySymbol.currencySymbol}</h2>
            <h3>{currencyDetails.priceUsd}</h3>
            <h3>{currencyDetails.changePercent24Hr}</h3>
        </div>

    )
}

export default CurrencyDetails