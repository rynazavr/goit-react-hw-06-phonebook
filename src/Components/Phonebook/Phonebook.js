import React, { Component } from "react";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { contactStorage } from "../../redux/actions/changeContactAction";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

class Phonebook extends Component {
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.props.contactStorage(JSON.parse(savedContacts));
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={260}
          classNames={styles}
          mountOnExit
        >
          <h1 className={styles.blue}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />

        {this.props.contacts.length === 0 && (
          <>
            <h2 className={styles.headersmall}>Contacts</h2>
            <p className={styles.warningstyle}>
              No contacts in your contact list. Please, create a new cotnact!
            </p>
          </>
        )}
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  contactStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
