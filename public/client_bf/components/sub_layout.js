import React from 'react';
import {Link} from 'react-router';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/sub">home</Link></li>
          <li><Link to="/sub/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
