'use client";'

import Citylist from "@/Components/Citylist";
import { Form } from "@/Components/Form";

export default function Home() {
  return (
    <div>
      <h1 className="mb-10 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-orange-500">
        Bienvenue dans l&apos;application météo
      </h1>
      <Form />
      <Citylist />
      
    </div>
  );
}
