const SelectCurrency = (props) => {

  return (
    <div>
      <input type='text' name='currency' onChange={props.handleChange} value={props.input}></input>
      <button onClick={props.addCurrency}>Search</button>
    </div>
  )
}

export default SelectCurrency