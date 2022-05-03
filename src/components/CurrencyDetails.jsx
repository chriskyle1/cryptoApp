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
        {currencyDetails ? (
            <div>
                <h1 className="name">{currencyDetails.name} {currencySymbol.currencySymbol}</h1>
                <h2 className='price'>Current Price USD: {currencyDetails.priceUsd}</h2>
                <h2>Percent Change in Price in 24 hours: {currencyDetails.changePercent24Hr}</h2>
            </div>
        ) : (
            <h3>Waiting for Input...</h3>
        )}
        </div>
    )
}

export default CurrencyDetails