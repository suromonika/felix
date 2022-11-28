import React from 'react';
import './index.css';

class Heading extends React.Component {
  render() {
    const { children } = this.props;

    return <h1 className='Heading'>{children}</h1>;
  }
}

export default Heading;
