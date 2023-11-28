import style from './Lotto.module.css';
import { useState, useEffect } from 'react';

export default function Lotto() {
    // let tags = 'Lotto번호 생성기'
    const [tags, setTags] = useState("Lotto번호 생성기")

    const handleClick = () => {
        console.log("handleClick")
        // tags = Math.floor(Math.random()*45) + 1;
        let lottoNum = [];

        while (lottoNum.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;


            if (!lottoNum.includes(n)) lottoNum.push(n);
        }


        

        // + 추가
        lottoNum.splice(6, 0, '+'); // 배열 추가 6시작, 제거0, +추가
        console.log("handleClick", lottoNum)

        let tmTags = lottoNum.map((item, idx) =>
        (item === '+')
        ? <span key={`sp${idx}`} className = {style.spp}>{item}</span>
        : <span key={`sp${idx}`}className = {style[`sp${Math.floor(item/10)}`]}>
            {item}
            </span>
        )

        console.log(tmTags);


        setTags(tmTags)
    }


    useEffect(() => {
        setTags("로또번호생성기");
    }, []);


    useEffect(() => {
       // console.log(tags);
    }, [tags]); // 변경이 일어났을떄 자동으로


    return (
        <div className={style.divLotto}>
            <div className={style.d1}>
                <p className={style.divp}>{tags}</p>
            </div>
            <div>
                <button className={style.bt} onClick={() => handleClick()}>로또번호생성</button>
            </div>
        </div>
    )
}
