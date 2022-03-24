import React from 'react';
import axios from 'axios';
import AdminPageChild from './admin-page-child';

export default function AdminPage() {

  const ProductAPI = (url = 'https://localhost:7085/api/Product') => {
    return {
      fetchAll: () => axios.get(url),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: id => axios.delete(url + id),
    };
  };

  const addOrEdit = (formData, onSuccess) => {
    ProductAPI().create(formData).then(res => {
      console.log('succes! \n' + res);
      onSuccess();
    }).catch(err => console.log(err.response.data));
  };

  return (
      <AdminPageChild addOrEdit={addOrEdit}/>
  );
};
