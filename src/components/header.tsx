import * as React from 'react';
import Link from 'next/link';

export default function Header({ className }: Props) {
  return (
    <header className={className}>
      <nav className="flex justify-between gap-4">
        <Link href="/projects">
          <a className="text-violet-600 hover:underline">Projects</a>
        </Link>
        <Link href="/">
          <a className="text-violet-600 hover:underline">Contacts</a>
        </Link>
      </nav>
    </header>
  );
}

type Props = {
  className?: string;
};
