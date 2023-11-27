import style from './Lotto.module.css';
import { useState } from 'react';

export default function Lotto() {
    const [tags, setTags] = useState();

    const handleClick = (e) => {
        e.preventDefault();

        let arr = [];
        while (arr.length < 7){
            let n = Math.floor(Math.random()*45) + 1 ; // 1~45
            if (!arr.includes(n)) arr.push(n);
        }

        let tempTags ;

        tempTags = arr.map( (item, idx) =>   // tags가 배열, 맵을돌아서 7개만듦
          // parseInt로 숫자로 바꿈  //몫을 구함
          // 한줄이면 중괄호 없애고 return도 없앨 수 있음. 세미콜론도.
          // 몫으로 구한 변수를 여기 사용
            // 여긴 if문을 못쓰기 떄문에 대신 삼항연산 사용


            idx == 5 
            ? <>
            <span key = {`sp${idx}`} className={style.sp1}>
            {item}
            </span> 
            <span className = 'sp' id='spp'> + </span>
            </>
            : <span className='sp' id = {`sp${Math.floor(parseInt(item) / 10)}`}>
            {item}
            </span>
            )



        // idx == 5 
        // ? <>
        // <span className='sp' id ={`ssp${Math.floor(parseInt(item) / 10)}`}>
        // {item}
        // </span> 
        // <span className = 'sp' id='spp'> + </span>
        // </>
        // : <span className='sp' id = {`sp${Math.floor(parseInt(item) / 10)}`}>
        // {item}
        // </span>
        // )

        
        


        setTags(tempTags);
    }
    return (
        <main className={style.m}>
            <section className={style.sec}>
                <form className={style.fm}>
                    <div className={style.fdiv}>
                        <div className={style.div1} id='d1'>
                            {tags}
                        </div>
                    </div>
                    <div className={style.fdiv}>
                        <div className={style.div1} id='d2'>
                            <button className={style.bt} onClick={handleClick}>로또번호생성</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}