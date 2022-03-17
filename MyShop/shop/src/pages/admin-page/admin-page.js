import React from 'react';
import axios from "axios"
import AdminPageChild from "./admin-page-child";


export default function AdminPage() {
    
    const ProductAPI = (url="https://localhost:7085/api/Product") => {
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url+id)
        }
    }
    
    const addOrEdit = (formData, onSuccess) => {
        ProductAPI().create(formData)
            .then(res=> {
                onSuccess();
            })
            .catch(err => console.log(err))
    }
    
    
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid-py4">
                    <div className="container text-center">
                        <h1 className="display-4">
                            Product Register
                        </h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <AdminPageChild addOrEdit={addOrEdit}/>
            </div>
            <div className="col-md-8">
                <div className="">List of Product records</div>
            </div>
        </div>
    );
};
