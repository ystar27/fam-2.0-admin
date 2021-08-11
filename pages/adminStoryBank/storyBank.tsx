import * as React from 'react';
import Layout from "../../components/shared/Layout";
import Stories from "../../components/StoryBank";
import styles from '../../styles/Home.module.scss';
//import style from '../../styles/UserAdminMgt.module.scss';


const StoryBank = () => {
    return (
        <div className={styles.container}>
            <Layout title="Admin Participants">
                <Stories/>
            </Layout>
        </div>
    )
}

export default StoryBank;
