function List({ items }) {
  return (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export default List;
