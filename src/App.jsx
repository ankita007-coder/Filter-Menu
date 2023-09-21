import { useState } from "react";
import Title from "./Title";
import data from "./data"; 
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const [items, setItems] = useState(data);

  const categories = new Set();
  for (let i of items) {
    categories.add(i.category);
  }

  const initialCategory = ['all', ...categories];

  const [category, setCategory] = useState(initialCategory);

  const handleFilter = (c) => {
    if (c === 'all') {
      setItems(data); // Reset to the original full list
    } else {
      const newList = data.filter((item) => item.category === c);
      setItems(newList);
    }

  }

  return (
    <>
      <Title />
      <Categories category={category} handleFilter={handleFilter} />
      <Menu items={items} />
    </>
  )
};

export default App;
