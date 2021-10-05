import React from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import { getCountryData } from "../Actions/actions";
import mockData from "../mockData/mockData";
import DropDown from "./DropDown";

export class Pokemons extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    pokemonName: "charmeleon",
  };
  pokemon = this.state.pokemonName;
  componentDidMount() {
    const { getCountryData } = this.props;
    getCountryData(this.pokemonName);
  }

  render() {
    return (
      <div className="countries">
        <h1 className="heading">Select Your Pokemon :</h1>
        <DropDown getCountryData={this.props.getCountryData} data={mockData} />

        <h2>Their abilities are :</h2>

        {Object.keys(this.props.countriesData).includes("abilities") ? (
          <DropDown data={this.props.countriesData} />
        ) : (
          <p style={{ color: "red" }}>Error While Fetching</p>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return { countriesData: state.country.countryData };
};

export const mapDispatchToProps = (dispatch) => {
  return { getCountryData: (url) => dispatch(getCountryData(url)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
