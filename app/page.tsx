import React from "react";
import Cards from "../components/Card";

export default function HomePage() {
  return (
    <div className="min-h-[78vh]">
      <h2 className="text-2xl text-center font-semibold my-4">I am Home Page</h2>
      <div className="card flex gap-5 flex-wrap my-4 mx-8 justify-center">
      <Cards name="Huzaifa" rollNo={2023} day="Monday" onSite= "Yes"/>
      <Cards name="Anees" rollNo={2024} day="Monday" onSite = "No"/>
      <Cards name="Saad" rollNo={2025} day="Monday" onSite = "Yes"/>
      <Cards name="Ahsan" rollNo={2026} day="Monday" onSite = "No"/>
      </div>
    </div>
  );
}
