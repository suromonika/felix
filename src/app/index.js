import React from 'react';
import './index.css';
import 'reset-css';
import logo from './images/logo.svg';
import america_express_logo from './images/american-express.png';
import visa_logo from './images/visa.png';
import maestro_logo from './images/tool.png';
import discover_logo from './images/discover.png';
import mainLogo from './images/F.svg';
import Button from '../components/Button';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Separator from '../components/Separator';
import ContentBlock from '../components/ContentBlock';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

class App extends React.Component {
  state = {
    felixMovies: [],
    isFavourite: [],
    loading: false,
    error: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const result = await fetch(
        'https://academy-video-api.herokuapp.com/content/free-items'
      );
      if (result.status >= 400 && result.status <= 599) {
        this.setState({ error: true });
      } else {
        const json = await result.json();
        this.setState({ felixMovies: json });
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, error, felixMovies, isFavourite } = this.state;
    addToFavourite = (id) => {
      const data = felixMovies.find((movie) => movie.id === id);
      this.setState({
        isFavourite: [...this.state.isFavourite, data],
      });
    };

    deleteFromFavourite = (id) => {
      const data = isFavourite.filter((movie) => movie.id !== id);
      this.setState({ isFavourite: data });
    };

    return (
      <div className='App'>
        {loading && <img src={logo} className='App-logo' alt='logo' />}
        {error && <p>Failed to load!</p>}

        <Header imgSrc={mainLogo}>
          <div className='central-container'>
            <Button className='Button'>Sign in</Button>
          </div>
        </Header>
        <main>
          <section className='hero-banner'>
            <Heading>Wanna more content?</Heading>
            <Button>Get Access</Button>
          </section>
          <Separator></Separator>

          <ContentBlock>
            {felixMovies.map((singleMovie) => {
              const count = 55;
              const description = singleMovie.description;

              return (
                <MovieCard
                  onClick={isFavourite}
                  imgSrc={singleMovie.image}
                  title={singleMovie.title}
                  description={
                    singleMovie.description.slice(0, count) +
                    (description.length > count ? '...' : '')
                  }
                  key={singleMovie.id}
                ></MovieCard>
              );
            })}
          </ContentBlock>
        </main>
        <Footer copyright='We care about your entertainment. Copyright © 2019–2021 felix.com'>
          <img src={america_express_logo} alt='american-express'></img>
          <img src={visa_logo} alt='visa-express'></img>
          <img src={maestro_logo} alt='maestro-logo'></img>
          <img src={discover_logo} alt='discover-logo'></img>
        </Footer>
      </div>
    );
  }
}

export default App;
