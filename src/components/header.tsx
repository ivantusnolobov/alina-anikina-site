import * as React from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

export default function Header({ className }: Props) {
  return (
    <header className={className}>
      <nav>
        <ul className="flex gap-8 align-baseline">
          <li>
            <Link href="/">
              <a className="text-xl font-medium hover:no-underline">Alina Anikina</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <Menu>
            <div className="relative">
              <Menu.Button>More</Menu.Button>
              <Menu.Items className="absolute flex flex-col border rounded-md shadow-md w-fit">
                <Menu.Item>
                  {({ active }) => <a href="/account-settings">Account settings</a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                      Documentation
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>
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
