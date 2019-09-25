import React from "react";
import createSlot, {useScope} from 'slottr';

interface SProps {
  isShowing: boolean;
}

const ComponentSlot: React.FunctionComponent<SProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Sloter = createSlot<SProps>(ComponentSlot);

export const ComponentWithSlot: React.FunctionComponent = ({children}) => {
  const scope = useScope(children);
  return (
    <div>
      <Sloter.slot scope={scope} />
    </div>
  );
};
