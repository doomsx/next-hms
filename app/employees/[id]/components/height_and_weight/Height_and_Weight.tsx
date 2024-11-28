import React from "react";
const LINK = process.env.API_LINK;
import { haw } from "./columns";
import Haw_Table from "./haw_table";

const Height_and_Weight = async ({
  id,
  age,
  sex,
}: {
  id: string;
  age: number;
  sex: string;
}) => {
  const response = await fetch(`${LINK}/users/${id}/height-and-weight`).then(
    (response) => response.json()
  );

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

  const data = response.map(
    (d: { id: number; date: string; height: number; weight: number }) => {
      const { bmi, classification } = bmiConverter(
        d.height,
        d.weight,
        age,
        sex
      );

      return {
        id: d.id,
        date: d.date,
        height: d.height,
        weight: d.weight,
        bmi: `${bmi} (${classification})`,
      };
    }
  );

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl font-black">
        Height and Weight
      </h1>
      <Haw_Table data={data} columns={haw} />
    </div>
  );
};

export default Height_and_Weight;
