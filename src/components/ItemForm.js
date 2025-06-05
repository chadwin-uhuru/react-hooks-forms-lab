import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category
    });
    setName("");
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;