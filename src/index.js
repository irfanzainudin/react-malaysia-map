import React, { Component } from "react";
import PropTypes from "prop-types";
import data from "./data/malaysia-map-dimensions";
import MalaysianState from "./components/MalaysianState";

class MalaysianMap extends Component {

  clickHandler = (stateAbbreviation) => {
    this.props.onClick(stateAbbreviation);
  };

  fillStateColor = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].fill) {
      return this.props.customize[state].fill;
    }

    return this.props.defaultFill;
  };

  stateClickHandler = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler
    }
    return this.clickHandler;
  }

  buildPaths = () => {
    let paths = [];
    let dataStates = data();
    for (let stateKey in dataStates) {
      var path;
      if (stateKey.localeCompare("KDH") == 0) {
        path = <g transform="matrix(0.753837,0,0,0.675887,-11.54021,-149.2118)"><MalaysianState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey]["dimensions"]} state={stateKey} fill={this.fillStateColor(stateKey)} onClickState={this.stateClickHandler(stateKey)} /></g>
      } else if (stateKey.localeCompare("PNG") == 0) {
        path = <g transform="matrix(0.753837,0,0,0.675887,-11.99227,-149.5214)"><MalaysianState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey]["dimensions"]} state={stateKey} fill={this.fillStateColor(stateKey)} onClickState={this.stateClickHandler(stateKey)} /></g>
      } else {
        path = <MalaysianState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey]["dimensions"]} state={stateKey} fill={this.fillStateColor(stateKey)} onClickState={this.stateClickHandler(stateKey)} />
      }
      paths.push(path);
    };
    return paths;
  };

  render() {
    return (
      <svg className="malaysia-state-map" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox="0 0 600 600">
        <title>{this.props.title}</title>
        <g className="outlines">
          { this.buildPaths() }
        </g>
      </svg>
    );
  }
}

MalaysianMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  defaultFill: PropTypes.string,
  customize: PropTypes.object
};

MalaysianMap.defaultProps = {
  onClick: () => {},
  width: 600,
  height: 600,
  defaultFill: "#D3D3D3",
  title: "Malaysia",
  customize: {}
};

export default MalaysianMap;