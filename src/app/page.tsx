import { City } from "@/Components/City";
import { CityList } from "@/Components/Citylist";
import { Form } from "@/Components/Form";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Votre météo du jour
      </h1>
      <Form />
      <City />
      <CityList />
      
    </div>
  );
}
