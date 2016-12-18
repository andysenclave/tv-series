import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div>
      <h4>
        This is Login Page
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default Login;
