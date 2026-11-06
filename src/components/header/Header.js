import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContent}>
      <h1>All Images at One Place</h1>
      <p>
        Lorem Ipsum is a standardized dummy or placeholder text commonly used in graphic design, publishing, and web development. It is used to preview layouts, demonstrate typography, and fill visual structures before the final copy is ready, ensuring that readers are not distracted by readable content.
      </p>
    </div>
  )
}
