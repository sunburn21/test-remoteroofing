import React from 'react';
import facebook from '../../assets/facebook-white.svg';
import twitter from '../../assets/twitter-white.svg';
import instagram from '../../assets/instagram-white.svg';
import appleAppStore from '../../assets/app-store.svg';
import playStore from '../../assets/play-store.svg';
import windowsStore from '../../assets/windows-store.svg';


export default ()=>{
    return(
        <div className="footer">
            <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Collection Statement</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Manage Account</a></li>
            </ul>
            
            <p className="copyright">Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
            
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
                        <li><img src={windowsStore} alt="windows store"></img></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}