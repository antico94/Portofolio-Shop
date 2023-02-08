import React from 'react';
import css from './admin-menu.module.css';

const AdminMenu = () => {
    return (
        <div className={css.adminMenu}>
            <div className={css.adminMenuTop}>
                <div className={css.adminMenuLeft + " " + css.choice}>
                    <h1>Add a new Category</h1>
                </div>
                <div className={css.adminMenuRight + " " + css.choice}>
                    <h1>Add a new Subcategory</h1>
                </div>
            </div>
            <div className={css.adminMenuBot}>
                <div className={css.adminMenuLeft + " " + css.choice}>
                    <h1>Add a new Brand</h1>
                </div>
                <div className={css.adminMenuRight + " " + css.choice}>
                    <h1>Add a new Product</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;