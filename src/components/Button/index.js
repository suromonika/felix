import React from 'react';
import './index.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFavourite: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isFavourite: !prevState.isFavourite }));
  }
  render() {
    const { children, onClick } = this.props;

    return (
      <button className='Button' onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
