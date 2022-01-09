import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import classes from './AboutMe.module.scss';
const AboutMe = () => {
  return (
    <div className={classes.aboutMe}>
      <h1 className={classes.aboutMe__heading}>A bit about me</h1>
      <section className={classes.aboutMe__section}>
        <img src={photo1} alt='photo of myself' />
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestiae harum ratione temporibus dolores. Facere, repellat aliquid
          magnam quis enim velit eum earum mollitia nam iste blanditiis,
          reiciendis sit laudantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic doloremque, aperiam nostrum dicta voluptatibus
          mollitia nemo voluptates natus alias voluptas assumenda corrupti, sed
          quisquam at temporibus eligendi obcaecati debitis? Harum. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Illum cum, tenetur omnis
          ipsa, harum velit, consequuntur maxime distinctio aperiam sint sit
          esse perspiciatis unde animi deleniti tempora libero! Iure, quae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestiae harum ratione temporibus dolores. Facere, repellat aliquid
          magnam quis enim velit eum earum mollitia nam iste blanditiis,
          reiciendis sit laudantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic doloremque, aperiam nostrum dicta voluptatibus
          mollitia nemo voluptates natus alias voluptas assumenda corrupti, sed
          esse perspiciatis unde animi deleniti tempora libero! Iure, quae.
        </p>
      </section>

      <section className={classes.aboutMe__section}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestiae harum ratione temporibus dolores. Facere, repellat aliquid
          magnam quis enim velit eum earum mollitia nam iste blanditiis,
          reiciendis sit laudantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic doloremque, aperiam nostrum dicta voluptatibus
          mollitia nemo voluptates natus alias voluptas assumenda corrupti, sed
          quisquam at temporibus eligendi obcaecati debitis? Harum. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Illum cum, tenetur omnis
          ipsa, harum velit, consequuntur maxime distinctio aperiam sint sit
          esse perspiciatis unde animi deleniti tempora libero! Iure, quae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestiae harum ratione temporibus dolores. Facere, repellat aliquid
          magnam quis enim velit eum earum mollitia nam iste blanditiis,
          reiciendis sit laudantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic doloremque, aperiam nostrum dicta voluptatibus
          mollitia nemo voluptates natus alias voluptas assumenda corrupti, sed
          esse perspiciatis unde animi deleniti tempora libero! Iure, quae.
        </p>

        <img src={photo2} alt='another photo of myself' />
      </section>
    </div>
  );
};

export default AboutMe;
