import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Image.module.css';

export const ImageCard = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image.imageUrl}
                alt='gallery collections' />
            <h1>{image.name}</h1>
            <p>
                {image.description}
            </p>
            <div>
                <p>
                    <FontAwesomeIcon icon={faUser} style={{ color: "rgb(44, 135, 205)", }} />
                    <span>{image.author}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faCalendar} style={{ color: "rgb(44, 135, 205)", }} />
                    <span>{image.date}</span>
                </p>
            </div>
        </div >
    )
}
