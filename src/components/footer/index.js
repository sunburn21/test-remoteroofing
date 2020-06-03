// importing libraries
import React from 'react';

// importing the paths of all required images and logos
import facebook from '../../assets/facebook-white.svg';
import twitter from '../../assets/twitter-white.svg';
import instagram from '../../assets/instagram-white.svg';
import appleAppStore from '../../assets/app-store.svg';
import playStore from '../../assets/play-store.svg';
import windowsStore from '../../assets/windows-store.svg';

// importing css 
import './index.css'


// implemented footer
export default ()=>{
    return(
        <div className="footer">
            <ul className="footer-links">
                <li>Home</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Collection Statement</li>
                <li>Help</li>
                <li>Manage Account</li>
            </ul>
            <p className="copyright">Copyright &copy; 2020 DEMO Streaming. All Rights Reserved.</p>
            
            <div className="flex-grid">
                <div className="col social">
                    <ul>
                        <li><img src={facebook} alt="facebook"></img></li>
                        <li><img src={twitter} alt="twitter"></img></li>
                        <li><img src={instagram} alt="instagram"></img></li>
                    </ul>
                </div>
                <div className="col app-stores">
                    <ul>
                        <li><img src={appleAppStore} alt="app store"></img></li>
                        <li><img src={playStore} alt="play store"></img></li>
                        <li><img src={windowsStore} className='microsoft-store' alt="windows store"></img></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}