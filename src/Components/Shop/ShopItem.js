import { NavLink } from 'react-router-dom';
import classes from './ShopItem.module.scss';
import Button from '../UI/Button/Button';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/Shopping/shopping-actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechnicalInformation from './TechnicalInformation';

const ShopItem = ({ addToCart }) => {
  const location = useLocation();
  console.log('location');
  console.log(location);
  const { imageData } = location.state;
  const notify = () =>
    toast.success('Print added to cart!', {
      position: 'top-center',
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className={classes.content}>
      <ToastContainer />
      <NavLink to='/shop'>
        <button className={classes.button}>&larr; Back to prints</button>
      </NavLink>
      <div className={classes.details}>
        <div className={classes.image}>
          <img src={imageData.url} alt='' />
        </div>
        <div className={classes.information}>
          <h1 className={classes.information__title}>Sunflower field</h1>
          <p className={classes.information__price}>From 120$</p>
          <p className={classes.information__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus,
            eum nulla omnis cum optio aliquid voluptate delectus? Voluptate iure
            iste perferendis ea tempora nulla? Deleniti rem unde placeat
            eveniet? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <div className={classes.size}>
            <label className={classes.size__label} htmlFor='size'>
              Size:
            </label>
            <select
              className={classes.size__select}
              name='size'
              id='size'
              placeholder='Select size'
            >
              <option value='a1'>A1</option>
              <option value='a2'>A2</option>
              <option value='a3'>A3</option>
            </select>
          </div>

          <div className={classes.quantity}>
            <label className={classes.quantity__label} htmlFor='quantity'>
              Quantity:
            </label>
            <input
              className={classes.quantity__input}
              type='number'
              name='quantity'
              min='1'
              max='50'
              defaultValue={'1'}
            />
          </div>

          <div className={classes.cartButton}>
            <Button
              clickHandler={() => {
                addToCart(imageData.id);
                notify();
              }}
              label={'Add to cart'}
              icon={faShoppingCart}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <TechnicalInformation
        camera={'Nikon D3300'}
        aperture={'F11'}
        iso={100}
        shutterSpeed={'1/15s'}
        focalLength={124}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShopItem);
