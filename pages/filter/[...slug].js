import carsData from "../../data/carData";
import {useRouter} from "next/router";
import CarsList from "../../components/templates/CarsList";

const FilteredCars = () => {

    const router = useRouter();
    const [min , max] = router.query.slug || [] ;

    const filtered = carsData.filter(car => car.price>min && car.price<max);

    if (!filtered.length) return <h3>There is no car with that price !</h3>

    return <CarsList data={filtered} />
}

export default FilteredCars