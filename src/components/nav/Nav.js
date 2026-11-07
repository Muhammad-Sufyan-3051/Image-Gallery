import React from 'react';
import styles from './Nav.module.css';


export const Nav = () => {
    return (
        <div>
            <div className={styles.nav}>
                <h1>Sufi's Gallery</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Discover</li>
                </ul>
            </div>
        </div>
    )
}
