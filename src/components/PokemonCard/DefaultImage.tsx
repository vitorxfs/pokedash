import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface DefaultImageProps {
  className: string;
}

export const DefaultImage: React.FC<DefaultImageProps> = ({className}) => {
  return (
    <div className={twMerge(['text-gray-200 w-full h-full', className])}>
      <svg width="100px" viewBox="0 0 101 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.79836 22.2181C1.20864 10.4155 4.6828 4.768 6.9936 3.41959C12.0136 1.04003 12.9698 3.41959 16.0774 5.79915C19.185 8.1787 27.3127 10.5583 28.7469 7.22688C30.1812 3.8955 37.1136 -1.81543 43.0898 0.564125C49.066 2.94368 49.066 3.41959 58.867 3.41959C68.6679 3.41959 68.907 7.22688 71.5365 10.5583C74.166 13.8896 77.0346 20.0765 86.3574 17.459C95.6803 14.8414 100.7 26.9772 95.2022 35.3056C89.7041 43.634 92.8117 51.2486 97.8317 57.1975C102.852 63.1464 101.178 66.9537 97.8317 72.4267C94.4851 77.8996 77.9908 81.9449 70.1022 81.9449C62.2136 81.9449 34.006 81.7069 28.7469 81.9449C23.4879 82.1828 17.0336 81.9449 6.9936 75.0442C-3.04639 68.1435 -0.655939 59.1011 4.12501 51.2486C8.90597 43.3961 11.5355 36.9713 5.79836 22.2181Z"/>
      </svg>
    </div>
  );
};

DefaultImage.defaultProps = {};

export default DefaultImage;
