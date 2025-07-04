import { Table } from 'react-bootstrap';


const UserTable = ({ users, loading }) => {
  if (loading) return <p>Carregando...</p>;

  // console.log(users)



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
