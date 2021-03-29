import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
} from "../constant/types";

// add contact
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

// get contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// delete contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// select contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});
