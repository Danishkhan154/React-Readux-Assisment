import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { getCountryData } = this.props;
    e.preventDefault();
    getCountryData(e.target.value);
  }

  render() {
    const { data } = this.props;
    return (
      <select
        onChange={(event) => this.handleChange(event)}
        className="classic"
      >
        {data.abilities.map((item, index) => (
          <option key={index} value={item.name}>
            {item.ability.name}
          </option>
        ))}
      </select>
    );
  }
}

DropDown.propTypes = {
  options: PropTypes.string,
};
export default DropDown;
