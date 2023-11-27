import style from './Like.module.css';
import { useState, useEffect } from 'react';

export default function Like() {
    const [cnt, setCnt] = useState(0);


    const handleUp = () => {
        setCnt(cnt + 1);
        console.log('UP', cnt);
    }

    const handleDown = () => {
        if (cnt != 0) setCnt(cnt - 1);
        console.log('DOWN', cnt);
    }

    // 맨 처음 컴포넌트 생성시 한번만 실행
    useEffect(()=>{
        console.log("Like 생성")
    }, []);

    // state 변수에 의해 컴포넌트가 업데이트 될떄 실행
    useEffect(()=>{
        console.log("Like 업데이트", cnt)
    }, [cnt]);


    return (
        <div className={style.likediv}>
            <span onClick={handleUp}>😊👍</span>
            <span>{cnt}</span>
            <span onClick={handleDown}>😡👎</span>
        </div>
    )
}