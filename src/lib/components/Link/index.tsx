import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'href'
>;

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  external,
  ...anchorProps
}) => {
  return (
    <NextLink target={external ? '_blank' : undefined} {...anchorProps} >
        {children}
    </NextLink>
  );
};

export default Link;
