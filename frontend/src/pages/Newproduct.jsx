 import React from 'react'

function Newproduct() {
  return (
    <div className="newProduct"> 
    <div className="productinfo">
      <h1>Add a new product</h1>
    <form action="" className="newform">
      <div className="ilable">
      <label className="formitems" htmlFor="">
        Choose the Product
       
      </label>
      <select className="formitemss"> 
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
       </select>
      </div>
      <div className="ilable">
      <label className="formitems" htmlFor="producerID">Enter Producer ID </label>
      <input className="formitemss" type="text" placeholder="Producer ID" />

      </div>
      <div className="ilable">
      <label className="formitems" htmlFor="producedDate">Produced Date</label>
      <input className="formitemss" type="date" />
      </div>
      <div className="ilable">
      <label className="formitems" htmlFor="product orgin">Product Orgin </label>
      <input className="formitemss" type="text" placeholder="Enter Product Orgin" />

      </div>
      
    </form>
    </div>
    <div className="storeinfo">
      <h1>Warehouse Storage Information</h1>
      <form action="">
      <div className="ilable">
      <label className="formitems" htmlFor="">
      Warehouse
       
      </label>
      <select className="formitemss"> 
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
       </select>
      </div>
      <div className="ilable">
      <label className="formitems" htmlFor="">
       Rack
       
      </label>
      <select className="formitemss"> 
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
       </select>
      </div>
      <div className="ilable">
      <label className="formitems" htmlFor="">
       Block
       
      </label>
      <select className="formitemss"> 
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
       </select>
      </div>
      </form>
      <div className="addProductButton">Add Product</div>
    </div>
   
      
    </div>
  )
}

export default Newproduct

 