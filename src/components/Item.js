function Item({ name, category }) {
  return (
    <li className={category}>
      {name} <span className="category">{category}</span>
    </li>
  );
}

export default Item;