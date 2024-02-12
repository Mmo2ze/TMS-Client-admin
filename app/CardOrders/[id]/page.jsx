"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "../../config/axiosconfigClient";
import { font } from "../../func/IBMPlexSansArabic-Medium-bold";
import QRious from 'qrious';
import Image from 'public/Front4.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

import jsPDF from "jspdf";

function Page() {
    const padding = { top: 3, right: 5, bottom: 45, left: 0 };
    const [studentsClass, setStudentsClass] = useState([]);
    const [process, setProcess] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        console.log('id', id);
        axios.get(`/api/v1/Admin/CardOrder/${id}`)
            .then(response => {
                console.log(response.data.data.students);
                setStudentsClass(response.data.data.students);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    let counter = 1;
    const generateNewPrintPDF = async () => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imageWidth = 95;
        const imageHeight = 50;
        const imagesPerRow = 2;
        const rowsPerPage = 5;
        const spaceBetweenImages = 10;
        const totalPages = Math.ceil(studentsClass.length / (imagesPerRow * rowsPerPage));
        const nameOffsetX = 7;
        const nameOffsetY = -40;
        let ImageData;
        for (let page = 0; page < totalPages; page++) {
            pdf.addFileToVFS("IBMPlexSansArabic-Medium-bold.ttf", font);
            pdf.addFont("IBMPlexSansArabic-Medium-bold.ttf", "IBMPlexSansArabic-Medium", "bold");
            pdf.setFont("IBMPlexSansArabic-Medium", "bold");
            pdf.setDrawColor(0);
            pdf.setFillColor(255, 255, 255);
            pdf.setTextColor(255, 255, 255);
            pdf.setLanguage("en");
            pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), "F");
            for (let row = 0; row < rowsPerPage; row++) {
                for (let col = 0; col < imagesPerRow; col++) {
                    const studentIndex = page * rowsPerPage * imagesPerRow + row * imagesPerRow + col;
                    if (studentIndex < studentsClass.length) {
                        await new Promise(resolve => setTimeout(resolve, 1));
                        setProcess(counter++ / studentsClass.length * 100);
                        const student = studentsClass[studentIndex];
                        const xPos = padding.right + col * (imageWidth + spaceBetweenImages);
                        const yPos = padding.top + row * (imageHeight + spaceBetweenImages);
                        const nameXPos = xPos + nameOffsetX;
                        const nameYPos = yPos + imageHeight + nameOffsetY;
                        const qrCodeValue = student?.privateId?.toString();
                        const qr = new QRious({
                            value: qrCodeValue,
                            background: 'rgba(151,59,151,0)',
                            foreground: '#d5d5d5',
                            size: 50,
                        });
                        pdf.addImage('/Front4.png', "JPEG", xPos, yPos, imageWidth - 5, imageHeight);
                        const qrCodeXPos = xPos + imageWidth / 2;
                        const qrCodeYPos = yPos + imageHeight / 2;
                        const nameWidth = pdf.getStringUnitWidth(student.name || "") * 11;
                        const nameXText = qrCodeXPos - nameWidth / 2;

                        pdf.text(student.name || "", nameXText + 4, nameYPos + 3);
                        pdf.text((student.privateId && student.privateId.toString()) || "", nameXPos + 30, nameYPos + 13);
                        pdf.addImage(qr.toDataURL(), "JPEG", qrCodeXPos + 6, qrCodeYPos - 21, 32, 32);
                    }
                }
            }

            if (page !== totalPages - 1) {
                pdf.addPage();
            }
        }

        pdf.save(`Tass-${new Date().toLocaleDateString()}`);
    };


    let AcceptOrder = () => {
        console.log("جاري قبول الطلب");
        axios.post(`/api/v1/Admin/AcceptCardsOrder/${id}`)
            .then(response => {
                console.log(response.data.data);
                console.log("تم قبول الطلب بنجاح");
            })
            .catch(error => {
                console.log("errr");
            });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-white"> Student Number : <span className="text-blue-text">{studentsClass.length}</span></h1>
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
            <div className="bg-side3-web-color overflow-hidden rounded-lg ">
            <ProgressBar now={process} label={`${process.toFixed(0)}%`} striped variant="success"  />
            </div>
        </div>
    )
}

export default Page;

{/* <ProgressBar
    now={process}
    label={`${process.toFixed(0)}%`}
    striped
    variant="success"
    style={{ borderRadius: '5px' }}
/> */}

{/* <div className="bg-side3-web-color rounded-lg" style={{ overflow: 'hidden' }}>
    <ProgressBar
        now={process}
        label={`${process.toFixed(0)}%`}
        striped
        variant="success"
        style={{ borderRadius: '5px' }}
    />
</div> */}
