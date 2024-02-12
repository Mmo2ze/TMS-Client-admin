//Generate
"use client";
import { useState, useEffect } from "react";
import axios from "../config/axiosconfigClient";
import Link from "next/link";

function Page() {
  var [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("api/v1/Admin/CardsOrder")
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
        console.log(orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="p-4">
        <h1 className="mb-8 text-2xl  text-white">
          CardOrders : <span className="text-blue-text">{orders.length} </span>{" "}
        </h1>
        {orders.map((order) => (
          <Link
            className=" block bg-side3-web-color mb-8 p-4 text-xl text-end rounded-lg"
            href={`/CardOrders/${order.id}`}
          >
            <div className="flex flex-row-reverse">
              <h1> : {order.id} </h1>
              <h1 className="px-4"> : {order.teacher.name} </h1>
              <h1
                className={`${
                  order.orderStatus === "Accepted"
                    ? "text-red-text"
                    : "text-green-text"
                }`}
              >
                 {order.orderStatus}  
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;
