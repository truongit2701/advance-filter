import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./data/data";
import Card from "./component/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItem = products.filter(
    (p) => p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  function filteredData(p, s, q) {
    let filteredProducts = p;

    //filtering input item

    if (q) {
      filteredProducts = filteredItem;
    }

    //selected filter
    if (s) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === s ||
          color === s ||
          company === s ||
          newPrice === s ||
          title === s
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="App">
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
