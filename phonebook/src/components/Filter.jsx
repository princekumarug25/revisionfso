const Filter = ({handleFilter})=>{
  return(
    <>
    <label htmlFor="filter">Filter</label>
      <div>
        <input id="filter" onChange={handleFilter} />
      </div>
      </>
  )
}
export default Filter;