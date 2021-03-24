import { useSelector } from "react-redux";
import { Contacts } from "./Contacts";

export const Contact = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log("contacts", contacts);
  return (
    <div>
      <table className="table table-shadow table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return <Contacts contacts={contacts} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
