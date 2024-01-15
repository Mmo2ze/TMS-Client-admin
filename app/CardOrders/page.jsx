//Generate
'use client'
import {useState, useEffect} from "react";
import axios from "../config/axiosconfigClient"
import Link from "next/link";

function Page () {
    var [orders, setOrders] = useState ([])
    useEffect (() => {
        axios.get ("api/Admin/CardsOrder")
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
            <div>
                {orders.map ((order) => (
                    <div>
                        <Link href={`/CardOrders/${order.id}`}>{order.id} {order.teacher.name}  {order.orderStatus}   </Link>
                        <br/>
                    </div>

                ))}
            </div>
            <h1>CardOrders {orders.length}</h1>
        </div>
    )

}

export default Page;
