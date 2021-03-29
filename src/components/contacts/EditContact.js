import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactaction";
import { useHistory, useParams } from "react-router-dom";

export const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();

  const contact = useSelector((state) => state.contacts.contact);

  console.log("useParams", id);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const updateContacted = Object.assign(contact, {
      name: name,
      email: email,
      phone: phone,
    });

    dispatch(updateContact(updateContacted));

    history.push("/");
  };

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form onSubmit={(e) => onUpdateContact(e)}>
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
            <button className="btn btn-danger" type="submit">
              Edit Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
