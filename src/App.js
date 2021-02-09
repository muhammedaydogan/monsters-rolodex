// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // string: 'Hello visitor!',
      // number: 1,
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField) || monster.email.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
