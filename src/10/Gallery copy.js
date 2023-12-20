import TailH1 from '../UI/TailH1';
import TailButton from '../UI/TailButton';
import TailCard from '../UI/TailCard';
import { FcPicture } from "react-icons/fc";
import { useState, useEffect, useRef } from 'react';

export default function Gallery() {
 //키워드 입력
 const kwInput = useRef();


  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'한국관광공사 사진정보'} />
          <FcPicture className='text-4xl mx-5' />
        </div>
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            {/* <input type="text" ref={kwInput} id="txt1" className="shadow-sm 
                                                   bg-gray-50 border border-gray-300
                                                   text-gray-900 text-sm rounded-lg
                                                   focus:ring-blue-500 focus:border-blue-500 
                                                   block w-full p-2.5"
              onKeyDown={handleEnter}
              placeholder="키워드입력" required /> */}
          </div>
          {/* <TailButton caption=' 확 인 ' bcolor='sky' handleClick={(e) => handleGetData(e)} />
          <TailButton caption=' 취 소 ' bcolor='sky' handleClick={(e) => handleResetData(e)} /> */}
        </form>
        <div>
         
        </div>
      </div>

    </div>
  )
}