import { IMAGES } from '../../constants';
import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import classes from './Home.module.scss'



const Home = () => {
  return (
    <div className={classes.wrapper}>
      <ImageCarousel images={IMAGES}/>
    </div>
  );
};

export default Home;
