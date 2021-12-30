import classes from './Home.module.scss';
import backgroundImage from '../../assets/bgImage.jpg';
import backgroundImage5 from '../../assets/bgImage5.jpg';

import backgroundImage4 from '../../assets/bgImage4.jpg';
import { Parallax } from 'react-parallax';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Parallax strength={300} blur={3} bgImage={backgroundImage4}>
        <div
          className={`${classes.parallaxContainer__hero} ${classes.parallaxContainer}`}
        >
          <div className={classes.hero}>
            <div className={classes.hero__metadata}>
              <h1 className={classes.hero__heading}>
                Capturing the beauty of Romania
              </h1>
              <p className={classes.hero__description}>
                Come with me in this amazing adventure and take a look at the
                amazing beauties of Romania
              </p>
              <NavLink className={classes.hero__cta} to='/gallery'>
                Gallery
              </NavLink>
            </div>
          </div>
        </div>
      </Parallax>

      <div className={classes.quote}>
        “When looking at an extraordinary landscape, there are no questions, no
        answers, no desires, no plans, no worries, no past, no present, no
        future; there is only a deep silence, only a glance!”
      </div>

      <Parallax strength={300} blur={3} bgImage={backgroundImage}>
        <div
          className={`${classes.parallaxContainer__hero} ${classes.parallaxContainer}`}
        >
          <div className={classes.hero}>
            <div className={classes.hero__metadata}>
              <h1 className={classes.hero__heading}>Fine art prints</h1>
              <p className={classes.hero__description}>
                Being closer to nature is easier than you think. Explore my shop
                for some fine art prints!
              </p>
              <NavLink className={classes.hero__cta} to='/shop'>
                Shop
              </NavLink>
            </div>
          </div>
        </div>
      </Parallax>
      <div className={classes.quote}>
        “We come from nature. There is an importance to [having] a certain
        reverence for what nature is because we are connected to it... If we
        destroy nature, we destroy ourselves.” - Edward Burtynsky
      </div>
      <Parallax strength={500} bgImage={backgroundImage5} blur={10}>
        <div
          className={`${classes.parallaxContainer__contact} ${classes.parallaxContainer}`}
        >
          <div className={classes.contact}>
            <h1 className={classes.contact__heading}>Let's keep in touch</h1>
            <input
              placeholder='Enter your email adress'
              className={classes.contact__input}
              type='text'
            />
            <button className={classes.contact__submit}>Subscribe</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
