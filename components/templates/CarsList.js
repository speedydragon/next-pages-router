import React from 'react';
import styles from "./CarsList.module.css";
import {useRouter} from "next/router";
import CarsCard from "../module/CarsCard";

function CarsList({data}) {
    const router = useRouter();

    const clickHandler = () => {
        router.back();
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={clickHandler}>
                <p>Go Back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map(item => <CarsCard key={item.id} {...item} />)
                }
            </div>
        </div>
    );
}

export default CarsList;