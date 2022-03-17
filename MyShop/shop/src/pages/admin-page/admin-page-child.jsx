import React, {useState} from 'react';
import css from './admin.module.css';
import photo from '../../assets/images/profile/profile.png';
import './admin.css';

const AdminPageChild = (props) => {
  const {addOrEdit} = props;
  const defaultImage = photo;

  const initialFieldValues = {
    brand: '',
    title: '',
    description: '',
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
    temp.subcategory = values.subcategory !== '';
    temp.imageSrc = values.imageSrc !== defaultImage;
    setErrors(temp);
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
      formData.append('description', values.description);
      formData.append('subcategory', values.subcategory);
      formData.append('imageName', values.imageName);
      formData.append('imageFile', values.imageFile);
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = field => ((field in errors && errors[field] === false)
      ? ' invalidField'
      : '');

  return (
      <div className={css.main}>
        <div className={css.left}>
          <h1>Heelo</h1>
        </div>
        <div className={css.right}>
          <h1>There</h1>
          <form autoComplete="off" noValidate={true}
                onSubmit={handleFormSubmit}>
            <div className="card">
              <img src={(values.imageSrc)} alt={'nada'}
                   className={'card-img-top'} style={{height: '250px'}}/>
              <div className="card-body">
                <div className="form-group">
                  <input
                      className={'form-control-file' + applyErrorClass('brand')}
                      value={values.brand} placeholder="Brand Name"
                      name="brand"
                      onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                  <input
                      className={'form-control-file' + applyErrorClass('title')}
                      value={values.title} placeholder="Title" name="title"
                      onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                  <input className={'form-control-file' +
                      applyErrorClass('description')} value={values.description}
                         placeholder="Description"
                         name="description" onChange={handleInputChange}/>
                </div>

                <div className="form-group">
                  <input className={'form-control-file' +
                      applyErrorClass('subcategory')} value={values.subcategory}
                         placeholder="Subcategory"
                         name="subcategory" onChange={handleInputChange}/>
                </div>

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
      </div>
  );
};

export default AdminPageChild;
