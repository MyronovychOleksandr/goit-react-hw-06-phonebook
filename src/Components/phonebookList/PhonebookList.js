import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PhonebookListItem from "./phonebookListItem/PhonebookListItem";
import s from "./PhonebookList.module.css";

const PhonebookList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <PhonebookListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phonebook;
  const normalizedFilter = filter.toLowerCase();
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return {
    contacts: visibleTasks,
  };
};

export default connect(mapStateToProps)(PhonebookList);
