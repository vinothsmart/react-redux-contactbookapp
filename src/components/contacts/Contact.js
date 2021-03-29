import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContact, clearAllContact } from "../../actions/contactaction";
import { Contacts } from "./Contacts";

export const Contact = () => {
  const dispatch = useDispatch();
  const [SelectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (SelectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else if (!SelectAll) {
      dispatch(clearAllContact());
    }
  }, [SelectAll]);

  const contacts = useSelector((state) => state.contacts.contacts);
  console.log("contacts", contacts);

  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );

  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button className="btn btn-danger mb-3">Delete All</button>
      ) : null}
      <table className="table table-shadow table-striped">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  value={SelectAll}
                  className="custom-control-input"
                  onClick={() => {
                    setSelectAll(!SelectAll);
                  }}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <Contacts
                contacts={contacts}
                key={contacts.id}
                SelectAll={SelectAll}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
