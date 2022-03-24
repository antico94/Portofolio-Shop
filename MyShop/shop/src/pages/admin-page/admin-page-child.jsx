import React, {useEffect, useState} from 'react';
import css from './admin.module.css';
import photo from '../../assets/images/pc-and-components/computer.png';
import './admin.css';
import {fetchCustomData} from '../../containers/utility/utility';
import Select from 'react-select';

const AdminPageChild = (props) => {

  //Defaults
  //region
  const {addOrEdit} = props;
  const defaultImage = photo;
  //endregion

  //Categories & Subcategories Select
  //region
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
  };

  const onChangeSubCategory = e => {
    console.log(e.value);
    setValues({
      ...values, 'subcategory': e.value,
    });
  };

  useEffect(() => {
    if (subcategoryLoaded) {
      console.log(subcategories);
    }
  });

  //endregion

  //Validation & Form
  //region
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
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append('brand', values.brand);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('subcategoryId', values.subcategory);
      formData.append('imageName', values.imageName);
      formData.append('imageFile', values.imageFile);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = field => ((field in errors && errors[field] === false)
      ? ' invalidField'
      : '');
  //endregion

  //Brand Select
  //region
  const [brandsLoaded, setBrandsLoaded] = useState(false);
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    if (!brandsLoaded) {
      fetchCustomData('https://localhost:7085/api/Brand', 'get').
          then(res => res.json()).
          then(info => {
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
  };

  //endregion

  //Select Styles
  //region
  const defaultStyle = {
    control: base => ({
      ...base, // This line disable the blue border
      boxShadow: 'none',
    }),
  };

//endregion

  return (<form className={css.main} autoComplete="off" noValidate={true}
                onSubmit={handleFormSubmit}>

        {/*Image Preview*/}
        <div className={css.left}>
          <img className={css.image} src={(values.imageSrc)} alt={'nada'}/>
        </div>


        <div className={css.right}>
          <h1 style={{textAlign: 'center', margin: 0, padding:0}}>Product Details</h1>
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
