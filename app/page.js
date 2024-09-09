import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10">
      <h1 className="font-bold text-2xl mb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="text-lg">
        <li>
          <Link href="/week-2">Week 2</Link>
        </li>
        <li>
          <Link href="/week-3">Week 3</Link>
        </li>
      </ul>
    </div>
  );
}
