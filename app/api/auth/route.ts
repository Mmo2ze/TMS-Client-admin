import { NextResponse, NextRequest } from "next/server";
import axios from "../config/axiosconfig";
import { cookies } from "next/headers";
type ResponseData = {
  message: string;
};

export async function POST(req: NextRequest) {
  const { phone } = await req.json();
  var myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Content-Type", "application/json");
  var data = JSON.stringify(phone);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };


  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/Auth/admin/login",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios
    .request(config)
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  return NextResponse.json({ message: "succes" });
}
