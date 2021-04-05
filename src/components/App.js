import contacts from "../contacts";
import React from "react";
import Card from "./Card";

function App() {
  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => {
        return (
          <Card
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            imgSRC={contact.imgURL}
          />
        );
      })}
    </div>
  );
}

export default App;
