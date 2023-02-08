import React, {useEffect, useState} from 'react';
import css from './admin.module.css';
import photo from '../../assets/images/placeholder/noImage.png';
import './admin.css';
import {fetchCustomData} from '../../containers/utility/utility';
import Select from 'react-select';
import {ReactNotifications, Store} from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';

const AdminPageChild = (props) => {

    //region Defaults
    const {addOrEdit} = props;
    const defaultImage = photo;
    const [defaultBrand, setDefaultBrand] = useState('');
    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultSubcategory, setDefaultSubcategory] = useState('');
    //endregion

    //region Categories & Subcategories Select
    const [categoryDataLoaded, setCategoryDataLoaded] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [categorySelected, setCategorySelected] = useState('');
    const [subcategories, setSubcategories] = useState([]);
    const [subcategoryLoaded, setSubcategoryLoaded] = useState(false);

    useEffect(() => {
        if (!categoryDataLoaded) {
            fetchCustomData('https://localhost:7085/api/Category/categories-dropdown',
                'get').then(res => res.json()).then(info => {
                setCategoryDataLoaded(true);
                setCategoryData(info);
            });
        }
    }, [categoryDataLoaded]);

    useEffect(() => {
        if (categorySelected !== '') {
            console.log(categorySelected);
            setSubcategories(categoryData[categorySelected - 1].subcategories);
            if (subcategories !== []) {
                setSubcategoryLoaded(true);
            }
        }
    }, [categorySelected]);

    const onChangeCategory = e => {
        setCategorySelected(e.value);
        setDefaultCategory(e.label);
    };

    const onChangeSubCategory = e => {
        setValues({
            ...values, 'subcategory': e.value,
        });
        setDefaultSubcategory(e.label);
    };

    useEffect(() => {
        if (subcategoryLoaded) {
            console.log(subcategories);
        }
    });

    //endregion

    //region Validation & Form
    const initialFieldValues = {
        brand: '',
        title: '',
        description: '',
        price: '',
        subcategory: '',
        imageName: '',
        imageSrc: defaultImage,
        imageFile: null,
    };
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values, [name]: value,
        });
    };

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values, imageFile, imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values, imageFile: null, imageSrc: defaultImage,
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.brand = values.brand !== '';
        temp.title = values.title !== '';
        temp.description = values.description !== '';
        temp.price = values.price !== '';
        temp.subcategory = values.subcategory !== '';
        temp.imageSrc = values.imageSrc !== defaultImage;
        setErrors(temp);
        console.log(errors);
        return Object.values(temp).every(x => x === true);
    };

    const resetForm = () => {
        setValues(initialFieldValues);
        document.getElementById('image-uploader').value = null;
        setErrors({});
        setDefaultCategory("");
        setDefaultBrand("")
        setDefaultSubcategory("")

    };

    const handleFormSubmit = e => {
        e.preventDefault();
        if (validate()) {
            NotifySuccess();
            const formData = new FormData();
            formData.append('brand', values.brand);
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('price', values.price);
            formData.append('subcategoryId', values.subcategory);
            formData.append('imageName', values.imageName);
            formData.append('imageFile', values.imageFile);
            addOrEdit(formData, resetForm);
        } else NotifyFailed();
    };

    const applyErrorClass = field => ((field in errors && errors[field] === false)
        ? ' invalidField'
        : '');
    //endregion

    //region Brand Select
    const [brandsLoaded, setBrandsLoaded] = useState(false);
    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        if (!brandsLoaded) {
            fetchCustomData('https://localhost:7085/api/Brand', 'get').then(res => res.json()).then(info => {
                setBrandsData(info);
                setBrandsLoaded(true);
            });
        }
    }, [setBrandsLoaded]);

    //
    const onChangeBrand = e => {
        setValues({
            ...values, 'brand': e.value,
        });
        setDefaultBrand(e.label);
    };

    //endregion

    //region Select Styles
    const defaultStyle = {
        control: base => ({
            ...base, // This line disable the blue border
            boxShadow: 'none',
        }),
    };

//endregion

    //region Notifications
    const NotifySuccess = () => {
        Store.addNotification({
            title: 'Success',
            message: 'Product added successfully',
            type: 'success',
            container: 'bottom-right',
            animationIn: ['animate__animated', 'animate__bounceInRight'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 2000,
            },
            width: 500,
        });
    };

    const NotifyFailed = () => {
        Store.addNotification({
            title: 'Failed',
            message: 'You need to complete all fields.',
            type: 'info',
            container: 'bottom-right',
            animationIn: ['animate__animated', 'animate__bounceInRight'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 2000,
            },
            width: 500,

        });
    };

    //endregion

    return (<form className={css.main} autoComplete="off" noValidate={true}
                  onSubmit={handleFormSubmit}>
        <ReactNotifications/>

        {/*Image Preview*/}
        <div className={css.left}>
            <img className={css.image} src={(values.imageSrc)} alt={'nada'}/>
        </div>


        <div className={css.right}>
            <h1 style={{textAlign: 'center', margin: 0, padding: 0}}>Product
                Details</h1>
            {/*Title*/}
            <label>Title:</label>
            <div>
                <input
                    className={css.inputField + applyErrorClass('title')}
                    value={values.title}
                    placeholder="Write a short description of your product..."
                    name="title"
                    onChange={handleInputChange}/>
            </div>


            {/*Price*/}
            <label>Price:</label>
            <div>
                <input className={css.inputField + applyErrorClass('price')}
                       value={values.price}
                       placeholder="Ex: 1000.99"
                       name="price" onChange={handleInputChange}/>
            </div>

            {/*Brands*/}
            {brandsLoaded && (<div>
                <label>Brand:</label>
                <Select
                    defaultInputValue={defaultBrand}
                    styles={defaultStyle}
                    className={css.selectField + applyErrorClass('brand')}
                    onChange={onChangeBrand}
                    options={brandsData.map(el => {
                        return {
                            value: el.brandId, label: el.brandName,
                        };
                    })}
                /></div>)}


            <label>Category:</label>
            <Select
                styles={defaultStyle}
                className={css.selectField + applyErrorClass('category')}
                onChange={e => onChangeCategory(e)}
                options={categoryData.map(el => {
                    return {value: el.categoryId, label: el.categoryName};
                })}
            />

            {subcategoryLoaded && (<div>
                <label>Subcategory:</label>
                <Select
                    styles={defaultStyle}
                    name="subcategory"
                    className={css.selectField + applyErrorClass('subcategory')}
                    onChange={onChangeSubCategory}
                    options={subcategories.map(el => {
                        return {
                            value: el.subcategoryId, label: el.subcategoryName,
                        };
                    })}
                /></div>)}
            <label>Image:</label>

            <div className={css.uploadDiv}>

            </div>

            <div className={css.uploadDiv}>
                <input id="image-uploader" type={'file'} accept={'image/*'}
                       className={applyErrorClass('imageSrc')}
                       onChange={showPreview}/>
            </div>

            {/*Description*/}
            <label>Description:</label>
            <div>
            <textarea
                className={css.inputField + applyErrorClass('description')}
                id={css.description}
                value={values.description}
                placeholder="Describe your product ..."
                name="description" onChange={handleInputChange}/>
            </div>
            <br/>
            <div className={css.buttonArea}>
                <button className={css.button} type={'submit'}>Submit
                </button>
            </div>
        </div>
    </form>);
};

export default AdminPageChild;
