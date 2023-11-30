'use client'
import React , {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import Inputs from "../inputs/Inputs";


const Tabels = () => {


interface User {
  id:number,
  name:string,
  phone:string,
  status:string,
  subject:string,
  paymentPrice:number,

}

  const users = [
    {
      id: 1,
      name: "Ahmad Mohsen",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      paymentPrice: 99,
      
    },
    {
      id: 2,
      name: "Zoey Lang",
      end: "2023-10-13",
      phone: "01145866243",
      status: "paused",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      paymentPrice: 491,
    },
    {
      id: 3,
      name: "Jane Fisher",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      paymentPrice: 41,
    },
    {
      id: 4,
      name: "William Howard",
      end: "2023-10-13",
      phone: "01145866243",
      status: "vacation",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      paymentPrice: 24,
    },
    {
      id: 5,
      name: "Kristen Copper",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      paymentPrice: 46,
    },
    {
      id: 6,
      name: "Brian Kim",
      end: "2023-10-13",
      phone: "01145866243",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      paymentPrice: 64,
      status: "Active",
    },
    {
      id: 7,
      name: "Michael Hunt",
      eend: "2023-10-13",
      phone: "01145866243",
      status: "paused",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
      paymentPrice: 2534,
    },
    {
      id: 8,
      name: "Samantha Brooks",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
      paymentPrice: 64,
    },
    {
      id: 9,
      name: "Frank Harrison",
      end: "2023-10-13",
      phone: "01145866243",
      status: "vacation",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=4",
      paymentPrice: 754,
    },
    {
      id: 10,
      name: "Emma Adams",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=5",
      paymentPrice: 765,
    },
    {
      id: 11,
      name: "Brandon Stevens",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=8",
      paymentPrice: 574,
    },
    {
      id: 12,
      name: "Megan Richards",
      end: "2023-10-13",
      phone: "01145866243",
      status: "paused",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=10",
      paymentPrice: 743,
    },
    {
      id: 13,
      name: "Oliver Scott",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=12",
      paymentPrice: 244,
    },
    {
      id: 14,
      name: "Grace Allen",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=16",
      paymentPrice: 232,
    },
    {
      id: 15,
      name: "Noah Carter",
      end: "2023-10-13",
      phone: "01145866243",
      status: "paused",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=15",
      paymentPrice: 243,
    },
    {
      id: 16,
      name: "Ava Perez",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=20",
      paymentPrice: 543,
    },
    {
      id: 17,
      name: "Liam Johnson",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=33",
      paymentPrice: 755,
    },
    {
      id: 18,
      name: "Sophia Taylor",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=29",
      paymentPrice: 342,
    },
    {
      id: 19,
      name: "Lucas Harris",
      end: "2023-10-13",
      phone: "01145866243",
      status: "paused",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=50",
      paymentPrice: 364,
    },
    {
      id: 20,
      name: "Mia Robinson",
      end: "2023-10-13",
      phone: "01145866243",
      status: "active",
      subject: "Biology",
      avatar: "https://i.pravatar.cc/150?img=45",
      paymentPrice: 845,
    },
  ];

  const [seePop, setSeePop] = useState(false);

  
  
  const openEditPopup = (user : User) => {
    setSelectedUser(user);
    setSeePop(true);
  };

  const [selectedUser, setSelectedUser] = useState({
    name: '',
    subject: '',
    end: '',
    phone: '',
    status: '',
    paymentPrice: '0',
    
  });

  return (
    <div className="relative  w-[95%] m-auto	 overflow-hidden	h-[90%]">
{seePop && (
  <div className="w-full h-[90vh] absolute z-50 bg-web-color text-white p-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl text-blue-color font-bold">Edit Teacher</h1>
      <CloseIcon
        className="cursor-pointer"
        color="primary"
        sx={{ fontSize: 40 }}
        onClick={() => setSeePop(false)}
      />
    </div>
    <form>
      {selectedUser && (
        <>
          <div className="flex gap-6 mt-5">
            <Inputs
              label="name"
              inputPlaceholder="Name Teacher"
              typeInput="string"
              value={selectedUser.name}
            />
            <Inputs
              label="Subject"
              inputPlaceholder="Subject"
              typeInput="string"
              value={selectedUser.subject}
            />
          </div>
          <div className="flex gap-6 mt-5">
            <Inputs
              label="End Of Subscription"
              inputPlaceholder="Enter The End"
              typeInput="string"
              value={selectedUser.end}
            />
            <Inputs
              label="Phone Teacher"
              inputPlaceholder="Phone"
              typeInput="number"
              value={selectedUser.phone}
            />
          </div>
          <div className="flex gap-6 mt-5">
            <Inputs
              label="Payment Price"
              inputPlaceholder="Enter The Payment Price"
              typeInput="number"
              value={selectedUser.paymentPrice}
            />
            <Inputs
              label="Status Teacher"
              inputPlaceholder="Status"
              typeInput="string"
              value={selectedUser.status}
            />
          </div>
          <div className="flex gap-6 mt-5 mb-5">
            <Inputs
              label="Payments"
              inputPlaceholder="Enter The Payments"
              typeInput="number"
              value={selectedUser.paymentPrice}

            />
          </div>
        </>
      )}
      <button type="button">Save Changes</button>
    </form>
  </div>
)}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full  h-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name Tetcher
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                End
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
              Status
              </th>
              <th scope="col" className="px-6 py-3">
              Subject
              </th>
              <th scope="col" className="px-6 py-3">
                PaymentPrice
              </th>
              <th scope="col" className="px-6 py-3">
                Edit    
              </th>
            </tr>
          </thead>
          <tbody>
        {users.map((user) => (
  <tr
    className="text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    key={user.id}
  >
    <td className="w-4 p-4">
      <div className="flex items-center">
        <input
          id={`checkbox-table-${user.id}`}
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor={`checkbox-table-${user.id}`} className="sr-only">
          checkbox
        </label>
      </div>
    </td>
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {user.name}
    </th>
    <td className="px-6 py-4">{user.id}</td>
    <td className="px-6 py-4">{user.end}</td>
    <td className="px-6 py-4">{user.phone}</td>
    <td className="px-6 py-4">{user.status}</td>
    <td className="px-6 py-4">{user.subject}</td>
    <td className="px-6 py-4">{user.paymentPrice}</td>
    <td className="px-6 py-4">
      <a
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={() => openEditPopup(user)}
      >
        Edit
      </a>
    </td>
  </tr>
))}


          </tbody>
        </table>
       
      </div>
    </div>
  )
}

export default Tabels