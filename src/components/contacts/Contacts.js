import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactaction";

export const Contacts = ({ contacts, SelectAll }) => {
  const { id, name, email, phone } = contacts;
  const dispatch = useDispatch();

  return (
    <tr>
      <td scope="row">
        <div className="custom-control custom-checkbox">
          <input
            checked={SelectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <th scope="row">{id}</th>
      <td>
        <Avatar className="me-2" name={name} size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons">edit</span>
        </Link>
        <Link onClick={() => dispatch(deleteContact(id))}>
          <span className="material-icons">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};
