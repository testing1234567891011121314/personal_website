// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/users">Users</Link>
      </div>
    </main>
  );
}
