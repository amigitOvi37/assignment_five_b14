import stackImage from '../assets/banner-stack.png';


const Hero = () => {
   return (
     <div>
       <section className="min-h-[80vh] w-full flex items-center justify-center bg-white px-6 py-12 md:px-16 lg:px-24">
         <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
           <div className="flex flex-col items-start space-y-6 max-w-xl">
             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
               Build Your Ideal{" "}
               <span className="bg-linear-to-r from-[#FF5E36] via-[#D0368A] to-[#803BEC] bg-clip-text text-transparent">
                 Development Stack
               </span>
             </h1>

             <p className="text-lg text-slate-500 font-normal leading-relaxed">
               Explore frontend, backend, database, and tooling options, compare
               them side by side, and put together the stack that fits your next
               project.
             </p>

             <div className="flex flex-wrap items-center gap-4 pt-2">
               <a
                 href="#explore"
                 className="px-6 py-3.5 rounded-xl font-medium text-white shadow-sm bg-linear-to-r from-[#FF5E36] to-[#E53888] hover:opacity-95 transition-all duration-200 text-center"
               >
                 Explore Technologies
               </a>
               <a
                 href="#learn-more"
                 className="px-8 py-3.5 rounded-xl font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-center"
               >
                 Learn More
               </a>
             </div>
           </div>

           <div className="flex items-center justify-center lg:justify-end w-full">
             <img
               src={stackImage}
               alt="Development Stack Illustration"
               className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-sm"
             />
           </div>
         </div>
       </section>
     </div>
   );
};

export default Hero;