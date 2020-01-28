import React from 'react';
import T from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterValue, onFilterChange }) => (
  <div>
    <p className={styles.text}>Find contacts by name</p>
    <input
      id="filter"
      value={filterValue}
      placeholder="Print the name that you want to find..."
      onChange={onFilterChange}
      className={styles.input}
    />
  </div>
);

Filter.defaultProps = {
  filterValue: '',
};

Filter.propTypes = {
  filterValue: T.string,
  onFilterChange: T.func.isRequired,
};

export default Filter;
