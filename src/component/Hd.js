import React, { useState } from 'react';
import hdscss from './scss/mhs.module.scss'

import logo from '../img/hdLogo.svg'
import search from '../img/hdSearch.svg'
import login from '../img/hdLogin.svg'
import close from '../img/hdClose.svg'

import Hdnavi from './mhs/Hdnavi'
import Hdpopular from './mhs/Hdpopular';


function Hd() {
    const [ showdiv, setShowdiv] = useState(false);

    return (
        <>
          <header className={`${hdscss.hd} fixed-top bg-white`}>
                <div className="container-1824 d-flex justify-content-between align-items-center">
                    <h1><a href="/"><img src={logo} alt=""/></a></h1>
                    <ul className={`${hdscss.gnb} d-flex ps-0 mb-0`}>
                        <Hdnavi />
                    </ul>
                    <ul className={`${hdscss.utill} d-flex justify-content-end position-relative mb-0`}>
                        <li className={`${hdscss.searchLi} position-relative`}>
                            <img src={search} alt="검색" onClick={()=>{
                                setShowdiv(!showdiv)
                            }} />
                            <span className="visually-hidden">검색</span>
                        { showdiv &&  <div className={hdscss.searchMenu}>
                                            <div className={`${hdscss.dropdownbox} m-0`}>
                                                <div className="text-end pb-1">
                                                    <img className={`${hdscss.searchimg} pe-3`} src={search} alt="검색" />
                                                    <input type="text" className={hdscss.searchinput}  onClick={() => setShowdiv(false)} />
                                                    <button className={`${hdscss.searchbt} pe-1`} onClick={() => setShowdiv(false)}><img src={close} alt="닫기" /></button>

                                                </div>
                                                <p className={`${hdscss.searchPopular} pt-2 mb-1 text-black-50`}>실시간인기</p>
                                                <div className={`${hdscss.searchTop10} d-flex`}>
                                                    <div>
                                                    <Hdpopular />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                         }
                        </li>
                        <li className="ms-4">
                            <img src={login} alt="로그인" />
                            <span className="visually-hidden">로그인</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Hd

