import React, { Component } from "react";
import "./App.css";
import ListItems from "./components/ListItems";
import AddItem from "./components/AddItem";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    listData: [
      {
        id: 1,
        name: "Apple",
        quantity: 0,
        rating: 1,
        dismiss: false,
      },
      {
        id: 2,
        name: "Banana",
        quantity: 0,
        rating: 1,
        dismiss: false,
      },
      {
        id: 3,
        name: "Carrot",
        quantity: 0,
        rating: 1,
        dismiss: false,
      },
    ],
  };

// SINGLE FUNCTION SOLUTION 
  handleCounter = (id, key, action) => {
    //console.log("handleCounter works ==> ", id, key, action);
    this.setState({
      //with the help of map(), we re_create listData
      listData: this.state.listData.map((item) => {
        if (item.id !== id) return item;  // it checks every item inside listData, if id doesnt match item returns
        return {   // this part is else part; it means, if id match return an object
          ...item,  // inside object take full object keys and values
          quantity: // change quantity according to parameters
            key === "quantity"
              ? action === "increment"
                ? item.quantity + 1
                : item.quantity >= 1
                ? item.quantity - 1
                : 0
              : item.quantity,
          rating: // change rating according to parameters
            key === "rating"
              ? action === "increment"
                ? item.rating + 1
                : item.rating >= 2
                ? item.rating - 1
                : 1
              : item.rating,
        };
      }),
    });
  };

  //SEPERATE FUNCTION SOLUTION
   /* Increment or Decrement Quantity */
  handleCounterQuantity = (id, operation) => {
    this.setState((prevState) => {
      const listData = prevState.listData.map((data) => {
        if (data.id === id) {
          switch (operation) {
            case "increment":
              data.quantity += 1;
              break;
            case "decrement":
              data.quantity = data.quantity >= 1 ? data.quantity - 1 : 0;
              break;
            default:
              break;
          }
        }
        return data;
      });
      return {
        listData,
      };
    });
  };

  /* Increment or Decrement Rating */
  handleCounterRating = (id, operation) => {
    this.setState((prevState) => {
      const listData = prevState.listData.map((data) => {
        if (data.id === id) {
          switch (operation) {
            case "increment":
              data.rating = data.rating <= 2 ? data.rating + 1 : 3;
              break;
            case "decrement":
              data.rating = data.rating >= 2 ? data.rating - 1 : 1;
              break;
            default:
              break;
          }
        }
        return data;
      });
      return {
        listData,
      };
    });
  };

  /* adding new item to the list */
  AddItem = (newItem) => {
    this.setState({
      listData: [...this.state.listData, newItem],
    });
  };

  /** Dismiss or admit item from list */
  Dismiss = (id) => {
    this.setState({
      listData: this.state.listData.map((item) => {
        if (item.id !== id) return item;
        return { ...item, dismiss: !item.dismiss };
      }),
    });
  };

  /**Adding to the shopping cart - with the sorting option according to rating */
  ShoppingCart = () => {
    const filteredItems = this.state.listData.filter(
      (item) => !item.dismiss && item.quantity !== 0
    );
    filteredItems.sort((a, b) =>
      a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
    );
    return filteredItems;
  };

  render() {
    const { listData } = this.state;
    //console.log(listData);
    return (
      <div className="App">
        <div className="container">
          <h1>Shopping List with Counter</h1>
          <AddItem AddItem={this.AddItem} listData={listData} />
          <ListItems
            listData={listData}
            handleCounterQuantity={this.handleCounterQuantity}
            handleCounterRating={this.handleCounterRating}
            handleCounter={this.handleCounter}
            Dismiss={this.Dismiss}
          />
          <ShoppingCart ShoppingCart={this.ShoppingCart()} />
        </div>
      </div>
    );
  }
}

export default App;
