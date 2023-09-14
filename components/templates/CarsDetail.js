import styles from "./CarsDetail.module.css"
import CarsCard from "../module/CarsCard";

const CarsDetail = ({data}) => {
    return (
        <div className={styles.container}>
            {
                data.map(car => (
                    <CarsCard key={car.id} {...car} />
                ))
            }
        </div>
    );
}

export default CarsDetail