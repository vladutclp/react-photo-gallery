import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import classes from './AboutMe.module.scss';
const AboutMe = () => {
  return (
    <>
      <h1 className={classes.aboutMe__heading}>A bit about me</h1>

      <div className={classes.aboutMe}>
        <section className={classes.aboutMe__section}>
          <img className={classes.aboutMe__image} src={photo1} alt='photo of myself' />
          <p className={classes.aboutMe__description}>
            Hi, my name is Vlad. I'm a landscape photographer from Romania and my goal is to share with you the beauties of this
            country.
            My passion for landscape photography is a rebirht of a forgotten passion I had for nature as a child.
            I was lucky enough to have a beautiful childhood surrounded by nature and animals.
            I always loved to take snapshots with my phone and one day I tought, "hmm, maybe I should get a camera". And
            so it started.

          </p>
        </section>

        <section className={classes.aboutMe__section}>
          <p className={classes.aboutMe__right}>
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

          <img className={classes.aboutMe__left} src={photo2} alt='another photo of myself' />
        </section>
      </div></>
  );
};

export default AboutMe;
