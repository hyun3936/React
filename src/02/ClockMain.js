import Logoimg from "../01/LogoImg";
import {useState} from "react";


function ClockMain() {
    const [ctime, setCtime] = useState(new Date().toLocaleDateString()) ;

    
   // let ctime = new Date().toLocaleDateString() ; 

    setInterval(() => {
       setCtime(new Date().toLocaleDateString()) ;  // 그냥 ctime이 아니라 setCtime으로 가능, 그래야 ctime이 바뀜.
    }, 1000);
    // 1초에 한번씩


    return(
        // <main className='App-header'>
        <main>
            <Logoimg/>
            <div>현재시간 : {ctime} </div>
        </main>
    );
}

export default ClockMain;