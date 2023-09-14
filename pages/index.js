import carsData from "../data/carData";
import CarsDetail from "../components/templates/CarsDetail";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import AllButton from "../components/module/AllButton";
export default function Home() {
    const car = carsData.slice(0 , 3);
  return (
    <div>
        <SearchBar/>
        <Categories/>
        <AllButton/>
        <CarsDetail data={car} />
    </div>
  )
}
