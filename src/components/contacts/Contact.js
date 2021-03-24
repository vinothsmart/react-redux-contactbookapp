import { useSelector } from "react-redux";

export const Contact = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log("contacts", contacts);
  return (
    <div>
      <table className="table table-shadow table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr>
                <th scope="row">{contacts.id}</th>
                <td>{contacts.name}</td>
                <td>{contacts.phone}</td>
                <td>{contacts.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
