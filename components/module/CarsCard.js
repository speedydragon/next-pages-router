import styles from "./CarsCard.module.css"
import Link from "next/link";

const CarsCard = (props) => {
    const {id, name, model, year, distance, location, price, image } = props
    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} alt="single car card" className={styles.image} />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.detail}>{`${year} _ ${distance}km`}</p>
                <div className={styles.footer}>
                    <p>$ {price}</p>
                    <p>{location}</p>
                </div>
            </div>
        </Link>
    );
}

export default CarsCard