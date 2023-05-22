import { User } from "../interfaces/reqRes";
import { useUser } from "../hooks/useUser";

export const Usuarios = () => {
  const { users, nextPage, prevPage } = useUser();

  const renderItem = (user: User) => {
    return (
      <tr key={user.id.toString()}>
        <th>
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ width: "50px", borderRadius: "100px" }}
          />
        </th>
        <th>
          {user.first_name} {user.last_name}
        </th>
        <th>{user.email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>

      <button className="btn btn-primary" onClick={prevPage}>
        Prev
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
    </>
  );
};
