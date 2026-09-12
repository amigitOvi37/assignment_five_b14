import Logo from "../assets/logo-text.png"

const Footer = () => {
   return (
     <div className="mt-20">
       <footer className="w-full bg-white text-slate-500 text-sm py-12 px-6 md:px-16 font-sans border-t border-slate-100">
         <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
             <div className="md:col-span-5 space-y-4">
               <div className="flex items-center space-x-2">
                 <img
                   src={Logo}
                   alt="Dev Stack Logo"
                   className="h-8 w-auto object-contain"
                 />
               </div>

               <p className="text-slate-500 max-w-sm leading-relaxed">
                 Curated tools, technologies, and resources for developers
                 building modern software.
               </p>

               <div className="flex items-center space-x-4 pt-2 font-medium text-slate-700">
                 <a
                   href="#github"
                   className="hover:text-slate-900 transition-colors"
                 >
                   GitHub
                 </a>
                 <a
                   href="#twitter"
                   className="hover:text-slate-900 transition-colors"
                 >
                   Twitter
                 </a>
                 <a
                   href="#linkedin"
                   className="hover:text-slate-900 transition-colors"
                 >
                   LinkedIn
                 </a>
               </div>
             </div>

             <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
               <div>
                 <h3 className="font-semibold text-slate-900 tracking-wider text-xs uppercase mb-4">
                   Product
                 </h3>
                 <ul className="space-y-3">
                   <li>
                     <a
                       href="#home"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Home
                     </a>
                   </li>
                   <li>
                     <a
                       href="#technologies"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Technologies
                     </a>
                   </li>
                   <li>
                     <a
                       href="#projects"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Projects
                     </a>
                   </li>
                 </ul>
               </div>

               <div>
                 <h3 className="font-semibold text-slate-900 tracking-wider text-xs uppercase mb-4">
                   Company
                 </h3>
                 <ul className="space-y-3">
                   <li>
                     <a
                       href="#about"
                       className="hover:text-slate-900 transition-colors"
                     >
                       About
                     </a>
                   </li>
                   <li>
                     <a
                       href="#contact"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Contact
                     </a>
                   </li>
                   <li>
                     <a
                       href="#careers"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Careers
                     </a>
                   </li>
                 </ul>
               </div>

               <div>
                 <h3 className="font-semibold text-slate-900 tracking-wider text-xs uppercase mb-4">
                   Legal
                 </h3>
                 <ul className="space-y-3">
                   <li>
                     <a
                       href="#privacy"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Privacy Policy
                     </a>
                   </li>
                   <li>
                     <a
                       href="#terms"
                       className="hover:text-slate-900 transition-colors"
                     >
                       Terms of Service
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>

           <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs">
             <p>© 2026 Dev Stack. All rights reserved.</p>

             <div className="flex space-x-6 mt-4 sm:mt-0">
               <a
                 href="#privacy"
                 className="hover:text-slate-600 transition-colors"
               >
                 Privacy
               </a>
               <a
                 href="#terms"
                 className="hover:text-slate-600 transition-colors"
               >
                 Terms
               </a>
             </div>
           </div>
         </div>
       </footer>
     </div>
   );
};

export default Footer;