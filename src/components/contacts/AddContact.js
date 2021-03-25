import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import shortid from "shortid";
import { addContact } from "../../store";

export const AddContact = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const createContact = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("phone", phone);
    console.log("email", email);
    const newContact = {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: phone,
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => createContact(e)}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="enter your phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
