import { NextResponse, NextRequest } from "next/server";
import axios from "../../config/axiosconfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if(!code) return NextResponse.json({ message:'code required'},{status:405})
  var data = JSON.stringify(code);
  let config = {
    method: "post",
    url: "/api/Auth/admin/verify",
    data: data,
    headers: {
      'Authorization':   `Bearer ${cookies().get("JWT")?.value}`,
    },
  };
  try {
    var res = await axios.request(config);
    console.log(res.data);
    cookies().set("JWT", res.data.data.token);

    return NextResponse.json({ message: "success" });
  } catch (err: any) {
    const response = err.response ;
    const errors = response.data.errors;
    if (errors) {
      console.log(errors);
      if(response?.data?.data?.token){
          cookies().set("JWT",response.data.data.token);
      }
      return NextResponse.json({ errors: errors }, { status: 400 });
    }
    const responseConc = { status : response.status, statusText: response.statusText};
    console.log(responseConc);
    if (err.response.status === 401) {
      console.log(response.request)
      return redirect("/login");
    }
    //5001
    return NextResponse.json(responseConc, { status: 500 });
  }
}
