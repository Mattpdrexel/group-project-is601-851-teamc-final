import React, { useState } from 'react';
import styles from '../styles/NewsletterForm.module.scss';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div id="mc_embed_shell" className={styles.newsletterForm}>
      <form
        action="https://njit.us21.list-manage.com/subscribe/post?u=268306dc7c5795fd5864bba02&amp;id=25fe180312&amp;f_id=004b60e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
        noValidate=""
      >
        <h2 className={styles.formTitle}>The first cup is on us!</h2>
        <div className={styles.fieldGroup}>
          <input
            type="email"
            name="EMAIL"
            className={styles.emailInput}
            id="mce-EMAIL"
            required=""
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            style={{ height: '30px', width: '100%' }}

          />
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className={styles.subscribeButton}
            value="Get my Cup"
          />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <input type="text" name="b_e02ea95275e964d627c8a0bff_139ace9ecd" tabIndex="-1" value="" />
        </div>
        <small>Relax. Information is for promotional services only.</small>

      </form>
    </div>
  );
}

export default NewsletterForm;
