import React from 'react';
import './index.css';

class ContentBlock extends React.Component {
  render() {
    const { children } = this.props;
    return <div className='ContentBlock'>{children}</div>;
  }
}

export default ContentBlock;
