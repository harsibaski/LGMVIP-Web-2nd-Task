import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <Navbar onGetUsers={fetchUsers} />
      {loading ? <div className="loader"></div> : <UserGrid users={users} />}
    </div>
  );
};

export default App;
