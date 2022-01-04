import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contact__infoWrapper}>
        <div className={classes.contact__infoHeading}>Get in touch</div>
        <div className={classes.contact__infoDescription}>
          If you have any questions regarding my gear, workflow or prints don't
          heistate to contact me. You can reach me via email with or on my
          social media accounts.
        </div>
      </div>
      <form action='' className={classes.contact__form}>
        <div className={classes.contact__nameFields}>
          <div className={classes.contact__inputWrapper}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='' />
          </div>
          <div className={classes.contact__inputWrapper}>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' id='' />
          </div>
        </div>
        <div className={classes.contact__inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
        <div className={classes.contact__inputWrapper}>
          <label htmlFor='subject'>Subject</label>
          <input type='text' name='subject' />
        </div>

        <div className={classes.contact__inputWrapper}>
          <label htmlFor='message'>Message</label>
          <textarea name='Message' id='' cols='30' rows='5' />
        </div>

        <button className={classes.contact__submit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
