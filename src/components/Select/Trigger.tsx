import React from 'react';

import { Trigger as SelectTrigger, Value, Icon } from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export interface TriggerProps {
  ariaLabel: string;
  placeholder?: string;
}

export const Trigger: React.FC<TriggerProps> = ({
  ariaLabel,
  placeholder,
}) => {
  return (
    <SelectTrigger
      aria-label={ariaLabel}
      className="w-full flex items-center justify-between rounded-full px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-100"
    >
      <Value placeholder={placeholder} />
      <Icon>
        <ChevronDownIcon />
      </Icon>
    </SelectTrigger>
  );
};

export default Trigger;
