import { FcPicture } from "react-icons/fc";
import TailH1 from "../UI/TailH1";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from 'react';
import TailCard from "../UI/TailCard";

export default function Gallery() {

    //환경변수값 가져오기
    let apikey = process.env.REACT_APP_APIKEY;

    //fetch 데이터 저장
    const [tdata, setTdata] = useState([]);


    // 키워드 입력
    const kwInput = useRef();

    const handleGetData = async (e) => {
        if (e.key !== "Enter") e.preventDefault();

        // 키워드 인코딩
        let enkw = encodeURI(kwInput.current.value);
        if (enkw === '') {
            alert('키워드를 입력하세요');
            kwInput.current.focus();
            return;
        }

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = `${url}serviceKey=${apikey}`;
        url = url + `&numOfRows=10`;
        url = url + `&pageNo=1`;
        url = url + `&MobileOS=ETC`;
        url = url + `&MobileApp=AppTest`;
        url = url + `&arrange=A`;
        url = url + `&keyword=${enkw}`;
        url = url + `&_type=json`;
        //console.log(url);

        const resp = await fetch(url);
        const data = await resp.json();

        //console.log(data.response.body.items.item)
        setTdata(data.response.body.items.item);

    }

    const handleResetData = (e) => {
        e.preventDefault();
        kwInput.current.value = '';
    }

    const handleEnter = (e) => {
        e.preventDefault();
        kwInput.current.value = '';
    }

    // tdata변경
    useEffect(() => {
        console.log("tdata= ", tdata)
    }, [tdata]);


    return (

        <div className='container mx-auto h-screen'>
            <div className='flex flex-col justify-top items-center w-full h-full my-8'>
                <div className="flex">
                    <TailH1 title={'한국관광공사 사진정보'} />
                    <FcPicture className='text-3xl' mx-5 />
                </div>

                <form>
                    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input ref={kwInput} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                        <button type="button" onClick={handleGetData} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                    <TailButton caption=' 확 인 ' bcolor='sky' handleClick={(e) => handleGetData(e)} />
                    <TailButton caption=' 취 소 ' bcolor='sky' handleClick={(e) => handleResetData(e)} />
                </form>
            </div>
            <div>
                <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/61/2952361.jpg"}
                    title={"광안리해수욕장"}
                    subtitle={"부산광역시 수영구 망미동"}
                    tags={"광안리해수욕장, 부산광역시 수영구, 광안리 해변, 바닷가, 바다, 부산"} />
            </div>
        </div>
    )
}
