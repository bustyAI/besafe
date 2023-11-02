import React, { useEffect, useState } from "react"
import Image from "next/image";
import { getOffenders } from "@/utils";
import { error } from "console";

const Offenders: React.FC<{}> = () => {
  const [offenders, setData] = useState<any[]>([]);

  useEffect(() => {
    if (!offenders) {
      
    }
    getOffenders().then((data) => {
      setData(data.offenders);
    }).catch((error) => {
      console.error("Error fetching data", error)
    });
  }, []);

  if (offenders.length === 0) {
    return <div className="hero__suptitle">Loading....</div>
  }


  return (
    <div className="flex flex-col justify-between items-start my-8">

      {offenders.map((off) => (
        <div className="flex flex-1 w-full flex-row py-8 border-y border-8 border-gray-400 rounded-md">
          <Image src='/annonymous.png' height={400} width={400} alt="picture" className="object-contain" />
          <div className="flex flex-1 flex-col justify-bewteen items-start ml-6">
            <p className=" text-4xl text-bold ml-4" key={off.name}>{off.name}
            <span className="text-black text-xl ml-4">{off.sex ? off.sex : "Sex: N/A"} {off.age ? off.age : "Age: N/A"}</span></p>
            <p className="text-black text-xl ml-5">{off.city ? off.city : "City: N/A"}, {off.state ? off.state : "State: N/A"}</p>
            <p className="text-black text-2xl mt-8">{off.crime ? off.crime : "Crime: N/A"}</p>
          </div>
          <div className="flex flex-1 flex-col justify-start items-end">
            <p className="off__info">State: {off.state ? off.state : "N/A"}</p>
            <p className="off__info">City: {off.city ? off.city : "N/A"}</p>
            <p className="off__info">Zip: {off.zipcode ? off.zipcode : "N/A"}</p>
            <p className="off__info">Address: {off.address ? off.address : "N/A"}</p>
            <p className="off__info">Height: {off.height ? off.height : "N/A"}</p>
            <p className="off__info">Weight: {off.weight ? off.weight : "N/A"}</p>
            <p className="off__info">Race: {off.race ? off.race : "N/A"}</p>
            <p className="off__info">Hair Color: {off.hairColor ? off.hairColor : "N/A"}</p>
            <p className="off__info">Eye Color: {off.eyeColor ? off.eyeColor : "N/A"}</p>

          </div>
        </div>
      ))}
    </div>

  )
}

export default Offenders;