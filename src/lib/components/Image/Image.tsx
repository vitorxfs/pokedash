import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

type ImgProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'target' | 'href'
>;

interface Image extends NextImageProps { }

export const Image: React.FC<Image> = ({
  ...imgProps
}) => {
  return (
    <NextImage {...imgProps} />
  );
};

export default Image;
