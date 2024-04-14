import * as Popover from '@radix-ui/react-popover';
import './styles.css';
import { useState } from 'react';

const PopoverDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (val: boolean) => {
    console.log('val :', val);
    setIsOpen(val);
  };

  return <Popover.Root open={isOpen} onOpenChange={handleOpenChange} >
    <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some more info…
        <Popover.Arrow className="PopoverArrow" asChild={false} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
}

export default PopoverDemo;