const DisplayCurrency = (props) => {
  
  
    return (
    <div>
        <ul>
            {props.input.map((currencys, index) => (
                <li key={currencys}>
                    {index}
                    <button onClick={() => props.removeTask(currencys)}></button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DisplayCurrency