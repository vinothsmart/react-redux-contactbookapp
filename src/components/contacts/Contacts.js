import Avatar from "react-avatar";

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
        <a href="#">
          <span className="material-icons">edit</span>
        </a>
        <a href="#">
          <span className="material-icons">remove_circle</span>
        </a>
      </td>
    </tr>
  );
};
