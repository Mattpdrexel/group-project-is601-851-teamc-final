import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/privacypolicy.html')
      .then(response => {
        if (!response.ok) {
          // If the response isn't ok, throw an error to be caught in the catch block
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        setHtmlContent(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the privacy policy:', error.message);
        setHtmlContent(`<p>Error loading content.</p>`);
      });
  }, []);

  return (
    <div style={{ marginTop: '50px' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default PrivacyPolicy;
