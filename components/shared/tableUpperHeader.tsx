import * as React from 'react';
import style from '../../styles/UserAdminMgt.module.scss'; 


const TableUpperHeader = (props: any) => {
    
    const options = [1,2,3,4,5,6,7,8,9,10];
    
    return (
        <React.Fragment>
            <div className={ style.fam_table_top_div_1_show_entry}>
                <span className={ style.fam_table_top_div_1_show_entry_span}><small>show</small></span>
                <select name="options" id="options" className={style.fam_table_top_div_1_show_entry_select}>
                    {
                        options.map(option => <option key={option} value="Module Status">{option}</option>)
                    }
                </select>
                <span className={ style.fam_table_top_div_1_show_entry_span}><small>entries</small></span>
            </div>
            <div className={ style.fam_table_top_div_1_search_model}>
                <input type="text" className={style.fam_table_top_div_1_search_model_input} id="" placeholder="Search here..."/>
                <button type="button" className={style.fam_table_top_div_1_search_model_button} onClick={props.createModule}>{props.name}</button>
            </div>
        </React.Fragment>
    )
}

export default TableUpperHeader;