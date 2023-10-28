import React from 'react';

import Typography from '@/components/Typography';
import Image from '@/lib/components/Image';
import Link from '@/lib/components/Link';

export interface PlaceholderProps { }

export const Placeholder: React.FC<PlaceholderProps> = ({}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image src="/assets/snorlax.svg" width={223} height={181} alt=""/>
      <Typography tag="p" size="4xl" className="mt-8 font-medium text-[#74429B]">No results were found.</Typography>
      <Link href="/" className="mt-6 px-6 py-2 rounded-md text-lg font-bold text-[#74429B] border border-[#74429B]">Clear Filters</Link>
    </div>
  );
};

export default Placeholder;
