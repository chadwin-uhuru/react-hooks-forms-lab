import React from 'react';

function Filter({ onCategoryChange, onSearchChange, search, selectedCategory }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={onSearchChange}
        placeholder="Search..."
      />
      <select 
        name="category" 
        onChange={onCategoryChange}
        value={selectedCategory}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;