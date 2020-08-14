import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { deleteContact } from "../../redux/actions/changeContactAction";
import styles from "../ContactList/ContactList.module.css";
import fade from "../ContactList/Fade.module.css";

const SingleContact = ({ name, number, deleteContact }) => {
  return (
    <CSSTransition timeout={800} classNames={fade}>
      <ul className={styles.ulBlock}>
        <li className={styles.li}>
          <span className={styles.span}>{name}</span>
          <span className={styles.span}>{number}</span>
        </li>
        <button className={styles.button} type="button" onClick={deleteContact}>
          Delete
        </button>
      </ul>
    </CSSTransition>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(
    (contact) => contact.id === ownProps.id
  );

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);

SingleContact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
