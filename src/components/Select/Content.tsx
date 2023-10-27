import React from 'react';

import {
  Content as SelectContent,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  ScrollDownButton,
  ScrollUpButton,
  Viewport,
} from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

export interface ContentProps {
  items: { title: string, value: string }[];
}

export const Content: React.FC<ContentProps> = ({ items }) => {
  return (
    <Portal>
      <SelectContent className="overflow-hidden bg-white rounded-2xl shadow-xl z-20">
        <ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </ScrollUpButton>
        <Viewport className="">
          {items.map((item) => (
            <Item
              key={item.value}
              value={item.value}
              className="cursor-pointer relative flex items-center px-10 py-2 rounded-full data-[highlighted]:bg-gray-200 data-[highlighted]:outline-none"
            >
              <ItemText>{item.title}</ItemText>
              <ItemIndicator className="absolute left-4">
                <CheckIcon />
              </ItemIndicator>
            </Item>
          ))}
        </Viewport>
        <ScrollDownButton className="flex items-center justify-center h-6 bg-white cursor-default">
          <ChevronDownIcon />
        </ScrollDownButton>
      </SelectContent>
    </Portal>
  );
};

export default Content;
