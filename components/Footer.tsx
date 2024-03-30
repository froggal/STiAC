import Styles from './Footer.module.css';

const Footer = () => {
    return (
      <main>
        <p className={Styles.footer}>
          STiAC - Study Timer Accuracy <br /> Copyright 2024 KeyFrog All rights
          reserved. <br /> sp.keyfrog@gmail.com
        </p>
      </main>
    );
}

export default Footer