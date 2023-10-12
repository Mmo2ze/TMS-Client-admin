import { NextResponse, NextRequest } from "next/server";
import axios from "../../config/axiosconfig";
import { cookies } from "next/headers";
type ResponseData = {
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();
    var data = JSON.stringify(phone);
    let config = {
      method: "post",
      url: "/api/Auth/admin/login",
      data: data,
    };
    var res;
    try {
      res = await axios.request(config);
      const jwt = res.data.data.token;
      if (jwt) {
        cookies().set("JWT", jwt);
        return NextResponse.json({ message: "success" });
      }else
      return NextResponse.json({
        message: "success but jwt could not get jwt from api",
      });
    } catch (err: any) {
      const errors = err.response.data.errors;
      if (errors) {
        console.log(errors);
        return NextResponse.json({ errors: errors }, { status: 400 });
      }

      console.log(err);
      //5000
      return NextResponse.json(
        { errors: "check status 5000" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json({ errors: 'phone is required ' }, { status: 406 });
  }
}
