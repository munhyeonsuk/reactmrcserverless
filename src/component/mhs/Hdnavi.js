import React from 'react';
import{ Link } from 'react-router-dom'
import hdnaviData from '../../json/hdnavi.json';
import hdscss from '../scss/mhs.module.scss';

const Hdnavi = () => {
  return (
    <>
      {hdnaviData.map((item, index) => (
        <li key={index} className= {`${hdscss.gnb_li} px-5 position-relative py-3`} >
           <Link to={item.link.href} className={hdscss.gnb_a}>
            {item.link.text}
          </Link>
          <ul className={`${hdscss.gnb_li_ul} position-absolute ps-0 pt-2`}>
            {item.submenu.items.map((submenuItem, subIndex) => (
              <li key={subIndex}>
                <Link to={submenuItem.href}>{submenuItem.text}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default Hdnavi;
