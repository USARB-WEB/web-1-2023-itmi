export default function ProductsFilters(){
    return <aside>
    <div className={'filter-element'}>
      <div>Price</div>
      <div>
        <input type={'number'}/>
        <input type={'number'}/>
      </div>
    </div>

    <div className={'filter-element'}>
      <div>Brand</div>
      <div>
        <label>
          <input type={'checkbox'}/> Brand 1
        </label>
        <label>
          <input type={'checkbox'}/> Brand 1
        </label>
      </div>
    </div>
    <button>Apply filters</button>
  </aside>
}