import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

console.log(contacts.splice(0, 5));

class App extends Component {

  state = {
    listContacts: contacts.splice(0, 5),
  };


  addRandom = () => {
    const randomContacts = [contacts[Math.floor(Math.random() * contacts.length)]];
    const copyWithRandom = [...randomContacts, ...this.state.listContacts];

    this.setState({
      listContacts: copyWithRandom,
    });
  };


sortByName = () => {

  const copyContacts = [...this.state.listContacts];
  let sort = copyContacts.sort((a, b) => a.name.localeCompare(b.name));

  this.setState({
    listContacts: sort,
  });

};


sortByPop = () => {

  const copyContacts = [...this.state.listContacts];
  let sort = 
    copyContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });


  this.setState({
    listContacts: sort,
  });

};

handleDelete = (name) => {
  const copyContacts = [...this.state.listContacts];
  const newArray = copyContacts.filter((contact) => contact.name !== name);

  this.setState({
    listContacts: newArray,
  });
};



  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>

        <div></div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listContacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt="pic"
                      style={{ height: 120 }}
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.handleDelete(contact.name)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

