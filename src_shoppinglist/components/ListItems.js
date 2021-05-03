import React from "react";
import TableDataCounter from "./TableDataCounter";

function ListItems(props) {
  const { listData } = props;

  return (
    <div className="table-responsive">
      {!!listData ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Rating</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listData.map((data, index) => (
              <tr key={data.id}>
                <th scope="row">{index + 1}</th>
                <td style={{textDecoration:data.dismiss ? "line-through" : ""}}>{data.name}</td>
                <TableDataCounter
                  id={data.id}
                  count={data.quantity}
                  // handleCounter={props.handleCounterQuantity}
                  handleCounter={props.handleCounter}
                  dismiss={data.dismiss}
                  status={Object.keys(data)[2]}
                />
                <TableDataCounter
                  id={data.id}
                  count={data.rating}
                  //handleCounter={props.handleCounterRating}
                  handleCounter={props.handleCounter}
                  dismiss={data.dismiss}
                  status={Object.keys(data)[3]}
                />
                <td>
                  <button
                    className="btn btn-secondary mb-2"
                    onClick={()=>props.Dismiss(data.id)}
                  >
                    {data.dismiss ? "Admit" : "Dismiss"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ListItems;
