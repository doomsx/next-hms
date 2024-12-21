import React from "react";
import IDG from "@/public/id-g.svg";
import IDB from "@/public/id.svg";
import UserG from "@/public/user-g.svg";
import UserB from "@/public/user.svg";
import DateLogo from "@/public/date.svg";
import ContactPerson from "@/public/contact_person.svg";
import Image from "next/image";
import { FaLocationDot, FaWeightScale } from "react-icons/fa6";
import { IoIosTime, IoMdMale, IoMdFemale } from "react-icons/io";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { GiBodyHeight, GiHeartBeats } from "react-icons/gi";
import { EmergencyData, HAW, PersonalInformation } from "@/lib/types";

const Personal_Information = ({
    data,
    eData,
    latestHAW,
}: {
    data: PersonalInformation;
    eData: EmergencyData;
    latestHAW: HAW | null;
}) => {
    if (eData === undefined) {
        eData = {
            length: 0,
            fullname: "N/A",
            relationship: "N/A",
            contact_no: "N/A",
        };
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };

    const calculateAge = (birthdate: string) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    const bmiConverter = (
        height: number,
        weight: number,
        age: number,
        sex: string
    ) => {
        const hm = height / 100;
        const bmi = (weight / (hm * hm)).toFixed(2);
        let classification = "";

        // Classify for minors
        if (age < 18) {
            classification = "Refer to pediatrics";
        } else if (age >= 18 && age < 65) {
            // Classify based on sex for adults
            if (sex === "MALE") {
                if (Number(bmi) < 20) {
                    classification = "Underweight";
                } else if (Number(bmi) >= 20 && Number(bmi) < 25) {
                    classification = "Normal";
                } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
                    classification = "Overweight";
                } else if (Number(bmi) >= 30) {
                    classification = "Obese";
                }
            } else if (sex === "FEMALE") {
                if (Number(bmi) < 19) {
                    classification = "Underweight";
                } else if (Number(bmi) >= 19 && Number(bmi) < 25) {
                    classification = "Normal";
                } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
                    classification = "Overweight";
                } else if (Number(bmi) >= 30) {
                    classification = "Obese";
                }
            }
        } else {
            // For seniors (age >= 65)
            if (sex === "MALE") {
                if (Number(bmi) < 22) {
                    classification = "Underweight";
                } else if (Number(bmi) >= 22 && Number(bmi) < 28) {
                    classification = "Normal";
                } else if (Number(bmi) >= 28 && Number(bmi) < 32) {
                    classification = "Overweight";
                } else if (Number(bmi) >= 32) {
                    classification = "Obese";
                }
            } else if (sex === "FEMALE") {
                if (Number(bmi) < 22) {
                    classification = "Underweight";
                } else if (Number(bmi) >= 22 && Number(bmi) < 28) {
                    classification = "Normal";
                } else if (Number(bmi) >= 28 && Number(bmi) < 32) {
                    classification = "Overweight";
                } else if (Number(bmi) >= 32) {
                    classification = "Obese";
                }
            }
        }
        return { bmi, classification };
    };

    const height = data.height > 3 ? data.height : data.height * 100;
    const age = calculateAge(data.birthdate);
    const { bmi, classification } = bmiConverter(
        height,
        data.weight,
        age,
        data.sex
    );

    return (
        <div className="space-y-3 md:space-y-10 py-3 md:py-10">
            <div className="data-divider">
                <div className="space-y-3 md:w-1/6">
                    <div className="header-group">
                        {data.sex === "MALE" || data.sex === "male" ? (
                            <Image src={IDB} alt="" height={25} width={25} />
                        ) : (
                            <Image src={IDG} alt="" height={25} width={25} />
                        )}
                        <span className="data-title">Employee ID:</span>
                    </div>
                    <p className="data">{data.employee_id}</p>
                </div>

                <div className="space-y-3 md:w-full">
                    <div className="header-group">
                        {data.sex === "MALE" || data.sex === "male" ? (
                            <Image src={UserB} alt="" height={25} width={25} />
                        ) : (
                            <Image src={UserG} alt="" height={25} width={25} />
                        )}
                        <p className="data-title">Name: </p>
                    </div>
                    <p className="data">
                        {data.last_name}, {data.first_name} {data.middle_name}{" "}
                        {data.name_extn === "N/A" ? "" : data.name_extn}
                    </p>
                </div>
            </div>

            <div className="data-divider justify-center">
                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <FaLocationDot className="text-red-500 h-5 w-5" />
                        <p className="data-title">Address: </p>
                    </div>
                    <p className="data">
                        {`${data.p_house_block_lot === undefined ||
                            data.p_house_block_lot === "N/A"
                            ? ""
                            : data.p_house_block_lot
                            } 
                ${data.p_street === "N/A" || data.p_street === undefined
                                ? ""
                                : data.p_street
                            } 
                ${data.p_subdivision_village === "N/A" ||
                                data.p_subdivision_village === undefined
                                ? ""
                                : data.p_subdivision_village
                            } 
                ${data.p_barangay === "" || data.p_barangay === undefined
                                ? ""
                                : data.p_barangay
                            } 
                ${data.p_city_municipality === "" ||
                                data.p_city_municipality === undefined
                                ? ""
                                : data.p_city_municipality
                            } 
                ${data.p_province === "" || data.p_province === undefined
                                ? ""
                                : data.p_province
                            }`}
                    </p>
                </div>
                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <span>Blood Type:</span>
                    </div>
                    <p className="data">{data.blood_type}</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">Civil Status</div>
                    <p className="data">{data.civil_status}</p>
                </div>
            </div>

            <div className="data-divider justify-center">
                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <Image src={DateLogo} alt="" height={25} width={25} />
                        <p className="data-title">Birthdate: </p>
                    </div>
                    <p className="data">{formatDate(data.birthdate)}</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <IoIosTime className="text-red-400 h-5 w-5" />
                        <p className="data-title">Age: </p>
                    </div>
                    <p className="data">{age} years old</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        {data.sex === "MALE" || data.sex === "male" ? (
                            <IoMdMale className="text-blue-500 h-5 w-5" />
                        ) : (
                            <IoMdFemale className="text-pink-500 h-5 w-5" />
                        )}
                        <p className="data-title">Sex: </p>
                    </div>
                    <p className="data">{data.sex}</p>
                </div>
            </div>

            <div className="data-divider">
                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <FaPhone className="text-red-500 h-5 w-5" />
                        <p className="data-title">Contact Number: </p>
                    </div>
                    <p className="data">{data.mobile_no}</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <Image src={ContactPerson} alt="" height={25} width={25} />
                        <p className="data-title text-base">Emergency Contact Person: </p>
                    </div>
                    <p className="data ">
                        {eData === undefined || eData.length === 0
                            ? "N/A"
                            : eData.fullname === undefined || eData.fullname === "N/A"
                                ? "N/A"
                                : eData.fullname}
                        {eData === undefined || eData.length === 0
                            ? ""
                            : ` ${eData.relationship === "N/A" ? "" : `(${eData.relationship})`
                            }`}
                    </p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <FaPhoneAlt className="text-green-500 h-5 w-5" />
                        <p className="data-title">Emergency Contact Number: </p>
                    </div>
                    <p className="border-b w-full inline md:block">
                        {eData.length === 0 ? "N/A" : eData.contact_no ?? "N/A"}
                    </p>
                </div>
            </div>

            <div className="data-divider justify-center">
                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <GiBodyHeight className="text-orange-500 h-5 w-5" />
                        <p className="data-title">Height: </p>
                    </div>
                    <p className="data">{latestHAW?.height ?? height} (cm)</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <FaWeightScale className="text-green-500 h-5 w-5" />
                        <p className="data-title">Weight: </p>
                    </div>
                    <p className="data">{latestHAW?.weight ?? data.weight} kg</p>
                </div>

                <div className="space-y-3 md:w-1/3">
                    <div className="header-group">
                        <GiHeartBeats className="text-red-500 h-5 w-5" />
                        <p className="data-title">BMI: </p>
                    </div>
                    <p className="data">{`${latestHAW?.bmi.bmi ?? bmi} (${latestHAW?.bmi.classification ?? classification
                        })`}</p>
                </div>
            </div>
        </div>
    );
};

export default Personal_Information;
