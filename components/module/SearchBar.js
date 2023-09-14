import React, {useState} from 'react';
import styles from "./SearchBar.module.css"
import carsData from "../../data/carData";
import {useRouter} from "next/router";


function SearchBar() {
    const router = useRouter()

    const [min , setMin] = useState("");
    const [max , setMax] = useState("");

    const newPrice = carsData.filter(item => item.price === min)

    const minChangeHandler = (event) => {
        setMin(event.target.value);
    };
    const maxChangeHandler = (event) => {
        setMax(event.target.value);
    };
    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("please enter minimum and maximum price that you want")
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <input placeholder="inter min-pirce" value={min} onChange={minChangeHandler} />
                <input placeholder="inter max-pirce" value={max} onChange={maxChangeHandler} />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
}

export default SearchBar;