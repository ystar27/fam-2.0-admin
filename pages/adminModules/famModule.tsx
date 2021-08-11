import * as React from 'react';
import Layout from "../../components/shared/Layout";
import FAMModule from "../../components/FamModule";
import styles from '../../styles/Home.module.scss';


const FamModule = () => {
    return (
        <div className={styles.container}>
            <Layout title="Admin Participants">
                <FAMModule />
            </Layout>
        </div>
    )
}

export default FamModule;
