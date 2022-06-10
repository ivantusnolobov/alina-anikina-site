import * as React from 'react';
import Header from '@app/components/header';

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-full">
      <Header className="container my-4" />
      {children}
    </div>
  );
}

type Props = {
  children?: React.ReactNode;
};
