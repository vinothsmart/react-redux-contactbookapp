import { CREATE_CONTACT } from "../constant/types";

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

export const editContact = (id) => ({
  type: type,
  payload: id,
});
