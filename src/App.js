import logo from "./logo.svg";
import "./App.css";
import { useState, Component, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/searchBar/searchBar.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => this.setState({ searchField: e.target.value });
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// const App = () => {
//   const [monsters, setMonsters] = useState([]);
//   const [searchField, setSearchField] = useState("");
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLowerCase().includes(searchField.toLowerCase());
//   });
//   function handleChange(e) {
//     setSearchField(e.target.value);
//   }
//   return (
//     <div className="App">
//       <SearchBar placeholder="search monsters" handleChange={handleChange} />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// };
export default App;
