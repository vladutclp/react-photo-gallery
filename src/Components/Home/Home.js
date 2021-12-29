import classes from './Home.module.scss';
import backgroundImage from '../../assets/bgImage.jpg';
import backgroundImage5 from '../../assets/bgImage5.jpg';

import backgroundImage4 from '../../assets/bgImage4.jpg';
import { Parallax } from 'react-parallax';

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Parallax strength={500} blur={1} bgImage={backgroundImage4}>
        <div
          className={`${classes.parallaxContainer__hero} ${classes.parallaxContainer}`}
        >
          <div className={classes.hero}>
            <div className={classes.hero__metadata}>
              <h1 className={classes.hero__heading}>
                Introducing you to my world
              </h1>
              <p className={classes.hero__description}>
                Nature has always been my passion and by this means I invite you
                to see the world through my eyes.
              </p>
              <button className={classes.hero__cta}>Gallery</button>
            </div>
          </div>
        </div>
      </Parallax>

      <div className={classes.quote}>
        “When looking at an extraordinary landscape, there are no questions, no
        answers, no desires, no plans, no worries, no past, no present, no
        future; there is only a deep silence, only a glance!”
      </div>

      <Parallax strength={350} bgImage={backgroundImage} >
        <div style={{ height: '100vh', width: '' }}></div>
      </Parallax>
      <div className={classes.quote}>
        “When looking at an extraordinary landscape, there are no questions, no
        answers, no desires, no plans, no worries, no past, no present, no
        future; there is only a deep silence, only a glance!”
      </div>
      <Parallax strength={500}  bgImage={backgroundImage5} blur={10}>
        <div
          className={`${classes.parallaxContainer__contact} ${classes.parallaxContainer}`}
        >
          <div className={classes.contact}>
            <h1 className={classes.contact__heading}>Let's keep in touch</h1>
            <input placeholder='Enter your email adress' className={classes.contact__input} type='text' />
            <button className={classes.contact__submit}>Subscribe</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
