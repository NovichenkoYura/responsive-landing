import './header.scss';
import logo from '../../images/logo.png'
export const Header = ({isHeader}) =>{
    const classHeader = isHeader ? 'move' : 'static'
return(
   <header className={'header center ' + classHeader}>
    <div className='between max1170'>
    <img className='logo' src={logo}/>
    <nav className='c-nav between'>
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