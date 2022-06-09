import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <header>
        <nav className="flex justify-between gap-4 py-6">
          <Link href="/projects">
            <a className="text-violet-600 hover:underline">Projects</a>
          </Link>
          <Link href="/">
            <a className="text-violet-600 hover:underline">Contacts</a>
          </Link>
        </nav>
      </header>
      <div className="max-w-xl mt-40">
        <h1 className="mb-8 text-4xl font-bold">Hi!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quisquam reprehenderit
          harum, vel dolores, nam ex corporis, qui atque expedita quos. Voluptatem, reprehenderit?
          Fugit possimus dolor tempora, quisquam officiis distinctio quia esse, nesciunt asperiores
          eligendi sint repellendus corrupti aut nihil voluptate, temporibus similique suscipit
          provident obcaecati voluptates? Nam, culpa officiis?
        </p>
      </div>
    </main>
  );
}
