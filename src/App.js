import React from "react"
import { Component } from "react"

import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monstersInc: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monstersInc: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monstersInc, searchField } = this.state
    const filterMonsters = monstersInc.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1 className='AppName'>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters}></CardList>
      </div>
    )
  }
}

export default App
