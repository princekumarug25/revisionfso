const PersonsForm = ({value,handleChange,numValue,handleNumber,handleClick})=>{
  return(
    <><form>
        <label htmlFor="name">Name:</label>
        <div>
          <input type="text" id="name" value={value} onChange={handleChange} />
        </div>
        <label htmlFor="number">Number:</label>
        <div>
          <input
            type="text"
            id="number"
            value={numValue}
            onChange={handleNumber}
          />
        </div>
        <button onClick={handleClick}>Add</button>
      </form>
      </>
  )
}
export default PersonsForm;