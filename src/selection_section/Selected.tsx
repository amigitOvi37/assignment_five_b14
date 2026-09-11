import type { IStack } from '../types/StackType';
import SelectedCard from './SelectedCard';

interface SelectedProps {
   selectedStacks: IStack[];
   setSelectedStacks: React.Dispatch<React.SetStateAction<IStack[]>>;
}

const Selected = ({selectedStacks, setSelectedStacks}: SelectedProps) => {
   return (
     <div>
       <div className="w-full max-w-sm rounded-4xl bg-white p-8 shadow-lg border-gray-100">
         <h2 className="text-2xl font-bold text-[#0B1527]">Your Stack</h2>

         <p className={selectedStacks.length === 0 ? "mt-1 text-base text-[#8D9BB0]" : "hidden"}>
           No technologies selected yet.
         </p>

         <p className={selectedStacks.length > 0 ? "mt-1 text-base text-[#8D9BB0]" : "hidden"}>
           {selectedStacks.length} Technologies Selected
         </p>

         <div className={`${selectedStacks.length === 0 ? "mt-6 flex h-28 items-center justify-center rounded-2xl border border-dashed border-[#D1D9E6]" : "hidden"}`}>
           <span className="text-base text-[#8D9BB0]">
             Your stack is empty.
           </span>
         </div>
         {selectedStacks.map((stack) => (
            <SelectedCard key={stack.id} stack={stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
         ))}
       </div>
     </div>
   );
};

export default Selected;