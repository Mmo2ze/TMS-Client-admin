import { useAuth } from "@/AppState";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Apptest from "../components/test/Test"
import Tabels from "../components/tabels/Tabels"
import axios from "./config/axiosconfigClient"


export default function Home() {

  // const res = axios.post('/api/admin/teacher')


  let config = {
    method: "get",
    url: "/api/admin/teacher"
  };
var res =  axios.request(config)


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
