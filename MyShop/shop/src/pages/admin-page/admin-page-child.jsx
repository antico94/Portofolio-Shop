import React, {useEffect, useState} from 'react';
import css from './admin.module.css';
import photo from '../../assets/images/pc-and-components/computer.png';
import './admin.css';
import {fetchCustomData} from '../../containers/utility/utility';
import Select from 'react-select';

const AdminPageChild = (props) => {

  const {addOrEdit} = props;
  const defaultImage = photo;
  const [dataLoaded, setDataLoaded] = useState(false);
  const [subcategoryLoaded, setSubcategoryLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (!dataLoaded) {
      fetchCustomData('https://localhost:7085/api/Category/categories-dropdown',
          'get').then(res => res.json()).then(info => {
        setDataLoaded(true);
        setData(info);
      });
    }
  }, [dataLoaded]);

  useEffect(() => {
    if (categorySelected !== '') {
      setSubcategories(data[categorySelected].subcategories);
      setSubcategoryLoaded(true);
    }
  }, [categorySelected]);

  const onChangeCategory = e => {
    setCategorySelected(e.value);
  };

  const onChangeSubCategory = e => {
    console.log(e.value);
    setValues({
      ...values,
      'subcategory': e.value,
    });
  };

  useEffect(() => {
    if (subcategoryLoaded) {
      console.log(subcategories);
    }
  });

  //Hide
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
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImage,
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
      formData.append('price', values.description);
      formData.append('subcategoryId', values.subcategory);
      formData.append('imageName', values.imageName);
      formData.append('imageFile', values.imageFile);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = field => ((field in errors && errors[field] ===
      false)
      ? ' invalidField'
      : '');
  //endregion

  return (
      <div className={css.main}>
        <div className={css.first}>
          <h1>Subcategory</h1>
        </div>
        <div className={css.second}>
          <h1>Product</h1>
          <form autoComplete="off" noValidate={true}
                onSubmit={handleFormSubmit}>
            <div className="card">
              <img src={(values.imageSrc)} alt={'nada'}
                   className={'card-img-top'} style={{height: '250px'}}/>
              <div className="card-body">

                {/*Brand*/}
                <div className="form-group">
                  <input
                      className={'form-control-file' +
                          applyErrorClass('brand')}
                      value={values.brand} placeholder="Brand Name"
                      name="brand"
                      onChange={handleInputChange}/>
                </div>

                {/*Title*/}
                <div className="form-group">
                  <input
                      className={'form-control-file' +
                          applyErrorClass('title')}
                      value={values.title} placeholder="Title" name="title"
                      onChange={handleInputChange}/>
                </div>

                {/*Description*/}
                <div className="form-group">
                  <input className={'form-control-file' +
                      applyErrorClass('description')}
                         value={values.description}
                         placeholder="Description"
                         name="description" onChange={handleInputChange}/>
                </div>

                {/*Price*/}
                <div className="form-group">
                  <input className={'form-control-file' +
                      applyErrorClass('price')} value={values.price}
                         placeholder="Price"
                         name="price" onChange={handleInputChange}/>
                </div>

                

                <label>Category:</label>
                <Select
                    id="test"
                    onChange={e => onChangeCategory(e)}
                    options={data.map(el => {
                      return {value: el.categoryId, label: el.categoryName};
                    })}
                />

                {subcategoryLoaded && <Select
                    name="subcategory"
                    className={'form-control-file' +
                        applyErrorClass('subcategory')}
                    onChange={onChangeSubCategory}
                    options={subcategories.map(el => {
                      return {
                        value: el.subcategoryId,
                        label: el.subcategoryName,
                      };
                    })}
                />}

                <div className="form-group">
                  <input id="image-uploader" type={'file'} accept={'image/*'}
                         className={'form-control-file' +
                             applyErrorClass('imageSrc')}
                         onChange={showPreview}/>
                </div>

                <div className="form-group text-center">
                  <button type={'submit'} className={'btn btn-light'}>Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={css.third}>
          <h1>Subcategory</h1>
        </div>

      </div>
  );
};

export default AdminPageChild;
