import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/privacypolicy.html')
      .then(response => response.text())
      .then(data => {
        setHtmlContent(data);
      });
  }, []);

  return (
    <div style={{ marginTop: '50px' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default PrivacyPolicy;
