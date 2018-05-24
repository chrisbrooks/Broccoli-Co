import React from 'react';

import styles from './footer.scss';

const Footer = () => (
  <footer className={styles.Container}>
    <p>
      Made with &hearts; in melbourne<br />
      @2018 <span>Broccoli &amp; Co.</span> All rights reserved
    </p>
  </footer>
);

export default Footer;
