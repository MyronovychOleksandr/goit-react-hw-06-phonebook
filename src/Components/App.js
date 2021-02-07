import { React } from "react";
import PhonebookForm from "./phonebookForm/PhonebookForm";
import Filter from "./filter/Filter";
import PhonebookList from "./phonebookList/PhonebookList";
import { CSSTransition } from "react-transition-group";
import s from "./App.module.css";
import "./animation/fadeApp.css";

const App = () => (
  <div className={s.container}>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="header"
      unmountOnExit
    >
      <h2 className={s.phonebookHeader}>Phonebook</h2>
    </CSSTransition>
    <PhonebookForm />
    <CSSTransition in={2 > 1} timeout={250} classNames="filter" unmountOnExit>
      <Filter />
    </CSSTransition>

    <PhonebookList />
  </div>
);

export default App;
