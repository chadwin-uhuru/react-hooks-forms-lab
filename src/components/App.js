import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState([
    { id: "1", name: "Apple", category: "Produce" },
    { id: "2", name: "Milk", category: "Dairy" },
    { id: "3", name: "Cake", category: "Dessert" },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default App;
