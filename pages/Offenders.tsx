import React, { useEffect, useState } from "react"
import Image from "next/image";
import { getOffenders } from "@/utils";
import { error } from "console";

const Offenders: React.FC<{}> = () => {
  const [offenders, setData] = useState<any[]>([]);

  useEffect(() => {
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
    <div className="flex flex-col justify-between items-start">

      {offenders.map((off) => (
        <div className="flex flex-1 w-full flex-row py-6 rounded-lg shadow-sm shadow-white">
          <Image src='/blank_face.png' height={400} width={400} alt="picture" className="object-contain" />
          <div className="flex flex-1 flex-col justify-bewteen items-start">
            <p className="hero__text ml-4" key={off.name}>{off.name}
            <span className="text-white text-xl ml-4">{off.sex ? off.sex : "N/A"} {off.age ? off.age : "N/A"}</span></p>
            <p className="text-white text-xl ml-5">{off.city ? off.city : "N/A"}, {off.state ? off.state : "N/A"}</p>
            <p className="hero__text">{off.crime ? off.crime : "N/A"}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Offenders;