'use client'
import { useState, useEffect } from "react";
import {useParams} from "next/navigation";
import axios from "../../config/axiosconfigClient";
import { font } from "../../func/IBMPlexSansArabic-Medium-bold";
import QRious from 'qrious';
import Image from 'public/Front4.png';

import jsPDF from "jspdf";

function Page() {
    const padding = { top: 3, right: 5, bottom: 45, left: 0 };
    const [studentsClass, setStudentsClass] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        console.log('id', id)
        axios.get(`/api/Admin/CardOrder/${id}`)
            .then(response => {
                console.log(response.data.data.students)
                setStudentsClass(response.data.data.students)
            })
            .catch(error => {
                console.log(error)
            })
    },[])
    const generateNewPrintPDF = async () => {
        const pdf = new jsPDF ("p", "mm", "a4");
        const imageWidth = 95;
        const imageHeight = 50;
        const imagesPerRow = 2;
        const rowsPerPage = 5;
        const spaceBetweenImages = 10;
        const totalPages = Math.ceil (studentsClass.length / (imagesPerRow * rowsPerPage));
        const nameOffsetX = 7;
        const nameOffsetY = -40;
        let ImageData ;
        fetch("/Front4.png")
            .then((res) => res.blob())
            .then((blob) => {
                // Read the Blob as DataURL using the FileReader API
                const reader = new FileReader();
                reader.onloadend = () => {
                    console.log ( reader.result );
                    // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...
                    ImageData = reader.result;
                    // Convert to Base64 string
                    // const base64 = getBase64StringFromDataURL(reader.result);
                    // x = convertBase64ToBinaryString(base64);
                    // console.log(base64);
                    // Logs wL2dvYWwgbW9yZ...
                };
                reader.readAsDataURL ( blob );
            } );
        for (let page = 0; page < totalPages; page++) {
            pdf.addFileToVFS ("IBMPlexSansArabic-Medium-bold.ttf", font);
            pdf.addFont ("IBMPlexSansArabic-Medium-bold.ttf", "IBMPlexSansArabic-Medium", "bold");
            pdf.setFont ("IBMPlexSansArabic-Medium", "bold");
            pdf.setDrawColor (0);
            pdf.setFillColor (255, 255, 255);
            pdf.setTextColor (255, 255, 255);

            pdf.rect (0, 0, pdf.internal.pageSize.getWidth (), pdf.internal.pageSize.getHeight (), "F");
            for (let row = 0; row < rowsPerPage; row++) {
                for (let col = 0; col < imagesPerRow; col++) {
                    const studentIndex = page * rowsPerPage * imagesPerRow + row * imagesPerRow + col;
                    if (studentIndex < studentsClass.length) {
                        const student = studentsClass[studentIndex];
                        const xPos = padding.right + col * (imageWidth + spaceBetweenImages);
                        const yPos = padding.top + row * (imageHeight + spaceBetweenImages);
                        const nameXPos = xPos + nameOffsetX;
                        const nameYPos = yPos + imageHeight + nameOffsetY;
                        const qrCodeValue = student?.id?.toString ();
                        const qr = new QRious ({
                            value: qrCodeValue,
                            background: '#dfdedc',
                            size: 50,
                        });

                        pdf.addImage ('/Front4.png', "JPEG", xPos, yPos, imageWidth, imageHeight);
                        const qrCodeXPos = xPos + imageWidth / 2;
                        const qrCodeYPos = yPos + imageHeight / 2;

                        pdf.text (student.name || "", nameXPos, nameYPos);
                        pdf.text ((student.privateId && student.privateId.toString ()) || "", nameXPos + 10, nameYPos + 15);
                        pdf.addImage (qr.toDataURL (), "JPEG", qrCodeXPos + 14, qrCodeYPos - 19, 33, 33);
                    }
                }
            }

            if (page !== totalPages - 1) {
                pdf.addPage ();
            }
        }

        pdf.save (`Tass-${new Date ().toLocaleDateString ()}`);
    };


    let AcceptOrder = () => {
        console.log("جاري قبول الطلب")
axios.post(`/api/Admin/AcceptCardsOrder/${id}`)
            .then(response => {
                console.log(response.data.data)
                console.log("تم قبول الطلب بنجاح")
            })
            .catch(error => {
                console.log("errr")
            })
    };
    return (
        <div>
            <h1>{studentsClass.length +' طلاب '}</h1>
            <div className="flex justify-center my-12">
                <button onClick={generateNewPrintPDF} type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    طباعة الكروت
                </button>
                <button onClick={AcceptOrder} type="button"
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                    قبول الطلب
                </button>
            </div>
        </div>
    )

}

export default Page;