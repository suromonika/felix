import React from 'react';
import './index.css';
import Button from '../Button';

class MovieCard extends React.Component {
  render() {
    const { imgSrc, imgAlt, title, description, favourite } = this.props;
    return (
      <div className='Movie-card'>
        <img className='Movie-card__poster' src={imgSrc} alt={imgAlt}></img>
        <div className='Movie-card__wrapper'>
          <h2 className='Movie-card__title'>{title}</h2>
          <p className='Movie-card__description'>{description}</p>
          <Button onClick={favourite}>Favourite</Button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
