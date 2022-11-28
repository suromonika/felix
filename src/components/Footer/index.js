import React from 'react';
import './index.css';

class Footer extends React.Component {
  render() {
    const { copyright, children } = this.props;
    return (
      <footer className='Footer'>
        <div className='central-container'>
          <p className='Footer__copyright-info'>{copyright}</p>
          <div className='Footer__icons'>{children}</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
