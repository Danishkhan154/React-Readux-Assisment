import React from "react";
import Pokemons from "./Components/Pokemons";
import content from "./mockData/mockData";

class App extends React.Component {
  render() {
    return <Pokemons Content={this.props.content} />;
  }
}

App.defaultProps = {
  Content: content,
};
export default App;
