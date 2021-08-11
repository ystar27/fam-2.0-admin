import React from "react";
import styles from '../styles/Home.module.scss';


const Dashboard = () => {
    
    return (
        <React.Fragment>
            <div className={ styles.admin_dashboard_container}>
                <div className={ styles.admin_welcome_msg}>
                    <h3>Welcome Admin</h3>
                    <span>Dashboard - </span><span>Overview</span>
                </div>
                <div className={ styles.main_dashboard_control}>
                    <div className={ styles.dashboard_control}>
                        <div className={ styles.dashboard_box_1}>
                            <div className={ styles.dash_story_img}>
                                <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M42.6876 0.632812H6.18703C3.31912 0.632812 0.972656 3.14158 0.972656 6.20785V25.7205C0.972656 28.7868 3.31912 31.2955 6.18703 31.2955H42.6876C45.5555 31.2955 47.902 28.7868 47.902 25.7205V6.20785C47.902 3.14158 45.5555 0.632812 42.6876 0.632812ZM6.18693 20.1465H14.3474C14.8949 22.3207 16.0942 24.2441 17.6585 25.7215H6.18693V20.1465ZM31.2155 25.7215H42.6871V20.1465H34.5266C33.9791 22.3207 32.7798 24.2441 31.2155 25.7215ZM42.6875 14.5715H29.6516V17.3591C29.6516 20.3417 27.2269 22.9341 24.4372 22.9341C21.6475 22.9341 19.2229 20.3417 19.2229 17.3591V14.5715H6.18693V6.20898H42.6875V14.5715ZM29.6517 34.0837H37.4732H47.902V45.2337C47.902 48.3 45.5555 50.8088 42.6876 50.8088H6.18703C3.31912 50.8088 0.972656 48.3 0.972656 45.2337V34.0837H19.2229V36.8712C19.2229 38.1813 19.7183 39.3799 20.4744 40.3556C21.4391 41.61 22.873 42.4462 24.4373 42.4462C26.0016 42.4462 27.4356 41.61 28.4002 40.3556C29.1563 39.3799 29.6517 38.1813 29.6517 36.8712V34.0837ZM6.18693 39.6582H14.3474C14.3843 39.8355 14.4472 39.999 14.5085 40.1583L14.5085 40.1583C14.534 40.2244 14.5591 40.2897 14.5821 40.3551C15.2078 42.2506 16.2767 43.9231 17.6585 45.2332H6.18693V39.6582ZM31.2155 45.2332H42.6871V39.6582H34.5266C34.4898 39.8355 34.4269 39.9989 34.3655 40.1583C34.3401 40.2243 34.3149 40.2897 34.292 40.3551C33.6923 42.2506 32.6234 43.9231 31.2155 45.2332Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Stories</div>
                                    <div className={ styles.dash_subDiv_1_score}>58</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Questions</div>
                                    <div className={ styles.dash_subDiv_2_score}>305</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_2}>
                            <div className={ styles.dash_season_img}>
                                <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.83664 0.632812L0.394531 4.07492L12.6006 16.2566C8.54818 16.2566 5.27696 19.5278 5.27696 23.5802V38.2275H15.0418V47.9923H44.3364L51.5379 55.2183L54.98 51.7762L3.83664 0.632812Z" fill="white"/>
                                <path d="M15.0426 33.3467H10.1602V23.5818C10.1602 22.2392 11.2587 21.1406 12.6014 21.1406H17.4838L24.8074 28.4643H15.0426V33.3467Z" fill="white"/>
                                <path d="M19.9258 43.1125V33.3477H29.6906L39.4555 43.1125H19.9258Z" fill="white"/>
                                <path d="M19.9215 8.93321H39.4512V16.2568H26.4151L31.2975 21.1393H46.7748C48.1175 21.1393 49.216 22.2378 49.216 23.5805V33.3453L44.3336 33.3697V28.4629H38.6212L48.386 38.2278H54.0985V23.5805C54.0985 19.5281 50.8272 16.2568 46.7748 16.2568H44.3336V4.05078H15.0391V4.92962L19.9215 9.81204V8.93321Z" fill="white"/>
                                <path d="M44.3397 22.3828C42.9914 22.3828 41.8984 23.4758 41.8984 24.824C41.8984 26.1723 42.9914 27.2652 44.3397 27.2652C45.6879 27.2652 46.7809 26.1723 46.7809 24.824C46.7809 23.4758 45.6879 22.3828 44.3397 22.3828Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Seasons</div>
                                    <div className={ styles.dash_subDiv_1_score}>5</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Ended</div>
                                    <div className={ styles.dash_subDiv_2_score}>3</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_3}>
                            <div className={ styles.dash_participant_img}>
                                <svg width="69" height="44" viewBox="0 0 69 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ddd)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M34.44 18.1729C39.2761 18.1729 43.2101 14.2389 43.2101 9.40286C43.2101 4.56681 39.2761 0.632812 34.44 0.632812C29.604 0.632812 25.67 4.56681 25.67 9.40286C25.67 14.2389 29.604 18.1729 34.44 18.1729ZM16.8997 25.6904V18.1732H24.4169V13.1617H16.8997V5.64455H11.8883V13.1617H4.37109V18.1732H11.8883V25.6904H16.8997ZM34.4405 22.5577C28.5771 22.5577 16.9004 25.4894 16.9004 31.3277V35.7127H51.9806V31.3277C51.9806 25.4894 40.3039 22.5577 34.4405 22.5577ZM34.4385 27.5694C29.9532 27.5694 24.8666 29.2482 22.7618 30.7016H46.1152C44.0103 29.2482 38.9237 27.5694 34.4385 27.5694ZM38.1989 9.40314C38.1989 7.32338 36.5201 5.64455 34.4403 5.64455C32.3606 5.64455 30.6817 7.32338 30.6817 9.40314C30.6817 11.4829 32.3606 13.1617 34.4403 13.1617C36.5201 13.1617 38.1989 11.4829 38.1989 9.40314ZM46.968 18.1729C51.804 18.1729 55.738 14.2389 55.738 9.40286C55.738 4.56681 51.804 0.632812 46.968 0.632812C46.3666 0.632812 45.7652 0.682927 45.1889 0.808213C47.0933 3.1636 48.2208 6.14541 48.2208 9.40286C48.2208 12.6603 47.0431 15.6171 45.1388 17.9725C45.7402 18.0977 46.3415 18.1729 46.968 18.1729ZM56.993 31.327C56.993 27.9192 55.2891 25.2631 52.7833 23.2335C58.3962 24.4112 64.5101 27.0923 64.5101 31.327V35.712H56.993V31.327Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_ddd" x="0.371094" y="0.632812" width="68.139" height="43.0799" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Participants</div>
                                    <div className={ styles.dash_subDiv_1_score}>20222</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Project Done</div>
                                    <div className={ styles.dash_subDiv_2_score}>28</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_4}>
                            <div className={ styles.dash_mentor_img}>
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.147 0.277344C9.84472 0.277344 0.671875 9.45019 0.671875 20.7524C0.671875 32.0547 9.84472 41.2275 21.147 41.2275C32.4492 41.2275 41.6221 32.0547 41.6221 20.7524C41.6221 9.45019 32.4492 0.277344 21.147 0.277344ZM11.0524 33.6099C11.9329 31.7672 17.2973 29.9654 21.1467 29.9654C24.996 29.9654 30.3809 31.7672 31.2409 33.6099C28.4563 35.8212 24.955 37.1316 21.1467 37.1316C17.3383 37.1316 13.8371 35.8212 11.0524 33.6099ZM21.1477 25.8704C24.1371 25.8704 31.2419 27.0784 34.1699 30.6411C36.2583 27.8974 37.5278 24.4781 37.5278 20.7516C37.5278 11.7221 30.1772 4.37155 21.1477 4.37155C12.1182 4.37155 4.76763 11.7221 4.76763 20.7516C4.76763 24.4781 6.03709 27.8974 8.12555 30.6411C11.0535 27.0784 18.1583 25.8704 21.1477 25.8704ZM21.1478 8.46653C17.1756 8.46653 13.9815 11.6606 13.9815 15.6328C13.9815 19.605 17.1756 22.7991 21.1478 22.7991C25.12 22.7991 28.3141 19.605 28.3141 15.6328C28.3141 11.6606 25.12 8.46653 21.1478 8.46653ZM18.0757 15.6328C18.0757 17.3322 19.4476 18.704 21.147 18.704C22.8464 18.704 24.2183 17.3322 24.2183 15.6328C24.2183 13.9333 22.8464 12.5615 21.147 12.5615C19.4476 12.5615 18.0757 13.9333 18.0757 15.6328Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Mentors</div>
                                    <div className={ styles.dash_subDiv_1_score}>7</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Questions</div>
                                    <div className={ styles.dash_subDiv_2_score}>28</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={ styles.dashboard_control}>
                        <div className={ styles.dashboard_box_5}>
                            <div className={ styles.dash_modules_img}>
                                <svg width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M39.8212 9.51321H35.0835C35.3226 8.83951 35.4747 8.10061 35.4747 7.33998C35.4747 3.73243 32.5626 0.820312 28.955 0.820312C26.6732 0.820312 24.6955 1.99385 23.522 3.75416L22.4354 5.21023L21.3488 3.73243C20.1752 1.99385 18.1976 0.820312 15.9157 0.820312C12.3081 0.820312 9.39602 3.73243 9.39602 7.33998C9.39602 8.10061 9.54815 8.83951 9.7872 9.51321H5.04957C2.63729 9.51321 0.724857 11.4474 0.724857 13.8597L0.703125 37.7651C0.703125 40.1774 2.63729 42.1116 5.04957 42.1116H39.8212C42.2334 42.1116 44.1676 40.1774 44.1676 37.7651V13.8597C44.1676 11.4474 42.2334 9.51321 39.8212 9.51321ZM28.955 5.16676C30.1503 5.16676 31.1283 6.14471 31.1283 7.33998C31.1283 8.53526 30.1503 9.51321 28.955 9.51321C27.7598 9.51321 26.7818 8.53526 26.7818 7.33998C26.7818 6.14471 27.7598 5.16676 28.955 5.16676ZM18.0889 7.33998C18.0889 6.14471 17.111 5.16676 15.9157 5.16676C14.7204 5.16676 13.7425 6.14471 13.7425 7.33998C13.7425 8.53526 14.7204 9.51321 15.9157 9.51321C17.111 9.51321 18.0889 8.53526 18.0889 7.33998ZM5.04957 37.7651V33.4187H39.8212V37.7651H5.04957ZM5.04957 13.8605V26.8999H39.8212V13.8605H28.7812L33.3015 20.0107L29.7809 22.5534L22.4354 12.5566L15.0899 22.5534L11.5692 20.0107L16.0896 13.8605H5.04957Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Modules</div>
                                    <div className={ styles.dash_subDiv_1_score}>5</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Levels</div>
                                    <div className={ styles.dash_subDiv_2_score}>7</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_6}>
                            <div className={ styles.dash_forum_img}>
                                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.0191 0.246094H24.0547V14.4694H43.0191V0.246094Z" fill="white"/>
                                <path d="M19.316 0.246094H0.351562V23.9516H19.316V0.246094Z" fill="white"/>
                                <path d="M43.0191 19.2109H24.0547V42.9164H43.0191V19.2109Z" fill="white"/>
                                <path d="M19.316 28.6914H0.351562V42.9147H19.316V28.6914Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Forums</div>
                                    <div className={ styles.dash_subDiv_1_score}>5</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Topics</div>
                                    <div className={ styles.dash_subDiv_2_score}>7</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_7}>
                            <div className={ styles.dash_post_img}>
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.3987 9.18164C47.2609 8.31958 47.2609 6.92702 46.3987 6.06496L41.2259 0.892606C40.8128 0.478702 40.2521 0.246094 39.6674 0.246094C39.0826 0.246094 38.5219 0.478702 38.1089 0.892606L33.776 5.22501L42.0659 13.514L46.3987 9.18164ZM9.46049 29.5393L31.5669 7.43522L39.8568 15.7243L17.7504 37.8283H9.46049V29.5393ZM13.8791 33.4082H15.9129L33.598 15.7249L31.5642 13.6913L13.8791 31.3746V33.4082ZM53.6725 44.4585H0.617188V53.3002H53.6725V44.4585Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Posts</div>
                                    <div className={ styles.dash_subDiv_1_score}>6</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Number</div>
                                    <div className={ styles.dash_subDiv_2_score}>28</div>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.dashboard_box_8}>
                            <div className={ styles.dash_level_img}>
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M41.4735 0.246094H12.9671C10.7273 0.246094 8.89471 2.07865 8.89471 4.31845V32.8249C8.89471 35.0647 10.7273 36.8973 12.9671 36.8973H41.4735C43.7133 36.8973 45.5459 35.0647 45.5459 32.8249V4.31845C45.5459 2.07865 43.7133 0.246094 41.4735 0.246094ZM4.82235 8.3908H0.75V40.9696C0.75 43.2094 2.58256 45.042 4.82235 45.042H37.4012V40.9696H4.82235V8.3908ZM12.9671 32.8249H41.4735V4.31845H12.9671V32.8249Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.dash_main_subDiv}>
                                <div className={styles.dash_subDiv_1}>
                                    <div className={ styles.dash_subDiv_1_name}>Levels</div>
                                    <div className={ styles.dash_subDiv_1_score}>3</div>
                                </div>
                                <hr />
                                <div className={styles.dash_subDiv_2}>
                                    <div className={ styles.dash_subDiv_2_name}>Active</div>
                                    <div className={ styles.dash_subDiv_2_score}>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
    
}

export default Dashboard;