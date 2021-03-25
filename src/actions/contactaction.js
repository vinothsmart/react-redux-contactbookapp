import { CREATE_CONTACT } from "../constant/types";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};
