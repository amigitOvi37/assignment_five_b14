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
}

const Available = ({stacksPromise, selectedStacks, currentStack, setSelectedStacks, setCurrentStack}:AvailableProps) => {
   const stacks = use(stacksPromise);
   return (
      <div className="grid-cols-4 grid gap-6 container mx-auto">
        <div className="col-span-3 grid grid-cols-3 gap-5">
         {stacks.map((stack) => (
           <StackCard key={stack.id} stack={stack} selectedStacks={selectedStacks} currentStack={currentStack} setSelectedStacks={setSelectedStacks} setCurrentStack={setCurrentStack} />
         ))}
       </div>
       <Selected selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks}/>
     </div>
   );
};

export default Available;