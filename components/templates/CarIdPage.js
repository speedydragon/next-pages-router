import React from 'react';
import styles from './CarIdPage.module.css'
import {useRouter} from "next/router";

function CarIdPage(props) {
    const {name, model, year, distance, price, description, image} = props;
    const router= useRouter();

    const clickHandler = () => {
        router.back();
    }
    return (
        <div className={styles.container}>
            <img src={image} alt="car" className={styles.image}/>
            <h3 className={styles.header}>{name} {model}</h3>
            <div className={styles.details}>
                <div>
                    <p>Company</p>
                    <span>{name}</span>
                </div>
                <div>
                    <p>Model</p>
                    <span>{model}</span>
                </div>
                <div>
                    <p>first registration</p>
                    <span>{year}</span>
                </div>
                <div>
                    <p>kms driven</p>
                    <span>{distance}</span>
                </div>
            </div>

            <div className={styles.details}>
                <p className={styles.descriptionTitle}>Extra Information</p>
                <p className={styles.descriptionText}>{description}</p>
            </div>
            <div className={styles.details}>
                <div>
                    <p>Price :</p>
                    <span>$ {price}</span>
                </div>
            </div>
            <button className={styles.button}>Buy now</button>

                <button onClick={clickHandler} className={styles.button}>Go Back</button>

        </div>
    );
}

export default CarIdPage;