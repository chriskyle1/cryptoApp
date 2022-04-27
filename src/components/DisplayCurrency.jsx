import axios from "axios"
import { CURRENCY_NAME } from "../globals"

const DisplayCurrency = (props) => {




  
    return (
        <div>
            {
                props.currency.map((currency) => (
                    <div>
                        <h3>{currency.name}</h3>
                        <h2>{priceUsd}</h2>
                        <h2>{changePercent24Hr}</h2>
                    </div>
                ))
            }
        </div>
  )
}

export default DisplayCurrency