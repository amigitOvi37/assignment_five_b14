import type { IStack } from "../types/StackType";
import StackCard from "./StackCard";
import { use } from "react";
import Selected from "../selection_section/Selected";

interface AvailableProps {
  stacksPromise: Promise<IStack[]>;
  selectedStacks: IStack[];
  currentStack: IStack | null;
  setSelectedStacks: React.Dispatch<React.SetStateAction<IStack[]>>;
  setCurrentStack: React.Dispatch<React.SetStateAction<IStack | null>>;
  addButtonState: boolean;
  setAddButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Available = ({stacksPromise, selectedStacks, setSelectedStacks, setCurrentStack, addButtonState, setAddButtonState}:AvailableProps) => {
   const stacks = use(stacksPromise);
   return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-auto px-4 sm:px-0">
        <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((stack) => (
           <StackCard key={stack.id} stack={stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} setCurrentStack={setCurrentStack} />
         ))}
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1">
          <Selected selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} addButtonState={addButtonState} setAddButtonState={setAddButtonState} />
        </div>
      </div>
   );
};

export default Available;