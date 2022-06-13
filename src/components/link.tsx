import NextLink from 'next/link';
import * as React from 'react';

export default function Link({ children, className = '', ...props }: LinkProps) {
  const href = props.href ?? '/';
  const internal = /^\/(?!\/)/.test(href);
  const externalProps = {
    target: '_blank',
    rel: 'noreferrer',
  };

  if (internal) {
    return (
      <NextLink href={href}>
        <a className={className} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a href={href} className={className} {...externalProps} {...props}>
      {children}
    </a>
  );
}

type LinkProps = React.ComponentPropsWithoutRef<'a'>;
