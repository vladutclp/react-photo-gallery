import { IMAGES_DATA } from '../../constants';
import ImageCard from '../Shared/ImageCard';
import classes from './Shop.module.scss';
import { connect } from 'react-redux';

const Shop = ({ products }) => {
  const imageElements = products.map((image) => {
    return (
      <ImageCard
        buttonAction={() => console.log('button action')}
        key={image.url}
        image={image}
      />
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
