export const Contacts = (props) => {
  return (
    <tr>
      <th scope="row">{props.contacts.id}</th>
      <td>{props.contacts.name}</td>
      <td>{props.contacts.phone}</td>
      <td>{props.contacts.email}</td>
    </tr>
  );
};
