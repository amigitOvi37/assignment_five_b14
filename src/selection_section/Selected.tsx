import type { IStack } from '../types/StackType';
import SelectedCard from './SelectedCard';

interface SelectedProps {
   selectedStacks: IStack[];
   setSelectedStacks: React.Dispatch<React.SetStateAction<IStack[]>>;
   addButtonState: boolean;
   setAddButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Selected = ({selectedStacks, setSelectedStacks, addButtonState, setAddButtonState}: SelectedProps) => {

  const handleRemoveAll = () => {
     setSelectedStacks([]);
     setAddButtonState(false);
  }
  
   return (
     <div>
       <div className="w-full max-w-sm rounded-4xl bg-white p-8 shadow-lg border-gray-100">
         <h2 className="text-2xl font-bold text-[#0B1527]">Your Stack</h2>

         <p className={selectedStacks.length === 0 ? "mt-1 text-base text-[#8D9BB0]" : "hidden"}>
           No technologies selected yet.
         </p>

         <div className={`${selectedStacks.length === 0 ? "mt-6 flex h-28 items-center justify-center rounded-2xl border border-dashed border-[#D1D9E6]" : "hidden"}`}>
           <span className="text-base text-[#8D9BB0]">
             Your stack is empty.
           </span>
         </div>

         <div className={selectedStacks.length > 0 ? "mt-6" : "hidden"}>
            <p className={selectedStacks.length > 0 ? "mt-1 text-base text-[#8D9BB0]" : "hidden"}>
              {selectedStacks.length} Technologies Selected
            </p>

            {selectedStacks.map((stack) => (
              <SelectedCard key={stack.id} stack={stack} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} addButtonState={addButtonState} setAddButtonState={setAddButtonState} />
            ))}
            <button
              onClick={handleRemoveAll}
              className="mt-6 w-full py-3 rounded-2xl border border-red-200 text-red-500 font-semibold hover:bg-red-50 transition-colors cursor-pointer"
            >
              Remove All
            </button>
         </div>
       </div>
     </div>
   );
};

export default Selected;