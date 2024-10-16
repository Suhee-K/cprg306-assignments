export default function Item({ name, quantity, category }) {
  return (
    <div className=" bg-[#D1D8C5] p-3 rounded-md mb-5">
      <h2 className="capitalize">{name}</h2>
      <p>Qty: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </div>
  );
}
