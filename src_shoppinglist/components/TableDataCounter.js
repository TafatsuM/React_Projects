import React from "react";

const TableDataCounter = ({ id, count, handleCounter, dismiss, status }) => (
  <td className="nowrap" style={{textDecoration:dismiss ? "line-through" : ""}}>
    <button
      className="btn mr-2"
      onClick={(e) => handleCounter(id, status, "decrement")}
    disabled={dismiss}
    >
      -
    </button>
    {count}
    <button
      className="btn ml-2"
      onClick={(e) => handleCounter(id, status, "increment")}
      disabled={dismiss}
      >
      +
    </button>
  </td>
);

export default TableDataCounter;
