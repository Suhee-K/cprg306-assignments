import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center mt-5">
      <h1 className="mt-5 mb-10 text-2xl font-bold">Shopping List</h1>

      <ItemList />
    </main>
  );
}
