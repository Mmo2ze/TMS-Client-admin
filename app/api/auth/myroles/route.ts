import { NextResponse, NextRequest } from "next/server";
import axios from "../../../config/axiosconfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const JWT = cookies().get("JWT")?.value;
  if (JWT) {
    try {
      const response = await axios.get("/api/auth/myroles",{headers:{"Authorization": "Bearer "+JWT }});
      console.log(response.data);
      return NextResponse.json(response.data);
    } catch (error:any){
      return NextResponse.json("unauthorized", { status: 401 });
    }
  } else       return NextResponse.json("unauthorized", { status: 401 });

}
