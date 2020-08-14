import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import fade from "./Fade.module.css";
import styles from "./ContactList.module.css";
import SingleContact from "../SingleContact/SingleContact";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.block}>
      <TransitionGroup component="li" className={styles.liCover}>
        {contacts.map(({ id }) => (
          <CSSTransition key={id} classNames={fade} timeout={800}>
            <SingleContact id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const getFilteredContact = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: getFilteredContact,
  };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};
