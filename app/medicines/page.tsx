import React from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { columns } from "./columns";
import Medicine_Table from "./medicine_table";

function page() {
  const data = [
    {
      category: "Pain Relievers",
      medicine: "Paracetamol",
      brands: "Biogesic, Tempra",
      description: "Reduces fever and relieves mild to moderate pain.",
    },
    {
      category: "Pain Relievers",
      medicine: "Ibuprofen",
      brands: "Advil, Medicol",
      description:
        "Reduces pain, inflammation, and fever; avoid in severe gastric issues.",
    },
    {
      category: "Pain Relievers",
      medicine: "Mefenamic Acid",
      brands: "Ponstan, Dolfenal",
      description: "For moderate to severe pain, such as dysmenorrhea.",
    },
    {
      category: "Anti-Diarrheals",
      medicine: "Loperamide",
      brands: "Diatabs, Imodium",
      description: "Treats diarrhea by slowing bowel movement.",
    },
    {
      category: "Antibiotics",
      medicine: "Amoxicillin",
      brands: "Amoxil, Himox",
      description:
        "Treats bacterial infections such as respiratory or skin infections.",
    },
    {
      category: "Antibiotics",
      medicine: "Cefalexin",
      brands: "Cefalin, Ceporex",
      description: "Broad-spectrum antibiotic for bacterial infections.",
    },
    {
      category: "Antihistamines",
      medicine: "Cetirizine",
      brands: "Virlix, Zyrtec",
      description:
        "Relieves allergy symptoms like sneezing, itching, and rashes.",
    },
    {
      category: "Antihistamines",
      medicine: "Loratadine",
      brands: "Claritin, Allerta",
      description: "Non-drowsy antihistamine for allergies.",
    },
    {
      category: "Cough Medications",
      medicine: "Carbocisteine",
      brands: "Solmux",
      description: "Mucolytic to thin and loosen phlegm.",
    },
    {
      category: "Bronchodilators",
      medicine: "Salbutamol",
      brands: "Ventolin",
      description: "Relieves asthma symptoms and bronchospasms.",
    },
    {
      category: "Anti-Hypertensives",
      medicine: "Losartan",
      brands: "Lifezar, Cozaar",
      description: "Lowers high blood pressure and improves heart health.",
    },
    {
      category: "Anti-Hypertensives",
      medicine: "Amlodipine",
      brands: "Norvasc, Amvasc",
      description: "Controls blood pressure and treats angina.",
    },
    {
      category: "Diabetes Medications",
      medicine: "Metformin",
      brands: "Glucophage",
      description: "Helps manage blood sugar levels in Type 2 diabetes.",
    },
    {
      category: "Gastric Medications",
      medicine: "Omeprazole",
      brands: "Losec, Prosec",
      description: "Treats acid reflux, GERD, and ulcers.",
    },
    {
      category: "Mucosal Protectants",
      medicine: "Sucralfate",
      brands: "Ulcar, Carafate",
      description: "Protects the stomach lining from acid damage.",
    },
    {
      category: "Vitamin C",
      medicine: "Ascorbic Acid",
      brands: "Poten-Cee, Cecon",
      description:
        "Boosts immunity, prevents colds, and improves iron absorption.",
    },
    {
      category: "Multivitamins",
      medicine: "Multivitamins",
      brands: "Enervon, Centrum",
      description: "Supports overall health, energy, and immunity.",
    },
    {
      category: "B-Complex Vitamins",
      medicine: "Vitamin B Complex",
      brands: "Neurobion",
      description:
        "Improves nerve function, energy production, and red blood cell formation.",
    },
    {
      category: "Iron Supplements",
      medicine: "Ferrous Sulfate",
      brands: "Iberet, Sangobion",
      description:
        "Treats iron-deficiency anemia and supports healthy red blood cells.",
    },
    {
      category: "Calcium + Vitamin D",
      medicine: "Calcium with Vitamin D",
      brands: "Caltrate, Calciumade",
      description: "Strengthens bones and prevents osteoporosis.",
    },
    {
      category: "Vitamin E",
      medicine: "Vitamin E",
      brands: "Myra-E",
      description: "Promotes skin health and acts as an antioxidant.",
    },
    {
      category: "Omega-3 Supplements",
      medicine: "Fish Oil/Omega-3",
      brands: "Century Tuna Omega-3, Omegabloc",
      description: "Supports heart, brain, and joint health.",
    },
    {
      category: "Zinc",
      medicine: "Zinc",
      brands: "ImmunPro, Solmux Advance",
      description: "Boosts immunity and helps in wound healing.",
    },
    {
      category: "Folic Acid",
      medicine: "Folic Acid",
      brands: "",
      description:
        "Prevents birth defects in pregnant women and supports red blood cell health.",
    },
    {
      category: "Probiotics",
      medicine: "Lactobacillus + Bifidobacterium",
      brands: "Erceflora, Yakult",
      description:
        "Restores healthy gut bacteria, supports digestion and immunity.",
    },
    {
      category: "Melatonin",
      medicine: "Melatonin",
      brands: "",
      description: "Regulates sleep patterns and improves sleep quality.",
    },
  ];

  return (
    <ProtectedRoute>
      <section className="mt-[60px]">
        <h1 className="text-center text-2xl md:text-5xl font-bold">
          Medicines
        </h1>
        <div className="container">
          <Medicine_Table columns={columns} data={data} />
        </div>
      </section>
    </ProtectedRoute>
  );
}

export default page;
