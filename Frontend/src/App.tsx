import RoutesPage from "./Component/Routes/RoutesPage";
import Context from "./Component/Sections/NewArrivals/Slides/ShoppingCart/Context/Context";

const App = () => {
  return (
    <div>
      <Context>
        <RoutesPage />
      </Context>
    </div>
  );
};

export default App;
