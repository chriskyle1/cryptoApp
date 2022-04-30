const DisplayCurrency = (props) => {
    
    return (
        <div className="grid">
            {
                props.totalCurrency.map((currency) => (
                    <div key={currency.name} className="card">
                        <button className="goto">
                            <h1 className="name">{currency.name}</h1>
                            <h2>Current Price in USD: {currency.priceUsd}</h2>
                            <h2>Percent change in 24 hours: {currency.changePercent24Hr}%</h2>
                        </button>
                    </div>
                ))
            }
        </div>
  )
}

export default DisplayCurrency