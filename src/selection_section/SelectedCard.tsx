import { FaReact } from 'react-icons/fa';
import { IoLogoVue } from "react-icons/io5";
import { SiSvelte } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiRedis } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import type { IStack } from '../types/StackType';
import { IoClose } from "react-icons/io5";
import { toast, Bounce } from "react-toastify";


interface SelectedCardProps {
   stack: IStack;
   selectedStacks: IStack[];
   setSelectedStacks: React.Dispatch<React.SetStateAction<IStack[]>>;
   addButtonState: boolean;
   setAddButtonState: React.Dispatch<React.SetStateAction<boolean>>;

}

const SelectedCard = ({stack, selectedStacks, setSelectedStacks, addButtonState, setAddButtonState}: SelectedCardProps) => {

   const Allicons = (stID: string) => {
      if (stID === 'react') return <FaReact className="w-9 h-9 text-sky-400" />
      else if (stID === 'vue') return <IoLogoVue className="w-9 h-9 text-green-600" />
      else if (stID === 'svelte') return <SiSvelte className="w-9 h-9 text-red-500" />
      else if (stID === 'nextjs') return <RiNextjsFill className="w-9 h-9 text-black" />
      else if (stID === 'nodejs') return <IoLogoNodejs className="w-9 h-9 text-green-300" />
      else if (stID === 'redis') return <SiRedis className="w-9 h-9 text-red-800" />
      else if (stID === 'javascript') return <IoLogoJavascript className="w-9 h-9 text-yellow-400" />
      else if (stID === 'typescript') return <SiTypescript className="w-9 h-9 text-sky-700" />
      else if (stID === 'java') return <RiJavaLine className="w-9 h-9 text-red-500" />
      else if (stID === 'tailwindcss') return <SiTailwindcss className="w-9 h-9 text-sky-400" />
      else return <FaDocker className="w-9 h-9 text-sky-800" />
   }

   const handleRemoveStack = () => {
      setSelectedStacks(selectedStacks.filter((st) => st.id !== stack.id))
      setAddButtonState(!addButtonState)
      toast.success("Stack Removed Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

   return (
     <div className='mt-2.5'>
       <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-sm">
         <div className="flex items-center space-x-3">
           <div className="text-[#FF3E00]">
             {Allicons(stack.id)}
           </div> 

           <div className="flex flex-col">
             <span className="font-bold text-slate-800 text-base leading-tight">
               {stack.name}
             </span>
             <span className="text-xs font-medium text-slate-400 mt-0.5">
               {stack.category}
             </span>
           </div>
         </div>
         
         <button
           onClick={handleRemoveStack}
           type="button"
           className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md focus:outline-none"
           aria-label="Close"
         >
           <IoClose className="w-5 h-5" />
         </button>
       </div>
     </div>
   );
};

export default SelectedCard;