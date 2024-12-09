import Image from "next/image";
import FinalGradeForm from "@/components/forms/FinalGradeForm";
import Navbar from "@/components/sections/navbar";
export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1>Grade Calculator</h1>
      <FinalGradeForm />
    </div>
  );
}
