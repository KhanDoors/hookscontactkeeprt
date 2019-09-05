import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";
import { stat } from "fs";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "troy aikman",
        email: "troy@cowboys.com",
        phone: "212-555-1212",
        type: "personal"
      },
      {
        id: 2,
        name: "steve jones",
        email: "steve@cowboys.com",
        phone: "212-555-1213",
        type: "personal"
      },
      {
        id: 3,
        name: "john Smith",
        email: "john@cowboys.com",
        phone: "212-555-1214",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // ADD_CONTACT
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //DELETE_CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //SET_CURRENT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //CLEAR_CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //UPDATE_CONTACT
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //FILTER_CONTACTS

  //CLEAR_FILTER

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
