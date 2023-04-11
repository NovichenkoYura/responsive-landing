import './header.scss';
import logo from '../../images/logo.png'
import { useState } from 'react';
export const Header = ({isHeader}) =>{
    const [isBurger, setBuregr] = useState(false)
    const burger = isBurger ? 'open' : 'close'
    const classHeader = isHeader ? 'move' : 'static';
return(
   <header className={'header center ' + classHeader}>
    <div className='between max1170 header-content'>
    <div className='header-c-logo-burger flexJustifyEvenly'>
        <img className='logo' src={logo}/>
        <div onClick={()=>setBuregr(!isBurger) } className='header-burger-menu flexColumnJustifyBetween'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <nav className={'c-nav between ' + burger}>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>About</a>
        <a className='link' id='home'>Features</a>
        <a className='link' id='home'>Pricing</a>
        <a className='link' id='home'>Client</a>
        <a className='link' id='home'>Team</a>
        <a className='link' id='home'>Contact</a>
        <button className='download'>Download</button>
    </nav>
    </div>
   </header>
)
}