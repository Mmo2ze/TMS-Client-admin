'use client';
import { useAuth } from "@/AppState";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Apptest from "../components/test/Test"
import Tabels from "../components/tabels/Tabels"
import axios from "./config/axiosconfigClient"

export default function Home() {



  const { HaveRole, Roles } = useAuth();
  if(HaveRole([null]))
  <>loding....</>
  else 
  if (HaveRole(["Admin"])) {
    return <div className=" h-screen   		">
<div className="dark h-full  p-4">
    {/* <App/> */}
    
    <Tabels/>
    {/* <Apptest/> */}
</div>
    </div>;
  } else {
    const router = useRouter();
    router.push("/login")
    
  }
}
