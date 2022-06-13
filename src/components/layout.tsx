import * as React from 'react';
import Header from '@app/components/header';
import Head from 'next/head';

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-full">
        <Header className="container my-4" />
        {children}
      </div>
    </>
  );
}

type Props = {
  children?: React.ReactNode;
  title: string;
};
