import React from "react";
import Layout from "../../components/shared/Layout";
import Participant from "../../components/Participants";
import styles from '../../styles/Home.module.scss';



const Participants = () => {
    return (
        
            <div className={styles.container}>
                <Layout title="Admin Participants">
                    <Participant />
                </Layout>
            </div>
        
    )
}

export default Participants;