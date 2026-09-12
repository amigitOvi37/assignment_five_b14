
import type { IStack } from '../types/StackType';
import { FaReact, FaStar} from 'react-icons/fa';
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

import { toast, Bounce } from "react-toastify";


interface StackCardProps {
   stack: IStack;
   selectedStacks: IStack[];
   setSelectedStacks: React.Dispatch<React.SetStateAction<IStack[]>>;
   setCurrentStack: React.Dispatch<React.SetStateAction<IStack | null>>;
}

const StackCard = ({stack, selectedStacks, setSelectedStacks, setCurrentStack}: StackCardProps) => {

   const isSelected = selectedStacks.some((selectedStack) => selectedStack.id === stack.id);

   const Allicons = (stID: string) => {
      if (stID === 'react') return <FaReact className="w-10 h-10 animate-spin-slow text-sky-400" />
      else if (stID === 'vue') return <IoLogoVue className="w-10 h-10 animate-spin-slow text-green-600" />
      else if (stID === 'svelte') return <SiSvelte className="w-10 h-10 animate-spin-slow text-red-500" />
      else if (stID === 'nextjs') return <RiNextjsFill className="w-10 h-10 animate-spin-slow text-black" />
      else if (stID === 'nodejs') return <IoLogoNodejs className="w-10 h-10 animate-spin-slow text-green-300" />
      else if (stID === 'redis') return <SiRedis className="w-10 h-10 animate-spin-slow text-red-800" />
      else if (stID === 'javascript') return <IoLogoJavascript className="w-10 h-10 animate-spin-slow text-yellow-400" />
      else if (stID === 'typescript') return <SiTypescript className="w-10 h-10 animate-spin-slow text-sky-700" />
      else if (stID === 'java') return <RiJavaLine className="w-10 h-10 animate-spin-slow text-red-500" />
      else if (stID === 'tailwindcss') return <SiTailwindcss className="w-10 h-10 animate-spin-slow text-sky-400" />
      else return <FaDocker className="w-10 h-10 animate-spin-slow text-sky-800" />
   }

   const handleAddStack = () => {
      setCurrentStack(stack)
      setSelectedStacks([...selectedStacks, stack])
      toast.success("Stack Added Successfully!", {
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
     <div>
       <div className="max-w-sm rounded-3xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between font-sans">
         <div className="flex items-center justify-between mb-6">
           <div className="p-2 rounded-xl text-sky-400">
             {Allicons(stack.id)}
           </div>
           <span
             className={`px-3 py-1 text-xs font-semibold ${stack.id === "react" ? "text-sky-600" : stack.id === "vue" ? "text-green-600" : stack.id === "svelte" ? "text-red-600" : stack.id === "nextjs" ? "text-black" : stack.id === "nodejs" ? "text-green-600" : stack.id === "redis" ? "text-red-800" : stack.id === "javascript" ? "text-yellow-500" : stack.id === "typescript" ? "text-sky-700" : stack.id === "java" ? "text-red-500" : stack.id === "tailwindcss" ? "text-sky-400" : "text-sky-800"} bg-sky-50 rounded-full`}
           >
             {stack.badge}
           </span>
         </div>

         <div className="space-y-3 mb-6">
           <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
             {stack.name}
           </h2>
           <p className="text-slate-500 text-sm leading-relaxed">
             {stack.description}
           </p>
         </div>

         <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs mb-6">
           <div className="flex items-center space-x-3">
             <span className="px-2.5 py-1 bg-slate-100 text-slate-600 font-medium rounded-md">
               {stack.category}
             </span>
             <span className="text-slate-500 font-medium">
               {stack.difficulty}
             </span>
           </div>
           <div className="flex items-center space-x-1 text-slate-900 font-bold">
             <FaStar className="text-amber-400 w-3.5 h-3.5" />
             <span>{stack.rating}</span>
           </div>
         </div>

         <button
           onClick={handleAddStack}
           disabled={isSelected}
           type="button"
           className={`${isSelected ? "bg-gray-400 cursor-not-allowed w-full py-3 px-4 text-white font-medium text-sm rounded-xl transition duration-200 shadow-sm active:scale-[0.99]" : "w-full py-3 px-4 bg-[#0B0F19] hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition duration-200 shadow-sm active:scale-[0.99]"}`}
         >
{isSelected ? "Added" : "Add to Stack"}
          </button>
        </div>
      </div>
    );
};

export default StackCard;