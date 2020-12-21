
import { useState } from "react";
import styled from "styled-components";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <S.Swrapper>
        { portionNumber > 1 &&
        <button className='paginator-pages-prev' onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <button className='paginator-pages-button'
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</button>
            })}
        { portionCount > portionNumber &&
            <button  className='paginator-pages-next' onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </S.Swrapper>
}

const S = {
    Swrapper: styled.div`
        .paginator-pages-button {
            cursor: pointer;
            text-decoration: none;
            outline: none;
            color: black;
            display: inline-block;
            position: relative;
            border: 1px solid;
            border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
            border-image-slice: 1;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            overflow: hidden;
            letter-spacing: 2px;
            transition: .8s cubic-bezier(.165,.84,.44,1);
        }
        .paginator-pages-button:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 0;
            width: 100%;
            z-index: -1;
            color: white;
            background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
            transition: .8s cubic-bezier(.165,.84,.44,1);
            }
        .paginator-pages-button:hover {background: rgba(255,255,255,0);}
        .paginator-pages-button:hover:before {
        bottom: 0%;
        top: auto;
        height: 100%;
        }

        .paginator-pages-prev,
        .paginator-pages-next {
            cursor: pointer;
            text-decoration: none;
            outline: none;
            display: inline-block;
            margin: 10px 10px;
            border-radius: 10px;
            box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            letter-spacing: 2px;
            color: white;
            transition: .15s ease-in-out;
        }
        .paginator-pages-prev:hover,
        .paginator-pages-next:hover {
            box-shadow: 0 0 10px 0 #F137A6 inset, 0 0 10px 4px #F137A6;
            color: #F137A6;
}
    `
}


export default Paginator;