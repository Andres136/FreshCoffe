import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white md:flex">
      <Sidebar />
     <main className="min-w-0 flex-1 md:max-w-[686px]">
       <Outlet/>
     </main>
     
      
    </div>
  );
}
