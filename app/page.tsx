"use client";
import { useAuth } from "@/AppState";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const { HaveRole, Roles } = useAuth();
  if(HaveRole([null]))
  <>loding....</>
  else 
  if (HaveRole(["Admin"])) {
    return <h1>You are the best Admin in the world</h1>;
  } else {
    const router = useRouter();
    router.push("/login")
    
  }
}
