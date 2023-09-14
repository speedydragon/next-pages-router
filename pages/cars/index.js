import carsData from "../../data/carData";
import CarsDetail from "../../components/templates/CarsDetail";
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";

const CarsPage = () => {
    return (
      <>
          <SearchBar/>
          <Categories/>
          <CarsDetail data={carsData} />
      </>
    );
}

export default CarsPage