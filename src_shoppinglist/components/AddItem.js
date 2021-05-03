import React, { useState } from "react";

const initialState = {
  id: 0,
  name: "",
  quantity: 0,
  rating: 1,
  dismiss: false
};

function AddItem(props) {
  const [item, setitem] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.AddItem(item);
    setitem(initialState);
  };
  //console.log(item);
  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="name" className="form-label mr-2">
          Add Item Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={item.name}
          onChange={(e) =>
            setitem({
              ...item,
              name: e.target.value,
              id: props.listData.length + 1,
            })
          }
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
}

export default AddItem;
