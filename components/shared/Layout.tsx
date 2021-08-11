import React, { ImgHTMLAttributes } from "react";
import Menu from "./Menu";
import Image from "next/image";
import logo from "../../public/fam-logo.png";
import avatarAdmin from "../../public/avatar_admin.jpeg";
import styles from '../../styles/Home.module.scss';


const Layout: React.FC<{title: string }> = ({children, title}) => (
    
        <div className={styles.main_div}>
            <div className={styles.topNavContainer}> 
                <div className={styles.topNav}>
                    <div className={`container ${styles.logo_container}`}>
                        <div className={`row col-xs-10 ${styles.logo_div}`} >
                            <div className={`${styles.logo_position}`}>
                                <Image  
                                    src={ logo } 
                                    width={ 100 } 
                                    height={ 50 }  
                                    alt="fam logo"
                                />
                            </div>
                            <div className={` ${styles.search_icon}`} >
                                <input placeholder="Search here..." />
                                <span className={styles.search_icon_span}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7772 16.6935L15.2112 13.1275C15.0503 12.9665 14.8321 12.8771 14.6032 12.8771H14.0202C15.0074 11.6145 15.5939 10.0265 15.5939 8.29892C15.5939 4.18929 12.264 0.859375 8.15439 0.859375C4.04476 0.859375 0.714844 4.18929 0.714844 8.29892C0.714844 12.4086 4.04476 15.7385 8.15439 15.7385C9.88194 15.7385 11.47 15.1519 12.7326 14.1647V14.7477C12.7326 14.9766 12.822 15.1948 12.9829 15.3558L16.5489 18.9217C16.8851 19.2579 17.4288 19.2579 17.7614 18.9217L18.7736 17.9095C19.1098 17.5733 19.1098 17.0297 18.7772 16.6935ZM8.15439 12.8771C5.62566 12.8771 3.57621 10.8312 3.57621 8.29892C3.57621 5.77019 5.62208 3.72074 8.15439 3.72074C10.6831 3.72074 12.7326 5.76661 12.7326 8.29892C12.7326 10.8277 10.6867 12.8771 8.15439 12.8771Z" fill="black" />
                                </svg></span>
                            </div>
                        </div>
                        <div className={`row col-xs-2 ${styles.admin_avatar}`}>
                            <Image 
                                src={ avatarAdmin }
                                width={ 50 }
                                alt="Logged in Admin"
                            />
                            <span className={`${styles.live_icon} badge`}>0</span>
                            <span className={`${styles.live_icon_name}`}>Jachrix</span>
                            <small><span className={`${styles.live_admin_name}`}>Admin</span></small>
                        </div>
                               
                    </div>   
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <div className={styles.leftNav} >
                <Menu/>
            </div>            
        </div>
    
);


export default Layout;