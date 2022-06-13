import * as React from 'react';
import Link from '@app/components/link';
import { useRouter } from 'next/router';
import BehanceIcon from '@app/components/svg/behance-icon';
import TelegramIcon from './svg/telegram-icon';

export default function Header({ className }: Props) {
  const { pathname } = useRouter();

  return (
    <header className={className}>
      <nav className="flex items-center h-16 gap-3 sm:gap-8">
        <Link href="/" className="p-0.5 font-semibold sm:py-2 whitespace-nowrap">
          🦄 Alina Anikina
        </Link>
        <Link
          href="/projects"
          className={`p-1 sm:px-3 sm:py-2 font-medium rounded-md hover:bg-gray-100 transition-colors ${
            pathname === '/projects' ? 'bg-gray-100' : ''
          }`}
        >
          Projects
        </Link>

        <Link
          href="https://t.me/anikina_alina"
          className="p-0.5 ml-auto transition-colors rounded-md sm:p-2 hover:bg-gray-100"
        >
          <TelegramIcon />
        </Link>
        <Link
          href="https://www.behance.net/anikina_alina"
          className="p-0.5 transition-colors rounded-md sm:p-2 hover:bg-gray-100"
        >
          <BehanceIcon />
        </Link>
      </nav>
    </header>
  );
}

type Props = {
  className?: string;
};
