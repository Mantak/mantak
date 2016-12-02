import React from 'react';
import {Link} from 'react-router';
class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/admin/config">config</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default Admin;
