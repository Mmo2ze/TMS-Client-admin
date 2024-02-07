"use client"
import{ useState, useEffect } from "react";
import axios from "../../config/axiosconfigClient"
interface Props {
  params: {
    id: string;
  };
}

interface PaymentData {
  amount: number;
  payedOn: string; 
}

const page: React.FC<Props> = (props) => {
  const [data , setData] = useState([])
const [amount , setAmount] = useState("")
const [show , setShow] = useState(false)
const [count, setCount] = useState<number>(1);

const getdata = async () => {
  try {
    const response = await axios.get(`/api/v1/Admin/teahcer/payment/${props.params.id}?count=${count}`);
    setData(response.data);
  } catch (e) {
    console.log(e);
  }
};


const handleSubmit = async () => {
  try {
    console.log("Attempting to update data...");
    await axios.post(`/api/v1/admin/teacher/payment`, {
      teacherID: parseInt(props.params.id, 10), 
        amount: parseInt(amount, 10), 
      });
      setAmount("");
    console.log("Data updated successfully!");
  } catch (error) {
    console.error("Error updating data:", error);
  }
};


console.log(`the amount is ${amount}`)
return(
    <div>
    <h1 className="text-3xl pt-4 text-center">Add Payments </h1>
    <div className="mt-6 bg-side2-web-color p-4 rounded-lg w-[90%] mx-auto"> 
    <div>
    <label  className="block mb-3 text-lg font-medium text-white">The ID</label>
    <input type="text"  disabled  className="   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600  text-white focus:ring-blue-500focus:border-blue-500 placeholder:text-white " placeholder={`${props.params.id}`} required />
  </div>
    <div>
    <label htmlFor="first_name" className="block mb-3 mt-3 text-lg font-medium text-white">Add Amount</label>
    <input onChange={(e) => setAmount(e.target.value)} type="text" id="first_name" className="   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500focus:border-blue-500" placeholder="Enter  Amount" required />
  </div>
    <button  onClick={handleSubmit} type="button" className="focus:outline-none text-white mt-8 w-full m-auto  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800">
      Sent</button>
    </div>

    <button onClick={() => setShow(!show)} type="button" className="text-white   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 ml-5 md:ml-8 my-4 w-[90%] md:w-[92%] bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
      Show Details
      </button>
{show &&  
(  <div> 
    <div className="mt-6 bg-side2-web-color p-4 rounded-lg w-[90%] mx-auto"> 
  <label htmlFor="count" className="block mb-3 mt-3 text-lg font-medium text-white">Count</label>
  <input
    onChange={(e) => setCount(parseInt(e.target.value, 10))}
    type="number"
    id="count"
    className="text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
    placeholder="Enter Count"
    required
  />
</div>
<div> 

<div className="relative overflow-x-auto my-4 mx-auto w-[90%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              amount
              </th>
              <th scope="col" className="px-6 py-3">
              payedOn
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((da: PaymentData)=>(
              <tr className="border-b bg-gray-800 border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                {da.amount}
              </th>
              <td className="px-6 py-4">
                {da.payedOn}
              </td>

            </tr>
            ))}
 
          </tbody>
        </table>
      </div>


</div>

<button onClick={getdata} type="button" className="focus:outline-none text-white   font-medium rounded-lg text-sm  px-5 py-2.5 ml-5 md:ml-8 my-4 w-[90%] md:w-[92%] bg-green-600 hover:bg-green-700 focus:ring-green-800">
  Show Teble
  </button>


  </div>
  
  )
}



</div>
)
}

export default page

