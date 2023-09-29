import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <>
        <label htmlFor="findName">
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilterChange}
          />
        </label>
      </>
    );
  }
}
