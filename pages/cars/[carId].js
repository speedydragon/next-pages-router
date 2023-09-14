import {useRouter} from "next/router";
import carsData from "../../data/carData";
import CarIdPage from "../../components/templates/CarIdPage";

const EachCar = () => {
    const router = useRouter();
    const id = router.query.carId;
    const carDetail = carsData[id - 1];
    return <CarIdPage {...carDetail} />
}

export default EachCar