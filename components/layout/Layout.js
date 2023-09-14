import React from "react";
import Link from "next/link";
import styles from "./Layout.module.css"


const Layout = ({children}) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <Link href="/">
                    <h2>BOTOCAR</h2>
                    <p>Choose and Buy your car now!</p>
                </Link>
            </header>


            <div className={styles.container}>
                {children}
            </div>

            <footer className={styles.footer}>
                <a href="https://botostart.ir" target="_blank" rel="noreferrer">
                    Botostart
                </a> {" "}
                Nextjs course | BotoCar Project &copy;
            </footer>
        </React.Fragment>
    )
}
export  default Layout