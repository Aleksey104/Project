import Baner from "./components/Baner";
import Catalog from "./components/Catalog";
// import Coupon from "./components/coupon";
import Header from "./components/Header";
import Link from "./components/Link";
import Sale from "./components/Sale";

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Baner></Baner>
     <Catalog></Catalog>
    </div>
  );
}

export default App;
