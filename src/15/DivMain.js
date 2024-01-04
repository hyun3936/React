import { useRecoilValue } from "recoil"; 
import { divn } from "./DivAtoms" ;

import Div1 from "./Div1";

export default function DivMain() {
  const n = useRecoilValue(divn) ;
   
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-5/6 h-5/6 rounded-xl bg-green-600 p-10 flex flex-col justify-center items-center">
            <div className="text-xl text-white">Recoil DivMain n={n}</div>
            <Div1 />             
        </div>
    </div>
  )
}
