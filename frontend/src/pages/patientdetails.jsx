import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import Chart from "react-apexcharts";
import { faker } from "@faker-js/faker";

export const PatientDetails = () => {
	const diagnoses = [
		{
			date: "2023-01-15",
			title: "Routine Dental Checkup",
			doctor: "Dentist",
			medicinesGiven: [],
			diseasesUncovered: "No significant findings",
			allergiesUncovered: [],
			note: "Regular dental examination, no issues detected.",
		},
		{
			date: "2023-02-05",
			title: "Cardiovascular Health Assessment",
			doctor: "Cardiologist",
			medicinesGiven: ["Aspirin (75mg daily)"],
			diseasesUncovered: "High Blood Pressure",
			allergiesUncovered: [],
			note: "Prescribed aspirin for blood pressure management.",
		},
		{
			date: "2023-03-10",
			title: "Vision and Eye Health Checkup",
			doctor: "Ophthalmologist",
			medicinesGiven: ["Eye Drops (for dry eyes)"],
			diseasesUncovered: "Dry Eyes",
			allergiesUncovered: [],
			note: "Advised regular use of eye drops for dry eyes.",
		},
		{
			date: "2023-04-20",
			title: "Respiratory Function Test",
			doctor: "Pulmonologist",
			medicinesGiven: ["Inhaler (as needed)"],
			diseasesUncovered: "Mild Asthma",
			allergiesUncovered: ["Dust mites"],
			note: "Prescribed inhaler for asthma management.",
		},
		{
			date: "2023-05-15",
			title: "Allergy Testing",
			doctor: "Allergist",
			medicinesGiven: ["Antihistamines"],
			diseasesUncovered: "Allergic Rhinitis",
			allergiesUncovered: ["Pollen", "Pet Dander"],
			note: "Prescribed antihistamines for allergy relief.",
		},
		{
			date: "2023-06-08",
			title: "Diabetes Screening",
			doctor: "Endocrinologist",
			medicinesGiven: ["Metformin (500mg daily)"],
			diseasesUncovered: "Type 2 Diabetes",
			allergiesUncovered: [],
			note: "Initiated treatment for diabetes with Metformin.",
		},
		{
			date: "2023-07-12",
			title: "Skin Allergy Consultation",
			doctor: "Dermatologist",
			medicinesGiven: ["Topical Steroid Cream"],
			diseasesUncovered: "Eczema",
			allergiesUncovered: ["Nickel allergy"],
			note: "Prescribed a steroid cream for eczema management.",
		},
		{
			date: "2023-08-18",
			title: "Gastrointestinal Checkup",
			doctor: "Gastroenterologist",
			medicinesGiven: ["Proton Pump Inhibitor"],
			diseasesUncovered: "Acid Reflux",
			allergiesUncovered: [],
			note: "Prescribed medication for acid reflux.",
		},
		{
			date: "2023-09-25",
			title: "Mental Health Assessment",
			doctor: "Psychologist",
			medicinesGiven: ["Antidepressant (as needed)"],
			diseasesUncovered: "Generalized Anxiety Disorder",
			allergiesUncovered: [],
			note: "Recommended therapy and prescribed antidepressant.",
		},
		{
			date: "2023-10-30",
			title: "Joint Pain Evaluation",
			doctor: "Rheumatologist",
			medicinesGiven: ["Nonsteroidal Anti-Inflammatory Drug (NSAID)"],
			diseasesUncovered: "Osteoarthritis",
			allergiesUncovered: [],
			note: "Prescribed NSAID for joint pain management.",
		},
	];

	return (
		<div className="p-8">
			<h3 className="text-xl text-center font-bold">
				{faker.person.fullName()}
			</h3>
			<div className="py-4 flex flex-col gap-2">
				<p className="w-full p-3 border">
					<strong>Birthdate:</strong> {faker.date.anytime().toDateString()}
				</p>
				<p className="w-full p-3 border">
					<strong>Phone Number:</strong> {faker.phone.number()}
				</p>
				<p className="w-full p-3 border">
					<strong>Responsable Phone Number:</strong> {faker.phone.number()}
				</p>
				<p className="w-full p-3 border">
					<strong>Gender:</strong> {faker.person.gender()}
				</p>
				<p className="w-full p-3 border">
					<strong>Email:</strong> {faker.internet.email()}
				</p>
			</div>

			<div className="MED">
				<h3 className="text-center mb-4 text-xl">Medicine</h3>
				<div className="flex gap-4 justify-center flex-col items-center">
					<input
						type="text"
						placeholder="Medicine Name"
						className="w-full p-3 border"
					/>
					{/* <input type="time" placeholder='Medicine Time' /> */}
					<div className="check flex gap-4 justify-center">
						<input type="checkbox" />
						<p>Morning</p>
						<input type="checkbox" />
						<p>Midday</p>
						<input type="checkbox" />
						<p>Evening</p>
					</div>
					<input
						className="w-full p-3 border"
						type="number"
						placeholder="Quantity per dosage"
					/>
					<input
						type="text"
						className="w-full p-3 border"
						placeholder="Notes"
					/>
					{/* <button>+</button> */}
				</div>
			</div>
			<div className="mt-8">
				<h3 className="text-xl text-center font-bold">Medical Record</h3>
				<div>
					{diagnoses.map((diagnosis, index) => (
						<div key={index} className="py-4 flex flex-col gap-2">
							<h3 className="titlee mb-2 text-lg font-semibold">
								{diagnosis.title}
							</h3>
							<p className="w-full p-3 border">
								<strong>Date:</strong> {diagnosis.date}
							</p>
							<p className="w-full p-3 border">
								<strong>Doctor:</strong> {diagnosis.doctor}
							</p>
							<p className="w-full p-3 border">
								<strong>Medicines Given:</strong>{" "}
								{diagnosis.medicinesGiven.join(", ") || "None"}
							</p>
							<p className="w-full p-3 border">
								<strong>Diseases Uncovered:</strong>{" "}
								{diagnosis.diseasesUncovered}
							</p>
							<p className="w-full p-3 border">
								<strong>Allergies Uncovered:</strong>{" "}
								{diagnosis.allergiesUncovered.join(", ") || "None"}
							</p>
							<p className="w-full p-3 border">
								<strong>Note:</strong> {diagnosis.note}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
