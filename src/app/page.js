"use client"
import Main from "@/components/Main"
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="antialiased container flex px-14   bg-black ">
       <Sidebar/>
      <Main/>
     
    </div>
  );
}
