import * as React from 'react';
import Link from 'next/link';

export default function Header({ className }: Props) {
  return (
    <header className={className}>
      <nav>
        <ul className="flex gap-8 align-baseline">
          <li>
            <Link href="/">
              <a className="font-medium text- xl hover:no-underline flex-nowrap">
                🦄 Alina Anikina
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/">
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

type Props = {
  className?: string;
};
