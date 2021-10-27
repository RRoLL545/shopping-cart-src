import React from 'react';
import NavBar from './NavBar';
import instagramLogo from '../assets/svg/instagram-icon.svg';
import telegramLogo from '../assets/img/t-icon.png';
import vkLogo from '../assets/img/vk-icon.png';
import youTubeLogo from '../assets/svg/you-tube-icon.svg';


/** 
 * Returns DOM element Footer
 * @return {*} DOM element
*/
export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="optimax-logo"></div>
        <NavBar additionalClassName={"navigation-bar-footer"}/>
        <div className="social-links">
          <ul className="social-links-list">
            <li className="social-link-item">
              <a href="https://vk.com/optimaxdev" target="_blank" className="social-link" rel="noreferrer">
                <img src={vkLogo} alt="vk" className="social-link-img"/>
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://www.instagram.com/optimax.dev/?hl=ru" target="_blank" className="social-link" rel="noreferrer">
                <img src={instagramLogo} alt="inst" className="social-link-img"/>
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://t.me/optimaxdev" target="_blank" className="social-link" rel="noreferrer">
                <img src={telegramLogo} alt="t" className="social-link-img"/>
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://youtube.com/channel/UCnqxm7TbY_fSzDN-oOF9FiA" target="_blank" className="social-link" rel="noreferrer">
                <img src={youTubeLogo} alt="y" className="social-link-img"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr"/>
      <div className="bottom-footer">
        <div className="bottom-footer_date">© 2021</div>
        <div className="bottom-footer_company">For OPTIMAX Development</div>
        <a href="https://github.com/RRoLL545" className="bottom-footer_github-link" target="_blank" rel="noreferrer"></a>
      </div>
    </footer>
  )
}

//TODO modify link to the project src repository