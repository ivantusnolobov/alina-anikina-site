import Head from 'next/head';
import Link from 'next/link';
import Bio from '@app/components/bio';
import Image from 'next/image';
import heroImage from '@public/img/hero-image.png';

export default function HomePage() {
  return (
    <main className="container py">
      <header>
        <nav className="flex justify-between gap-4 pt-12">
          <Link href="/projects">
            <a className="text-violet-600 hover:underline">Projects</a>
          </Link>
          <Link href="/">
            <a className="text-violet-600 hover:underline">Contacts</a>
          </Link>
        </nav>
      </header>
      <div className="py-9">
        <figure className="mb-10 -ml-6">
          <Image
            src={heroImage}
            width={596}
            height={722}
            alt="Drawing of Alina sitting on a chair with iPad"
            className="block"
          />
        </figure>
        <div>
          <Bio />
        </div>
      </div>
    </main>
  );
}
