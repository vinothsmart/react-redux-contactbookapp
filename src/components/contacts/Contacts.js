export const Contacts = ({ contacts }) => {
  const { id, name, email, phone } = contacts;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};
