import Styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <main>
        <nav className={Styles.nav}>
            <p>
                <img src="/Logo.png" alt="STiAC의 로고" width="180px" height="180px" />
            </p>
        </nav>
        </main>
    )
}

export default Navbar