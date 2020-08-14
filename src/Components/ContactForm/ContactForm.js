import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { addContact } from "../../redux/actions/changeContactAction";
import styles from "./ContactForm.module.css";
import AlertMessage from "../AlertMessage/AlertMessage";

class ContactForm extends Component {
  formInitialState = {
    name: "",
    number: "",
  };

  state = {
    ...this.formInitialState,
    alert: false,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { name, number, alert } = this.state;
    e.preventDefault();

    const { contacts } = this.props;
    const isExists = contacts.find((contact) => contact.name === name);

    if (isExists) {
      this.toggleAlert(alert);
      return this.reset();
    }

    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.formInitialState });
  };

  toggleAlert = (status) => {
    this.setState({ alert: !status });
  };

  render() {
    const { name, number, alert } = this.state;
    const noAlert = () => this.setState({ alert: !alert });

    return (
      <>
        <CSSTransition
          in={alert}
          classNames="Alert"
          timeout={1500}
          unmountOnExit
          onEntered={noAlert}
        >
          <AlertMessage />
        </CSSTransition>

        <div className={styles.block}>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={this.submitHandler}
          >
            <label className={styles.label}>
              Name:
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={this.inputHandler}
              />
            </label>

            <label className={styles.label}>
              Number:
              <input
                className={styles.input}
                type="tel"
                name="number"
                placeholder="Your Number"
                value={number}
                onChange={this.inputHandler}
              />
            </label>

            <button type="submit" className={styles.button}>
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
};
