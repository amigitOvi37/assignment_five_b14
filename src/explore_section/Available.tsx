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
      <div className="grid-cols-4 grid gap-6 container mx-auto">
        <div className="col-span-3 grid grid-cols-3 gap-5">
          {stacks.map((stack) => (
           <StackCard key={stack.id} stack={stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} setCurrentStack={setCurrentStack} />
         ))}
        </div>
       <Selected selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} addButtonState={addButtonState} setAddButtonState={setAddButtonState} />
     </div>
   );
};

export default Available;