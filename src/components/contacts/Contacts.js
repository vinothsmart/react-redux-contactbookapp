import Avatar from "react-avatar";
import { Link } from "react-router-dom";

export const Contacts = ({ contacts }) => {
  const { id, name, email, phone } = contacts;
  return (
    <tr>
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
        <Link to="#">
          <span className="material-icons">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};
