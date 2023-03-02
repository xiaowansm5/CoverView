import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
const Header = () => {

    const     tweetText = encodeURIComponent(`type your thoughts here, Try https://coverview.vercel.app by @WankhadeRutik`)

    return ( 
        
            <div className="text-xl md:px-2 flex  border-b border-gray-100 p-2">
					<Link to="/" className="flex items-center">
						<img src={logo} alt="logo" className="w-8 h-8 mx-4" />
						<h1 className="font-semibold">封面图</h1>

					</Link>

					<div className="ml-auto md:mr-4 ">
						<Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4"><span className="hidden md:inline-block">如何使用</span></Link>
						<a href="https://wwang.eu.org/" target="_blank" rel="noreferrer" className="text-base mx-2 font-Nunito"> <span className="hidden md:inline-block">博客</span></a>
				
					</div>

				</div>
    
     );
}
 
export default Header;