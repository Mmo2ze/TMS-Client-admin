import { useAuth } from "@/AppState";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Apptest from "../components/test/Test"
import Tabels from "../components/tabels/Tabels"
import axios from "./config/clientaxaios"
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    const getdata = async () => {
      try {
        var response = await axios.get("/api/admin/teacher");
      } catch (e) {
        console.log(e);
      }
    };
    getdata();
  }, []);

  const { HaveRole, Roles } = useAuth();
  if(HaveRole([null]))
  <>loding....</>
  else 
  if (HaveRole(["Admin"])) {
    return <div className="bg-web-color h-screen   		">
<div className="dark h-full bg-black p-4">
    {/* <App/> */}
    <h1 className="text-red-600">asdasdasdalskd;l </h1>
    <Tabels/>
    {/* <Apptest/> */}
</div>
    </div>;
  } else {
    const router = useRouter();
    router.push("/login")
    
  }
}
