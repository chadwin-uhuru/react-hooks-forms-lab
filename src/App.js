import { useState } from "react";
import ItemForm from "./components/ItemForm";
import Filter from "./components/Filter";
import Item from "./components/Item";
import { v4 as uuid } from "uuid";

function App() {
  // State for items and filters
  const [items, setItems] = useState([
    { id: uuid(), name: "Milk", category: "Dairy" },
    { id: uuid(), name: "Eggs", category: "Dairy" },
    { id: uuid(), name: "Apples", category: "Produce" }
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Event handlers
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  // Filter items based on search and category
  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      {/* Filter component with all required props */}
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchText}
        selectedCategory={selectedCategory}
      />

      {/* Item form for adding new items */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />

      {/* Display the filtered items */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;