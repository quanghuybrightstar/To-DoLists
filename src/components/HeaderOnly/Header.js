import classNames from 'classnames/bind';
import logo from '~/assets/logo.png'
import style from './Header.module.scss'

const cx = classNames.bind(style);

function Header() {
    return (
        <div className = {cx('App__header')}>
            <img src={logo} alt="" className={cx('App__logo')}/>
            <h1 className = {cx('header__title')}>Welcome to Todo App</h1>
        </div>
    )
}

export default Header;