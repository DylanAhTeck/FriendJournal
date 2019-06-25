import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Frodo',
        email: 'mountdoom@gmail.com',
        phone: '6969669',
        type: 'professional'
      },
      {
        name: 'Gandalf',
        email: 'eagle@gmail.com',
        phone: '696888',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear Current contact

  // Update Current contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider>
      value ={' '}
      {{
        contacts: state.contacts
      }}
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
