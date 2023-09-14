import React from 'react';
import Link from "next/link";
import styles from "./Categories.module.css";

function Categories() {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/categories/sedan"><p>Sedan</p></Link>

            </div>
            <div>
                <Link href="/categories/suv"><p>Suv</p></Link>

            </div>
            <div>
                <Link href="/categories/hatchback"><p>Hatchback</p></Link>

            </div>
            <div>
                <Link href="/categories/Sport"><p>Sport</p></Link>
            </div>
        </div>
    );
}

export default Categories;