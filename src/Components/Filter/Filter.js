import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { handleFilter } from "../../redux/actions/changeContactAction";
import styles from "./Filter.module.css";

const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          placeholder="Type contact name"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  handleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
