"use client";
import React, { useState, useEffect } from "react";
import axios from "../../app/config/axiosconfigClient";
import CloseIcon from "@mui/icons-material/Close";
import Inputs from "../inputs/Inputs";
import Buttons from "../buttons/Buttons";



interface Teacher {
  name: string;
  endOfSubscription: string;
  id: string;
  paymentPrice: number| null;
  payments: string | null;
  phone: string;
  status: string;
  subject: string;
}

const Pop: React.FC<{ onClose: any; id: number; paymentPrice?: number }> = ({ onClose, id, paymentPrice }) => {
  const [data, setData] = useState<Teacher>({
    name: "",
    endOfSubscription: "",
    id: "",
    paymentPrice: 0,
    payments: null,
    phone: "",
    status: "",
    subject: "",
  });

  useEffect(() => {
    console.log("ID received in Pop component:", id);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/admin/teacher/${id}`);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  const [nameTetsher, setNameTetcher] = useState(data.name);
  const [idTetsher, setIDTetcher] = useState(data.id);
  const [end, setEnd] = useState(data.endOfSubscription);
  const [pricePy, setPricePy] = useState(data.paymentPrice);
  const [payments, setPayments] = useState(data.payments);
  const [phone, setPhone] = useState(data.phone);
  const [status, setStatus] = useState(data.status);
  const [subject, setSubject] = useState(data.subject);
  useEffect(() => {
    setNameTetcher(data.name);
    setIDTetcher(data.id);
    setEnd(data.endOfSubscription);
    setPricePy(data.paymentPrice);
    setPayments(data.payments);
    setPhone(data.phone);
    setStatus(data.status);
    setSubject(data.subject);
  }, [data]);

  const handleUpdate = async () => {
    try {
      console.log("Attempting to update data...");
      var response = await axios.put(`/api/admin/teacher/${id}`, {
        name: nameTetsher,
        id: idTetsher,
        endOfSubscription: end,
        paymentPrice: paymentPrice || 0,
        payments: payments,
        phone: phone,
        status: status,
        subject: subject,
      });
        console.log(response.data.messages);
        if(response.data.messages[0].statusCode == 303){
          alert("ادخل رقم واتس صحيح يعرص");
        }
      console.log("Data updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="bg-side2-web-color w-[85%] md:w-[90%] h-[85%] md:h-fit overflow-y-scroll	 m-auto p-4 absolute top-14 rounded-lg left-8 z-50">
      <button className="absolute top-0 right-0 " onClick={onClose}>
        <CloseIcon color="primary" sx={{ fontSize: 60 }} />
      </button>
      <div>
        <div className="md:flex gap-8 mt-4">
          <Inputs
            label="Name"
            typeInput="text"
            value={nameTetsher}
            onChange={setNameTetcher}
          />
          <Inputs
            label="ID"
            typeInput="number"
            value={idTetsher}
            onChange={setIDTetcher}
          />
        </div>
        <div className="md:flex gap-8 mt-4 ">
          <Inputs
            label="End Of Subscription"
            typeInput="date"
            value={end}
            onChange={setEnd}
          />
          <Inputs
            label="Payment Price"
            typeInput="number"
            value={pricePy}
            onChange={setPricePy}
          />
        </div>
        <div className="md:flex gap-8 mt-4 ">
          <Inputs
            label="payments"
            typeInput="number"
            value={payments}
            onChange={setPayments}
          />
          <Inputs
            label="phone"
            typeInput="number"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className="md:flex gap-8  ">
          <Inputs
            label="status"
            typeInput="text"
            value={status}
            onChange={setStatus}
          />
          <Inputs
            label="Subject"
            typeInput="text"
            value={subject}
            onChange={setSubject}
          />
        </div>
        <div className="mb-2">
          <Buttons text="Submit Update" onSubmit={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Pop;
