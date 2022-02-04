import { IMAGES_DATA } from '../../constants';
import ImageCard from '../Shared/ImageCard';
import classes from './Shop.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Shop = ({ products }) => {
  const imageElements = products.map((image) => {
    return (
      <NavLink to='shop-item' key={image.url}>
        <ImageCard
          buttonAction={() => console.log('button action')}
          image={image}
        />
      </NavLink>
    );
  });

  return (
    <div className={classes.shop}>
      <section>{imageElements}</section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);
