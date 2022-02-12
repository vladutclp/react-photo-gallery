import ImageCard from '../Shared/ImageCard';
import classes from './Shop.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Shop = ({ products }) => {
  const imageElements = products.map((image) => {
    return (
      <NavLink to='shop-item' key={image.url} state={{ imageData: image }}>
        <ImageCard image={image} />
      </NavLink>
    );
  });

  return <section className={classes.shop}>{imageElements}</section>;
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);
