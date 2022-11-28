import React from 'react';
import './index.css';
import Button from '../Button';

class Header extends React.Component {
  render() {
    const { children, imgSrc, imgAlt } = this.props;

    return (
      <header className='Header'>
        <div className='central-container'>
          <img src={imgSrc} alt={imgAlt} />
          <Button>Sign in</Button>
        </div>
      </header>
    );
  }
}

export default Header;
