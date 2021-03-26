import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getContact } from "../../actions/contactaction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";

export const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();

  console.log("useParams", id);
  useEffect(() => {
    dispatch(getContact(id));
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="card border-0 shadow">
        <div className="card-header">Add a contact</div>
        <div className="card-body">
          <form>
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
