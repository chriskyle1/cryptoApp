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
            const response = await axios.get(`${CURRENCY_CHANGE}${props.currency}`)
            setCurrencySymbol(response.data.data)
                      
            setCurrencyDetails(res.data.data)
            
            
                             
        }
        if(props.currency){
            getDetails()
        }
    }, [props.currency])
        
    
    
    return(
        <div>
            <h2>{currencyDetails.name} {currencySymbol.currencySymbol}</h2>
            <h3>Current Price USD: {currencyDetails.priceUsd}</h3>
            <h3>Percent Change in Price in 24 hours: {currencyDetails.changePercent24Hr}</h3>
        </div>

    )
}

export default CurrencyDetails