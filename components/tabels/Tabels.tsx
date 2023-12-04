import React, { useState, useEffect } from "react";
import axios from "../../app/config/axiosconfigClient";
import Pop from "../pop/Pop";
import Link from 'next/link';
import PopDelete from "../popDelete/PopDelete";


interface Teacher {
  name: string;
  endOfSubscription: string;
  id: string;
  paymentPrice: number;
  payments: string | null;
  phone: string;
  status: string;
  subject: string;
}

const Tabels: React.FC = () => {
  const [data, setData] = useState<Teacher[]>([]);
  const [showPop, setShowPop] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [popDelete ,SetPopDelete] = useState(false)
  const [deleteID , setDeleteId] = useState("")
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get("/api/admin/teacher");
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getdata();
  }, []);

  const handleClosePop = async () => {
    const response = await axios.get("/api/admin/teacher");
    setData(response.data);
    
    setShowPop(false);
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id);
    setShowPop(true);
  };

  const handleDelete = async (id: string) => {
    SetPopDelete(true)
    setDeleteId(id)
    
  };
  const handleDeleteUser = async () =>{
    await axios.delete(`/api/admin/teacher/${deleteID}`);
    setData((prevData) => prevData.filter((teacher) => teacher.id !== deleteID));
    SetPopDelete(false);
  }

const handelCansle = () => {
  SetPopDelete(false)
}

  return (
    <div className="relative">
      <div className="md:flex justify-between align-center mb-6 text-white text-2xl font-bold" >
      <h1 >Name Oll Teacher</h1>
      <Link href="/add_teatcher" passHref  >
     <h1 className="text-green-600 mt-3 md:mt-0"> Add Tetcher</h1>
    </Link>

      </div>
      {showPop && <Pop id={selectedId} onClose={handleClosePop} paymentPrice= {0} />}
      {popDelete && <PopDelete onDelete={handleDeleteUser} onCansle={handelCansle} id={0}/>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                endOfSubscription
              </th>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                paymentPrice
              </th>
              <th scope="col" className="px-6 py-3">
                payments
              </th>
              <th scope="col" className="px-6 py-3">
                phone
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
              <th scope="col" className="px-6 py-3">
                subject
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Add Payments</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((da) => (
              <tr
                key={da.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
              >
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  {da.name}
                </th>
                <td className="px-6 py-4">{da.endOfSubscription}</td>
                <td className="px-6 py-4">{da.id}</td>
                <td className="px-6 py-4">{da.paymentPrice}</td>
                <td className="px-6 py-4">{da.payments !== null ? da.payments : "Data Not Found"}</td>
                <td className="px-6 py-4">{da.phone}</td>
                <td className="px-6 py-4">{da.status}</td>
                <td className="px-6 py-4">{da.subject}</td>
                <td className="px-6 py-4 text-right">
                  <h3 onClick={() => handleEditClick(da.id)} className="font-medium text-blue-500 hover:underline">
                    Edit
                  </h3>
                </td>
                <td className="px-6 py-4 text-right">
                  <h3 onClick={() => handleDelete(da.id)} className="font-medium text-red-500 hover:underline">
                  Delete
                  </h3>
                </td>
                <td className="px-6 py-4 text-right">
                    <Link href={`/add_payments/${da.id}`}> 
                  <h3  className="font-medium text-green-500 hover:underline">
                   Payments
                  </h3>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabels;
