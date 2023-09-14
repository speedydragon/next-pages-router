import React from 'react';
import carsData from "../../data/carData";
import CarsList from "../../components/templates/CarsList";

function Hatchback() {
    const hatchbackCar = carsData.filter(car =>car.category === "hatchback")
    return <CarsList data={hatchbackCar} />
}

export default Hatchback;