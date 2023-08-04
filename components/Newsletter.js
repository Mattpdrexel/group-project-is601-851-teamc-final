import React, { useState } from 'react';
// import styles from '../styles/NewsletterForm.module.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
          <form
            action="https://njit.us21.list-manage.com/subscribe/post?u=268306dc7c5795fd5864bba02&amp;id=25fe180312&amp;f_id=004b60e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate=""
          >
            <div id="mc_embed_signup_scroll">
              <h2 style={{ color: '#454641', fontFamily: 'Rubik', fontSize: '48px', fontStyle:'italic'}}>Subscribe</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required=""
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <input type="text" name="b_e02ea95275e964d627c8a0bff_139ace9ecd" tabIndex="-1" value="" />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <p>
                    <a
                      href="http://eepurl.com/iwV9rI"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span>
                        
                        {/* <img
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                        /> */}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewsletterForm;