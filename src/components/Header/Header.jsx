import './header.scss';
import logo from '../../images/logo.png'
export const Header = ({isHeader}) =>{
    const classHeader = isHeader ? 'move' : 'static'
return(
   <header className={'header center ' + classHeader}>
    <div className='beetween max1170'>
    <img className='logo' src={logo}/>
    <nav className='c-nav beetween'>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <a className='link' id='home'>Home</a>
        <button className='download'>Download</button>
    </nav>
    </div>
   </header>
)
}