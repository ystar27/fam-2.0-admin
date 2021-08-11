import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Image from "next/image";
import TableUpperHeader from "./shared/tableUpperHeader";
import style from '../styles/UserAdminMgt.module.scss';
import styles from '../styles/Home.module.scss';
import gianis from '../public/Gianis.svg';
import aisha from '../public/Aisha_Bakary.svg';
import oke from '../public/Oke_Maduewesi.svg';
import toyin from '../public/Dr_Toyin.svg';
import julian from '../public/Julian_Adyeri.svg';
import helen from '../public/Helen_paul.svg';
import amina from '../public/Amina_Slaoui.svg';
import maud from '../public/Muad_Chifamba.svg';
import grace from '../public/Grace_Alache.svg';
import odunayo from '../public/Odunayo_Eweniyi.svg';
import imageHolder from '../public/photo_size_select_actual_24px.svg';




const StoryBank = () => {
    
    const name = `Create Story`;
    
    const editIcon = <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.30996 0.765625C6.20411 0.765625 6.09403 0.824723 6.01358 0.93701L5.23877 2.01851L6.8265 4.23469L7.60132 3.1532C7.76644 2.92271 7.76644 2.55039 7.60132 2.31991L6.61057 0.93701C6.52589 0.818813 6.42004 0.765625 6.30996 0.765625ZM4.78479 4.32104L5.17431 4.86474L1.33837 10.219H0.948847V9.6753L4.78479 4.32104ZM0.101562 9.18721L4.78429 2.65105L6.37202 4.8672L1.68929 11.4034H0.101562V9.18721Z" fill="#20C997"/>
    </svg>
    
    const deleteIcon = <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.18398 0.839844L6.76667 1.42253H8.80608V2.58791H0.648438V1.42253H2.68785L3.27054 0.839844H6.18398ZM1.23006 10.162C1.23006 10.803 1.75448 11.3274 2.39544 11.3274H7.05695C7.6979 11.3274 8.22232 10.803 8.22232 10.162V3.16975H1.23006V10.162ZM2.39673 4.33471H7.05823V10.1616H2.39673V4.33471Z" fill="#DC3545" fillOpacity="0.54"/>
    </svg>
    
    const sortIcon = <svg width="9" height="12" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.45287 8.14062L0.46875 9.12475L4.6565 13.3125L8.84426 9.12475L7.86013 8.14062L4.6565 11.3373L1.45287 8.14062Z" fill="#BDBDBD"/>
    <path d="M7.85572 5.3125L8.83984 4.32838L4.65209 0.140625L0.464337 4.32838L1.44846 5.3125L4.65209 2.11585L7.85572 5.3125Z" fill="#BDBDBD"/>
    </svg>
    
    const editWhite = <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.07559 0.730469C6.96974 0.730469 6.85965 0.789567 6.77921 0.901854L6.00439 1.98335L7.59213 4.19954L8.36694 3.11804C8.53207 2.88756 8.53207 2.51524 8.36694 2.28475L7.3762 0.901854C7.29152 0.783657 7.18567 0.730469 7.07559 0.730469ZM5.55042 4.28589L5.93994 4.82959L2.104 10.1839H1.71448V9.64015L5.55042 4.28589ZM0.867188 9.15207L5.54992 2.61591L7.13765 4.83205L2.45491 11.3682H0.867188V9.15207Z" fill="white"/>
    </svg>
    
    const checked = <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5382 7.46114L0.945414 4.86836L0.0625 5.74506L3.5382 9.22075L10.9994 1.75951L10.1227 0.882812L3.5382 7.46114Z" fill="white"/>
    </svg>
    
    const arrow_backward = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.33612 13L7.39772 11.893L3.1965 7.50403L12.3594 7.50403V5.93375L3.1965 5.93375L7.39772 1.54482L6.33612 0.437775L0.312866 6.71889L6.33612 13Z" fill="#B569D4"/>
    </svg>
    
    const back = <svg width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.89047 5.05472C6.65847 4.74272 7.17447 4.10672 7.17447 3.14672C7.17447 1.77872 6.09447 0.986718 4.22247 0.986718H0.598469V9.38672H4.46247C6.56247 9.38672 7.61847 8.57072 7.61847 7.14272C7.61847 6.00272 6.97047 5.29472 5.89047 5.05472ZM4.16247 1.71872C5.50647 1.71872 6.28647 2.23472 6.28647 3.24272C6.28647 4.25072 5.50647 4.76672 4.16247 4.76672H1.48647V1.71872H4.16247ZM4.45047 8.65472H1.48647V5.49872H4.45047C5.92647 5.49872 6.73047 5.97872 6.73047 7.07072C6.73047 8.17472 5.92647 8.65472 4.45047 8.65472ZM11.6733 3.02672C10.6773 3.02672 9.74134 3.33872 9.10534 3.87872L9.48934 4.51472C10.0053 4.05872 10.7733 3.77072 11.5893 3.77072C12.7653 3.77072 13.3773 4.35872 13.3773 5.43872V5.82272H11.3733C9.56134 5.82272 8.93734 6.63872 8.93734 7.61072C8.93734 8.70272 9.81334 9.44672 11.2413 9.44672C12.2853 9.44672 13.0293 9.05072 13.4133 8.40272V9.38672H14.2293V5.47472C14.2293 3.84272 13.3053 3.02672 11.6733 3.02672ZM11.3733 8.77472C10.3653 8.77472 9.77734 8.31872 9.77734 7.58672C9.77734 6.93872 10.1733 6.45872 11.3973 6.45872H13.3773V7.49072C13.0413 8.31872 12.3333 8.77472 11.3733 8.77472ZM19.1829 9.44672C20.2509 9.44672 21.1509 9.01472 21.6549 8.19872L21.0189 7.76672C20.5869 8.40272 19.9149 8.69072 19.1829 8.69072C17.8029 8.69072 16.7949 7.71872 16.7949 6.23072C16.7949 4.75472 17.8029 3.77072 19.1829 3.77072C19.9149 3.77072 20.5869 4.07072 21.0189 4.70672L21.6549 4.27472C21.1509 3.44672 20.2509 3.02672 19.1829 3.02672C17.2989 3.02672 15.9309 4.34672 15.9309 6.23072C15.9309 8.11472 17.2989 9.44672 19.1829 9.44672ZM28.1189 9.38672H29.1629L26.2109 5.65472L28.9109 3.07472H27.8549L24.0869 6.51872V0.482718H23.2349V9.38672H24.0869V7.58672L25.5749 6.21872L28.1189 9.38672Z" fill="#B569D4"/>
    </svg>
    
    const photoSizeHolder = <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M34.6611 0.8125H3.5329C1.80356 0.8125 0.0742188 2.54184 0.0742188 4.27118V28.482C0.0742188 30.3842 1.63063 31.9407 3.5329 31.9407H34.6611C36.3904 31.9407 38.1197 30.2113 38.1197 28.482V4.27118C38.1197 2.54184 36.3904 0.8125 34.6611 0.8125ZM34.6611 28.3436C34.6369 28.3798 34.596 28.416 34.5617 28.4463C34.5468 28.4594 34.5332 28.4715 34.5227 28.482H3.5329V4.40953L3.67125 4.27118H34.5054C34.5416 4.29529 34.5778 4.33622 34.6081 4.37052L34.6081 4.37054C34.6212 4.38543 34.6333 4.39906 34.6438 4.40953V28.3436H34.6611ZM13.0443 17.2413L17.3676 22.4466L23.4203 14.6472L31.2024 25.0233H6.99158L13.0443 17.2413Z" fill="#BDBDBD"/>
    </svg> 
    
    const camera = <svg width="15" height="12" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.8125 0.660156H13.8125L15.6425 2.66016H18.8125C19.9125 2.66016 20.8125 3.56016 20.8125 4.66016V16.6602C20.8125 17.7602 19.9125 18.6602 18.8125 18.6602H2.8125C1.7125 18.6602 0.8125 17.7602 0.8125 16.6602V4.66016C0.8125 3.56016 1.7125 2.66016 2.8125 2.66016H5.9825L7.8125 0.660156ZM14.7625 4.66016L12.9325 2.66016H8.6925L6.8625 4.66016H2.8125V16.6602H18.8125V4.66016H14.7625ZM10.8125 7.66016C12.4625 7.66016 13.8125 9.01016 13.8125 10.6602C13.8125 12.3102 12.4625 13.6602 10.8125 13.6602C9.1625 13.6602 7.8125 12.3102 7.8125 10.6602C7.8125 9.01016 9.1625 7.66016 10.8125 7.66016ZM5.8125 10.6602C5.8125 7.90016 8.0525 5.66016 10.8125 5.66016C13.5725 5.66016 15.8125 7.90016 15.8125 10.6602C15.8125 13.4202 13.5725 15.6602 10.8125 15.6602C8.0525 15.6602 5.8125 13.4202 5.8125 10.6602Z" fill="#B569D4"/>
    </svg>
    
    const decrement = <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9844 2.83203H0.984375V0.832031H14.9844V2.83203Z" fill="#B569D4"/>
    </svg>
    
    const increment = <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.3174 11.7156L19.3015 9.72167L11.3963 9.78485L11.3331 1.87965L9.3391 1.89558L9.40228 9.80078L1.49708 9.86396L1.51301 11.8579L9.41822 11.7948L9.48139 19.7L11.4754 19.684L11.4122 11.7788L19.3174 11.7156Z" fill="#B569D4"/>
    </svg>
    
    
    
    let count = 1;
    let alt = `profile image`;
    
    const tableInfo = [
        { id: count++, src: gianis, title: `GIANIS CHANGACHIRERE`,   level: 2 },
        { id: count++, src: aisha, title: `AISHA BAKARY`,   level: 1 },
        { id: count++, src: oke, title: `OKE MADUEWESI`,   level: 3 },
        { id: count++, src: toyin, title: `DR TOYIN JANET ADEREMI IGE`,   level: 2 },
        { id: count++, src: julian, title: `JULIAN ADYERI`,   level: 1 },
        { id: count++, src: helen, title: `HELEN PAUL`,   level: 3 },
        { id: count++, src: amina, title: `AMINA SLAOUI`,   level: 2 },
        { id: count++, src: maud, title: `MAUD CHIFAMBA`,   level: 3 },
        { id: count++, src: grace, title: `GRACE ALACHE JERRY`,   level: 1 },
        { id: count++, src: odunayo, title: `ODUNAYO EWENIYI`,   level: 2 },
        
    ];
    
    const [mainStoryBankDiv, setStoryBankDiv] = useState(true);
    const [mainStoryBankDiv1, setStoryBankDiv1] = useState(false);
    const [mainStoryBankSubDiv1, setStoryBankSubDiv1] = useState(false);
    const [mainStoryBankDiv2, setStoryBankDiv2] = useState(false);
    const [mainStoryBankDiv3, setStoryBankDiv3] = useState(false);
    const [mainStoryBankDiv4, setStoryBankDiv4] = useState(false);
    const [mainEditDiv, setEditDiv] = useState(false);
    const [defaultNavOne, setDefaultNavOne] = useState(true);
    const [defaultNavTwo, setDefaultNavTwo] = useState(true);
    const [defaultNavThree, setDefaultNavThree] = useState(true);
    const [defaultEditOne, setDefaultEditOne] = useState(false);
    const [defaultEditTwo, setDefaultEditTwo] = useState(false);
    const [defaultEditThree, setDefaultEditThree] = useState(false);
    const [decAndIncVal, setDecAndIncVal] = useState([1]);
    const [arrayNumbers, setNewArray] = useState<number[]>([1]);
    //const [arrayNumbers, setNewArray] = useState<Array<number>>([]);
    
    
    useEffect(() => {
        if(arrayNumbers.length === 1){
            localStorage.removeItem(`numbers`);
        }
    })
    
    const handleCreateModule = (e: any) => {
        e.preventDefault();
        console.log(`Creating NEW STORIES++++++`);
        
        setStoryBankDiv(false);
        setStoryBankDiv1(true);
        setStoryBankSubDiv1(true);
        setDefaultNavOne(false);
        setDefaultEditOne(true);
        setStoryBankDiv2(false);
    }
    
    const changeNavStateOne = () => {
        if(defaultEditOne){
            console.log(`Default Edit one TRUE:::`);
            return <div className={style.story_bank_nav_div_1}>{editWhite}</div>
        }else{
            console.log(`Default Edit one FALSE:::`);
            return <div className={style.story_bank_nav_div_1_checked}>{checked}</div>
        }
    }
    
    const changeNavStateTwo = () => {
        if(defaultEditTwo){
            return <div className={style.story_bank_nav_div_2}>{editWhite}</div>
        }else{
            return <div className={style.story_bank_nav_div_2}>{checked}</div>
        }
    }
    
    const changeNavStateThree = () => {
        if(defaultEditThree){
            return <div className={style.story_bank_nav_div_3}>{editWhite}</div>
        }else{
            return <div className={style.story_bank_nav_div_3}>{checked}</div>
        }
    }
    
    const handleBackBtnClick = (e: any) => {
        e.preventDefault();
        
        console.log(`Clicking the back btn`);
        
        setStoryBankDiv(true);
        setStoryBankDiv1(false);
    }
    
    const handleNavOneChange = (e: any) => {
        e.preventDefault();
        console.log(`Changing Nav one+++++++`);
        setDefaultNavTwo(true);
        setDefaultNavThree(true);
        setDefaultEditOne(true);
        
        setStoryBankSubDiv1(true);
        setStoryBankDiv2(false);
        setStoryBankDiv3(false);
        setStoryBankDiv4(false);
    }
    
    const handleNavTwoChange = (e: any) => {
        e.preventDefault();
        console.log(`Changing Nav Two+++++++`);
        
        setDefaultEditOne(false);
        setDefaultNavTwo(false);
        setDefaultEditTwo(true);
        
        const storedArray = localStorage.getItem(`numbers`);
        const numbers = JSON.parse(`${storedArray}`);
        
        if(storedArray){
            setStoryBankSubDiv1(false);
            setStoryBankDiv2(false);
            setStoryBankDiv3(true);
            setDefaultNavThree(true);
            setNewArray(numbers);
            setStoryBankDiv4(false);
        }else{
            setStoryBankSubDiv1(false);
            //setStoryBankDiv3(true);
            setStoryBankDiv2(true);
            setDefaultNavThree(true);
            setStoryBankDiv4(false);
        }
        
    }
    
    const handleNavThreeChange = (e: any) => {
        console.log(`Changing Nav Three+++++++`);
        
        setDefaultEditOne(false);
        setDefaultEditTwo(false);
        setDefaultEditThree(false);
        setDefaultNavThree(false);
        setDefaultNavTwo(false);
        
        setStoryBankSubDiv1(false);
        setStoryBankDiv2(false);
        setStoryBankDiv3(false);
        setStoryBankDiv4(true);
    }
    
    const handleNextBtnClick = (e: any) => {
        console.log(`Handling Next Btn clicking....+++====`);
        
        setDefaultEditOne(false);
        setDefaultNavTwo(false);
        setDefaultEditTwo(true);
        
        setStoryBankSubDiv1(false);
        setStoryBankDiv2(true);
    }
    
    const handleDecrementMain = () => {
        if(arrayNumbers.length === 1){
            return;
        }
    }
    
    const handleDecrement = (e: any, val: number) => {
        e.preventDefault();
        
        console.log(`Decrementing --------`);
        
        const storedArray = localStorage.getItem(`numbers`);
        
        const numbers = JSON.parse(`${storedArray}`);
        
        if(arrayNumbers.length === 1){
            // setStoryBankDiv2(true);
            // setStoryBankDiv3(false);
            
            localStorage.removeItem(`numbers`);
            
            return;
        }
        
        if(storedArray){
            const checkLength = storedArray.length;
            
            if(checkLength > 1){
                const numbers = JSON.parse(storedArray);
                
                console.log(`NUM::::`, numbers);
                
                const index = numbers.indexOf(val);
                
                if(index > -1){
                    numbers.splice(index, 1);
                    
                    setNewArray(numbers)
                    
                    console.log(`NEW ARR::::`, numbers);
                    
                    localStorage.setItem(`numbers`, JSON.stringify(numbers))
                }
            }
        }
    }
    
    
    const handleIncrement = (e: any) => {
        e.preventDefault();
        
        console.log(`Incrementing +++++++++++`);
        
        let count = 1;
        //localStorage.removeItem(`numbers`);
        
        if(localStorage.getItem(`numbers`)){
            getLastArrayVal();
            console.log(`Local storage is SET+++++`);
            const contain = localStorage.getItem("numbers");
            let storeVal = JSON.parse(`${contain}`);
            
            const lastItem = storeVal[(storeVal.length - 1)];
            const newArray = [ ...storeVal, (lastItem + 1)];
            
            setNewArray(newArray);
        
            localStorage.setItem(`numbers`, JSON.stringify(newArray));
            
            setStoryBankDiv2(false);
            setStoryBankDiv3(true);
            
        }else{
            if(arrayNumbers.length >= 1){
            
                count++;
                
                arrayNumbers.push(count);
                
                console.log(`Array::::`, arrayNumbers);
                
                localStorage.setItem(`numbers`, JSON.stringify(arrayNumbers));
                
                console.log(localStorage.getItem(`numbers`));
                
                setStoryBankDiv2(false);
                setStoryBankDiv3(true);
                
            }
        }
        
    }
    
    const handleBackToPrevForm = (e: any) => {
        e.preventDefault();
        
        console.log(`Going back to previous form`);
        
        setDefaultNavTwo(true);
        setDefaultEditOne(true);
        
        setStoryBankSubDiv1(true);
        setStoryBankDiv2(false);
        setStoryBankDiv3(false);
    }
    
    const handleGoToNextForm = (e: any) => {
        e.preventDefault();
        
        console.log(`Going to next form+++++++`);
        
        setDefaultEditTwo(false);
        setDefaultEditThree(false);
        setDefaultNavThree(false);
        
        setStoryBankSubDiv1(false);
        setStoryBankDiv2(false);
        setStoryBankDiv3(false);
        setStoryBankDiv4(true);
    }
    
    function getLastArrayVal(){
        const lastItem = arrayNumbers[arrayNumbers.length - 1];
        
        console.log(`LAST ITEM:::`, lastItem);
        console.log(arrayNumbers);
        return lastItem;
        
    }
    
    const handleBackToPrevForm3 = (e: any) => {
        e.preventDefault();
        
        console.log(`Handling clicking of form 3......`)
        
        setDefaultNavThree(true);
        setStoryBankDiv4(false);
        setStoryBankDiv2(false);
        setStoryBankSubDiv1(false);
        
        const storedArray = localStorage.getItem(`numbers`);
        const numbers = JSON.parse(`${storedArray}`);
        
        if(storedArray){
            setNewArray(numbers);
            setStoryBankDiv3(true);
        }else{
            setStoryBankDiv3(true);
        }
    }
    
    const handleResetForm3 = (e: any) => {
        e.preventDefault();
        
        console.log(`Handling reseting of form 3 ------`)
    }
    
    const handleEdit = (e: any, id: number) => {
        e.preventDefault();
        
        console.log(`ID:::`, id);
        setStoryBankDiv(false)
        setEditDiv(true);
    }
    
    return (
        <React.Fragment>
            {mainStoryBankDiv && <div className={ styles.admin_dashboard_container}>
                <Head>
                    <title>FAM ADMIN DASHBOARD</title>
                    <meta name="description" content="Generated by create next app" />
                    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
                </Head>
                <div className={ styles.admin_welcome_msg}>
                    <h3>Welcome Admin</h3>
                    <span>Dashboard - </span><span>Story Bank</span>
                </div>
                <div className={style.main_fam_module_control}>
                    <div className={ style.fam_module_control}>
                        <div className={ style.fam_table_top_div_1}>
                            <TableUpperHeader
                                createModule={(e: unknown) => handleCreateModule(e)}
                                name={name}
                            />
                        </div>
                        <div className={ style.fam_table_top_div_2}>
                            <table className={ style.story_bank_table_main}>
                                <thead className={ style.story_bank_table_main_header}>
                                    <tr className={ style.story_bank_table_main_header_row }>
                                        <th className={style.story_bank_table_main_header_col_1}>S/N<span className={style.story_bank_table_main_sort_1}>{sortIcon}</span></th>
                                        <th className={style.story_bank_table_main_header_col_2}>IMAGE<span className={style.story_bank_table_main_sort_2}>{sortIcon}</span></th>
                                        <th className={style.story_bank_table_main_header_col_3}>TITLE<span className={style.story_bank_table_main_sort_3}>{sortIcon}</span></th>
                                        <th className={style.story_bank_table_main_header_col_4}>LEVEL</th>
                                        <th className={style.story_bank_table_main_header_col_5}>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className={ style.story_bank_table_main_body}>
                                    { tableInfo.map((info) => 
                                        <tr key={info.id} className={ style.story_bank_table_main_body_row }>
                                            <td className={style.story_bank_table_main_body_col_1}>{info.id}</td>
                                            <td className={style.story_bank_table_main_body_col_2}><Image src={info.src} width={ 100 } height={ 50 } alt={alt}/></td>
                                            <td className={style.story_bank_table_main_body_col_3}>{info.title}</td>
                                            <td className={style.story_bank_table_main_body_col_4}>{info.level}</td>
                                            <td className={style.story_bank_table_main_body_col_5}>
                                                <button className={style.btn_story_bank_mod_1} onClick={(e) => handleEdit(e, info.id)}><span className={style.btn_span}>{editIcon}</span>Edit</button>
                                                <button className={style.btn_story_bank_mod_2}><span className={style.btn_span}>{deleteIcon}</span>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className={style.pagination_div}>
                                <div className={style.pagination_text}>
                                    <span className={style.pagination_text_span}><small>showing {1} to {10} of {58} entries</small></span>
                                </div>
                                <div ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {mainEditDiv && <div className={ styles.admin_dashboard_container}>
                <Head>
                    <title>FAM ADMIN DASHBOARD</title>
                    <meta name="description" content="Generated by create next app" />
                    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
                </Head>
                <div className={ styles.admin_welcome_msg}>
                    <h3>Welcome Admin</h3>
                    <span>Dashboard - </span><span>Story Bank</span>
                </div>
                <div className={styles.story_bank_edit_add}>
                    <button className={styles.story_bank_del_btn}>Delete Story</button>
                    <button className={styles.story_bank_add_question_btn}>Add Questions</button>
                </div>
                <div className={style.main_story_bank_module_control_edit}>
                    <div className={ style.story_bank_module_control_edit}>
                        <div className={style.main_story_bank_module_control_edit_div}>
                            <div className={style.main_story_bank_module_control_edit_div1}>Edit</div>
                            <div className={style.main_story_bank_module_control_edit_div2}>Questions</div>
                        </div>
                        <div className={ style.story_bank_table_top_div_1_edit}>
                            <div  className={ style.story_bank_nav_content_sub_main_nav2}>
                                <div className={ style.story_bank_nav_content_sub_main_nav2_div}>
                                    <label className={ style.story_bank_nav_content_sub_main_img}>
                                        <div className={ style.story_bank_nav_content_sub_main_div}>
                                            <span>{camera}</span>
                                        </div>
                                        <input type="file" style={{ display: "none" }}/>
                                        <Image  src={ imageHolder } width={100} height={ 100 } alt="story owner image" />
                                    </label>
                                    <div className={style.story_bank_edit_inputs}>
                                        <select className={style.story_bank_edit_select}>
                                            <option value="" >Module</option>
                                        </select>
                                        <input className={style.story_bank_edit_inp1} placeholder="Title"/>
                                        <input className={style.story_bank_edit_inp2} placeholder="Sub Title"/>
                                        <input className={style.story_bank_edit_inp3} placeholder="Quote"/>
                                    </div>
                                </div>
                                <div className={ style.story_bank_nav_content_sub_main_nav2_div}>
                                    <h5>Profile</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            }
            { mainStoryBankDiv1 && <div className={ styles.admin_dashboard_container}>
                <Head>
                    <title>FAM ADMIN DASHBOARD</title>
                    <meta name="description" content="Generated by create next app" />
                    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
                </Head>
                <div className={ styles.admin_welcome_msg}>
                    <h3>Welcome Admin</h3>
                    <span>Dashboard - </span><span>Story Bank</span>
                </div>
                <div className={style.main_story_bank_module_control}>
                    <div className={ style.story_bank_module_control}>
                        <div className={style.main_story_bank_module_back_btn} onClick={(e: any) => handleBackBtnClick(e)}>
                            <span className={style.main_story_bank_module_back_span_1}>{ arrow_backward }</span><span className={style.main_story_bank_module_back_span_2}>{ back }</span>
                        </div>
                        <div className={ style.story_bank_table_top_div_1}>
                            <div className={style.story_bank_nav_header}>
                                <div className={defaultNavOne ? style.story_bank_nav_header_1_on : style.story_bank_nav_header_1_off}>FILL OUT STORY INFORMATION</div>
                                <div className={defaultNavTwo ? style.story_bank_nav_header_2_on :  style.story_bank_nav_header_2_off}>FILL OUT STORY QUESTION</div>
                                <div className={defaultNavThree ? style.story_bank_nav_header_3_on : style.story_bank_nav_header_3_off}>FINISH</div>
                            </div>
                            <div className={style.story_bank_nav}>
                                <div className={ defaultNavOne ? style.story_bank_nav_1 : style.story_bank_nav_new_1} onClick={(e: any) => handleNavOneChange(e)}>{ defaultNavOne ? 1 : changeNavStateOne()}</div>
                                <div className={ defaultNavTwo ? style.story_bank_nav_2 : style.story_bank_nav_new_2} onClick={(e) => handleNavTwoChange(e)}>{ defaultNavTwo ? 2 : changeNavStateTwo()}</div>
                                <div className={ defaultNavThree ? style.story_bank_nav_3 : style.story_bank_nav_new_3} onClick={(e) => handleNavThreeChange(e)}>{ defaultNavThree ? 3 : changeNavStateThree()}</div>
                            </div>
                            { mainStoryBankSubDiv1 && <div className={ style.story_bank_nav_content_main }>
                                    <div className={ style.story_bank_nav_content_sub_main}>
                                        <label className={ style.story_bank_nav_content_sub_main_img}>
                                            <div className={ style.story_bank_nav_content_sub_main_div}>
                                                <span>{camera}</span>
                                            </div>
                                            <input type="file" style={{ display: "none" }}/>
                                            <Image  src={ imageHolder } width={100} height={ 100 } alt="story owner image" />
                                        </label>
                                        <div className={style.story_bank_nav_content_sub_main_select}>
                                            <select className={style.story_bank_nav_content_sub_main_select_1}>
                                                <option value="" >Module</option>
                                            </select>
                                            <select className={style.story_bank_nav_content_sub_main_select_2}>
                                                <option value="" >Level</option>
                                            </select>
                                            <select className={style.story_bank_nav_content_sub_main_select_3}>
                                                <option value="" >Duration</option>
                                            </select>
                                        </div>
                                        <div className={style.story_bank_nav_content_sub_main_div_inp}>
                                            <input  placeholder="Title" className={ style.story_bank_nav_content_sub_main_div_inp_1}/>
                                            <input  placeholder="Sub Title" className={ style.story_bank_nav_content_sub_main_div_inp_2}/>
                                            <input  placeholder="Quote" className={ style.story_bank_nav_content_sub_main_div_inp_3}/>
                                        </div>
                                    </div>
                                    <div className={ style.story_bank_nav_content_sub_profile_main}>
                                        <h4 className={style.story_bank_nav_content_sub_profile_main_header}>Profile</h4>
                                        <div className={ style.story_bank_nav_content_sub_profile_main_inp}>
                                            <input className={style.story_bank_nav_content_sub_profile_inp_1} placeholder="Title"/>
                                            <input className={style.story_bank_nav_content_sub_profile_inp_2} placeholder="Sub Title"/>
                                        </div>
                                    </div>
                                    <div className={ style.story_bank_nav_content_sub_experience_main}>
                                        <h4 className={style.story_bank_nav_content_sub_experience_main_header}>Experience</h4>
                                        <div className={ style.story_bank_nav_content_sub_experience_main_inp}>
                                            <input className={style.story_bank_nav_content_sub_experience_inp_1} placeholder="Title"/>
                                            <input className={style.story_bank_nav_content_sub_experience_inp_2} placeholder="Description"/>
                                        </div>
                                    </div>
                                    <div className={ style.story_bank_nav_content_sub_success_story_main}>
                                        <h4 className={style.story_bank_nav_content_sub_success_story_main_header}>Success Story</h4>
                                        <div className={ style.story_bank_nav_content_sub_success_story_main_inp}>
                                            <input className={style.story_bank_nav_content_sub_success_story_inp_1} placeholder="Title"/>
                                            <input className={style.story_bank_nav_content_sub_success_story_inp_2} placeholder="Description"/>
                                        </div>
                                    </div>
                                    <div className={style.story_bank_btn_div}><button className={style.story_bank_btn} onClick={(e) => handleNextBtnClick(e)}>Next</button></div>
                                </div>
                            }
                            { mainStoryBankDiv2 && <div className={ style.story_bank_nav_content_main_nav2 }>
                                    <div className={ style.story_bank_nav_content_sub_main_nav2}>
                                        <div className={ style.story_bank_nav_content_sub_main_nav2_div}>
                                            <h5 className={style.story_bank_nav_content_sub_main_nav2_div_header_1}>Question 1</h5>
                                            <input placeholder="Question" className={ style.story_bank_nav_content_sub_main_nav2_inp}/>
                                        </div>
                                        <div className={ style.story_bank_nav_content_sub_main_nav2_div_1 }>
                                            <h5 className={style.story_bank_nav_content_sub_main_nav2_div_header_2}>Question 1 Options</h5> 
                                            <span className={style.story_bank_nav_content_sub_main_nav2_div_span}><small>Label</small></span>
                                            <div className={style.story_bank_nav_content_sub_main_nav2_div_main_inp}>
                                                <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input1}>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_1}/>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_2} placeholder="Answer"/>
                                                </div>
                                                <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input2}>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_3}/>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_4} placeholder="Answer"/>
                                                </div>
                                                <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input3}>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_5}/>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_6} placeholder="Answer"/>
                                                </div>
                                                <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input4}>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_7}/>
                                                    <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_8} placeholder="Answer"/>
                                                </div>
                                            </div>
                                            <div className={style.story_bank_correct_answer}>
                                                <input className={style.story_bank_correct_input} placeholder="Correct Answer"/>
                                            </div>
                                            <div className={style.story_bank_challenge_question}>
                                                <h5 className={style.story_bank_challenge_question_header}>Challenge 1</h5>
                                                <input className={style.story_bank_challenge_question_inp} placeholder="Theory Question"/>
                                            </div>
                                            <div className={style.story_bank_decrement_btn_on} onClick={handleDecrementMain}><span className={style.story_bank_decrement_span}>{decrement}</span></div>
                                            <div className={style.story_bank_increment_btn_on} onClick={handleIncrement}>{increment}</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            { mainStoryBankDiv3 && <div className={ style.story_bank_nav_content_main_nav2 }>
                                {(
                                    arrayNumbers.map(val => 
                                        <div key={val}>
                                            <div className={ style.story_bank_nav_content_sub_main_nav2}>
                                                <div className={ style.story_bank_nav_content_sub_main_nav2_div}>
                                                    <h5 className={style.story_bank_nav_content_sub_main_nav2_div_header_1}>Question 1</h5>
                                                    <input placeholder="Question" className={ style.story_bank_nav_content_sub_main_nav2_inp}/>
                                                </div>
                                                <div className={ style.story_bank_nav_content_sub_main_nav2_div_1 }>
                                                    <h5 className={style.story_bank_nav_content_sub_main_nav2_div_header_2}>Question 1 Options</h5> 
                                                    <span className={style.story_bank_nav_content_sub_main_nav2_div_span}><small>Label</small></span>
                                                    <div className={style.story_bank_nav_content_sub_main_nav2_div_main_inp}>
                                                        <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input1}>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_1}/>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_2} placeholder="Answer"/>
                                                        </div>
                                                        <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input2}>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_3}/>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_4} placeholder="Answer"/>
                                                        </div>
                                                        <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input3}>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_5}/>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_6} placeholder="Answer"/>
                                                        </div>
                                                        <div className={style.story_bank_nav_content_sub_main_nav2_div_main_input4}>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_7}/>
                                                            <input className={style.story_bank_nav_content_sub_main_nav2_div_inp_8} placeholder="Answer"/>
                                                        </div>
                                                    </div>
                                                    <div className={style.story_bank_correct_answer}>
                                                        <input className={style.story_bank_correct_input} placeholder="Correct Answer"/>
                                                    </div>
                                                    <div className={style.story_bank_challenge_question}>
                                                        <h5 className={style.story_bank_challenge_question_header}>Challenge 1</h5>
                                                        <input className={style.story_bank_challenge_question_inp} placeholder="Theory Question"/>
                                                    </div>
                                                    <div className={ val === getLastArrayVal() ? style.story_bank_decrement_btn_on : style.story_bank_decrement_btn_on} onClick={(e) => handleDecrement(e, val)}><span className={style.story_bank_decrement_span}>{decrement}</span></div>
                                                    <div className={ val === getLastArrayVal() ? style.story_bank_increment_btn_on : style.story_bank_increment_btn_off} onClick={handleIncrement}>{increment}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                                    
                                </div>
                            }
                            { mainStoryBankDiv2 && <div className={style.story_bank_main_btn}>
                                <button className={style.story_bank_main_btn_1} onClick={handleBackToPrevForm}>Back</button>
                                <button className={style.story_bank_main_btn_2} onClick={handleGoToNextForm}>Next</button>
                            </div>
                            }
                            { mainStoryBankDiv3 && <div className={style.story_bank_main_btn}>
                                <button className={style.story_bank_main_btn_1} onClick={handleBackToPrevForm}>Back</button>
                                <button className={style.story_bank_main_btn_2} onClick={handleGoToNextForm}>Next</button>
                            </div>
                            }
                            { mainStoryBankDiv4 && <div className={ style.story_bank_nav_content_main_nav2 }>
                                <div className={ style.story_bank_nav_content_sub_main_nav2}>
                                    <div className={ style.story_bank_nav_content_nav3}>
                                        <p className={ style.story_bank_nav_content_nav3_p1}>You are almost done!</p>
                                        <p className={ style.story_bank_nav_content_nav3_p2}>If you have verified all your entries, go ahead and submit</p>
                                        <button className={ style.story_bank_nav_content_nav3_btn}>Submit Story</button>
                                    </div>
                                    <div className={ style.story_bank_nav_content_nav4}>
                                        <button className={style.story_bank_nav_content_nav3_btn_1} onClick={handleBackToPrevForm3}>Back</button>
                                        <button className={style.story_bank_nav_content_nav3_btn_2} onClick={handleResetForm3}>Reset</button>
                                    </div>
                                </div>
                                
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}


export default StoryBank;

