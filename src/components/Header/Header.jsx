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
        <img className='logo' src={logo} alt='logo'/>
        <div onClick={()=>setBuregr(!isBurger) } className='header-burger-menu flexColumnJustifyBetween'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <nav className={'c-nav between ' + burger}>
        <a className='link' href='#hero'>Home</a>
        <a className='link' href='#about'>About</a>
        <a className='link' href='#features'>Features</a>
        <a className='link' href='#pricing'>Pricing</a>
        <a className='link' href='#client'>Client</a>
        <a className='link' href='#team'>Team</a>
        <a className='link' href='#contact'>Contact</a>
        <button className='download' type='button'>Download</button>
    </nav>
    </div>
   </header>
)
}