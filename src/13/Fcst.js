import TailButton from "../UI/TailButton"
import TailH1 from "../UI/TailH1"
import TailSelect from "../UI/TailSelect"
import { useEffect, useState , useRef} from "react";

export default function Fcst() {
  const rfDt = useRef();
  const [yesterday, setYesterday] = useState();
  const [boxlist, setBoxlist] = useState();

  const handleChange = (e) => {
    console.log(e.target.value)
  }





  return (
    <div className="container mx-auto px-4 h-screen">   
      {/* <h1 className="text-3xl font-bold"> 단기예보 선택 </h1> */}
      <TailH1 title={"단기예보 선택"}/>
      <div>

      <div className="flex m-8">
          {/* <label htmlFor = "dt"
              className="inline-flex justify-center items-center text-lg mx-1 px-2"
          >
            날짜선택</label>      */}
          <input type ='date'  id = 'dt'
                 onChange = {handleChange}
          />
        </div>
      </div>    
    </div>
  )
}
