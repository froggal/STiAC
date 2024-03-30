import Styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <main>
        <nav className={Styles.nav}>
            <p>
                <img src="/Logo.png" alt="STiAC의 로고" width="150px" height="150px" />
            </p>
        </nav>
        </main>
    )
}

export default Navbar