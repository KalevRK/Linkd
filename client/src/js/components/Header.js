'use strict';

import React from 'react';

let Header = React.createClass({
  
  render () {
    return (
      <div className="page-header text-center">
          <h1> Welcome asdfsdf Linkd! </h1>
          <a href="/api/user/logout" className="btn btn-default btn-sm">Logout</a>
      </div>
    );
  }
});

export default Header;