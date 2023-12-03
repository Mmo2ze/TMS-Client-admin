'use client'
import InputForm from '../inputForm/InputForm'
import Buttons from "../buttons/Buttons";
import {useState} from "react"
import axios from "../../app/config/axiosconfigClient";
import { useRouter } from "next/router";

const FormAdd = () => {
  const [name , setName] = useState("")
  const [phone , setPhone] = useState("")
  const [subject , setSubject] = useState("")
  const [status , setStatus] = useState("")
  const [price , setPrice] = useState("")


  const handelSubmit = async () => {
    
    try {
      console.log("Attempting to update data...");
      await axios.post(`/api/admin/teacher`, {
        name: name,
        phone: phone,
        subject: subject,
        status: status,
        paymentPrice: price,
      });
      console.log("Data updated successfully!");
      const router = useRouter();
      router.push("/")
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="mt-6 bg-side2-web-color p-4 rounded-lg">
      <div> 
      <InputForm label="Enter A Name" typeInput="string" value={name} onChange={setName}/>    
      <InputForm label="Enter A Phone" typeInput="number" value={phone} onChange={setPhone}/>    
      <InputForm label="Enter A Subject" typeInput="string" value={subject} onChange={setSubject}/>    
      <InputForm label="Enter A Status" typeInput="string" value={status} onChange={setStatus}/>    
      <InputForm label="Enter A Pyment Price" typeInput="number" value={price} onChange={setPrice}/>    
      <Buttons text="Add Tetcher" onSubmit={handelSubmit}/>
      </div>
    </div>
  )
}

export default FormAdd