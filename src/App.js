import React, { Component } from 'react'
import './App.css'
import {CardList} from './components/card-list/CardList'
import {SearchBox} from './components/search-box/SearchBox'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFields: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange=e=>{
    this.setState({searchFields: e.target.value})
  }

  render() {
    const {monsters, searchFields} = this.state;
    const filteredMonsters = monsters.filter(monster => {
     return monster.name.toLowerCase().includes(searchFields.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Robot finder</h1>
        <SearchBox 
          placeholder='find a monster'
          handleChange={this.handleChange}/>
        <CardList 
          monsters={filteredMonsters}/>
      </div>
    )
  }
}

