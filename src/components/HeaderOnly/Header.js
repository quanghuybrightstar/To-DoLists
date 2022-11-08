import logo from '~/assets/logo.png'
import  './Header.css'

function Header() {
    return (
        <div className="App__header">
            <img src={logo} alt="" className='App__logo'/>
            <h1 className="header__title">Welcome to Todo App</h1>
        </div>
    )
}

export default Header;