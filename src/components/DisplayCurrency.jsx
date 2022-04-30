const DisplayCurrency = (props) => {
    
    return (
        <div className="grid">
            {
                props.totalCurrency.map((currency) => (
                    <div key={currency.name} className="display">
                        <h3>{currency.name}</h3>
                        <h2>{currency.priceUsd}</h2>
                        <h2>{currency.changePercent24Hr}</h2>
                    </div>
                ))
            }
        </div>
  )
}

export default DisplayCurrency