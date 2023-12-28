import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";

export default function Ex01() {
    const arr = ['안녕하세요', '반갑습니다', '추워요'] ;
    const arrColor = ['blue', 'orange', 'green'];
    const [tagMsg, setTagMsg] = useState(arr[2]);
    const inRef = useRef();

    //let tagMsg = '안녕하세요.' ;

    const tagArr = arr.map( (item, idx) => 
            <MyButton key={`mb${idx}`} 
                    caption={item} 
                    bcolor={arrColor[idx]}
                    handleOnClick={ ()=>handleClick(item)}/>
                    
    ); // 배열의 갯수만큼 돌기위해 map을 사용



    const handleClick = (msg) => {
        //alert(msg);
        inRef.current.value === ' ' ? setTagMsg(msg)
                                    :setTagMsg(`${inRef.current.value}님 ${msg}`);
       
    }

   useEffect( ()=>{
    console.log("tagMsg", tagMsg)
   }, [tagMsg]);

    return (
    <div>
        <div className="container mx-auto px-4">
            <h1 className="bg-slate-200 h-10
                             flex justify-center items-center
                             text-2xl m-5 p-5">리액트</h1>
        </div> 
        <div className="flex justify-center items-center mx-5">
            <div>
                <form>
                    <input type="text"
                            ref={inRef}
                            placeholder="이름입력"/>
                </form>

            </div>
            {tagArr}
        </div>
        <div className="h-20
                        flex justify-center items-center
                        text-2xl m-5 p-5">
        {tagMsg}
        </div>
    </div>
    )
}

