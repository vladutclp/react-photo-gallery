import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import classes from './Home.module.scss'
const Home = () => {
  return (
    <div className={classes.wrapper}>
      <ImageCarousel />
    </div>
  );
};

export default Home;
