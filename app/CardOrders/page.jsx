//Generate
'use client'
import {useState, useEffect} from "react";
import axios from "../config/axiosconfigClient"
import Link from "next/link";

function Page () {
    var [orders, setOrders] = useState ([])
    useEffect (() => {
        axios.get ("api/v1/Admin/CardsOrder")
            .then (response => {
                setOrders (response.data);
                console.log (response.data)
                console.log (orders);
            }).catch (err => {
            console.log (err);
        })
    }, [])
    return (
        <div>
            <div className="p-4">
                <h1 className="mb-4 text-2xl  text-white">CardOrders : <span className="text-blue-text">{orders.length} </span> </h1>
                {orders.map ((order) => (
                    <div className="bg-side3-web-color mb-4 p-4 text-xl text-end rounded-lg">
                        <Link href={`/CardOrders/${order.id}`}>
                            {order.id}    :   {order.orderStatus}    :      {order.teacher.name} 
                        </Link>
    
                    </div>

                ))}
            </div>
        </div>
    )

}

export default Page;
