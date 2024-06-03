'use client'
// import { Form } from "@/components/form";
import Menu from "@/components/Menu";
// import Landing from "@/components/Landing";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="grid min-h-screen w-screen place-content-center" >
      <Menu />
   
    <div className="flex flex-col md:flex-row min-h-screen mt-4 md:mt-0 items-center justify-center">
      <div className="md:w-1/2 flex items-center justify-center p-8 ml-4 w-50%">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-marine-blue ">Welcome to Our Employee Management System</h1>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-8 mr-auto">
      <img src='/home2.jpg' alt=''/>
      </div>
    </div>
 
      
    </main>
    </>
  );
}
