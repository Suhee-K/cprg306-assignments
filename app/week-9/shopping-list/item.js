export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect({ name, quantity, category })}
      className=" bg-[#D1D8C5] p-3 rounded-md mb-5 hover:bg-[#BBC6A7] hover:cursor-pointer"
    >
      <h2 className="capitalize">{name}</h2>
      <p>Qty: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </div>
  );
}
