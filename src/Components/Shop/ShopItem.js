import { NavLink } from 'react-router-dom';
import classes from './ShopItem.module.scss';
import image from '../../assets/bgImage3.jpg';
import Button from '../UI/Button/Button';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import apertureIcon from '../../assets/aperture1.png';
import shutterSpeedIcon from '../../assets/shutter.png';
import isoIcon from '../../assets/iso1.png';
import focalIcon from '../../assets/focal.png';
import cameraIcon from '../../assets/camera1.png';
const ShopItem = (props) => {
  return (
    <div className={classes.content}>
      <NavLink to='/shop'>
        <button className={classes.button}>&larr; Back to prints</button>
      </NavLink>
      <div className={classes.details}>
        <div className={classes.image}>
          <img src={image} alt='' />
        </div>
        <div className={classes.information}>
          <h1 className={classes.information__title}>Sunflower field</h1>
          <p className={classes.information__price}>From 120$</p>
          <p className={classes.information__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus,
            eum nulla omnis cum optio aliquid voluptate delectus? Voluptate iure
            iste perferendis ea tempora nulla? Deleniti rem unde placeat
            eveniet? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            A, cupiditate in nobis alias culpa autem explicabo dolores
            reiciendis. Eum voluptate facere doloribus, ratione perferendis
            repellat atque. Sed esse neque natus!
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
            <Button label={'Add to cart'} icon={faShoppingCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {/* <div className={classes.bigImage}>
        <img src={image} alt='' />
      </div> */}

      <div className={classes.technicalInfo}>
        <h2 className={classes.technicalInfo__title}>Technical info</h2>

        <div className={classes.cameraSettings}>
          <div className={classes.cameraSettings__group}>
            <img
              className={classes.cameraSettings__icon}
              src={cameraIcon}
              alt=''
            />
            <span className={classes.cameraSettings__value}>Nikon d3300</span>
          </div>
          <div className={classes.cameraSettings__group}>
            <img
              className={classes.cameraSettings__icon}
              src={apertureIcon}
              alt=''
            />
            <span className={classes.cameraSettings__value}>F5.6</span>
          </div>
          <div className={classes.cameraSettings__group}>
            <img
              className={classes.cameraSettings__icon}
              src={shutterSpeedIcon}
              alt=''
            />
            <span className={classes.cameraSettings__value}>1/10s</span>
          </div>
          <div className={classes.cameraSettings__group}>
            <img
              className={classes.cameraSettings__icon}
              src={isoIcon}
              alt=''
            />
            <span className={classes.cameraSettings__value}>100</span>
          </div>
          <div className={classes.cameraSettings__group}>
            <img
              className={classes.cameraSettings__icon}
              src={focalIcon}
              alt=''
            />
            <span className={classes.cameraSettings__value}>100</span>
          </div>
          <div>Focus stacked</div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
