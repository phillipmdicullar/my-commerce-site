import React from 'react'
import { Link } from 'react-router-dom'

function CreateProducts() {
  return (
    <div className='container my-4'>
        <div className='row'>
            <div className='col-md-8 mx-auto rounded border p-4'>
                <h2 className='text-center mb'>Create Product</h2>
                <form>
                  <div className='row mb-3'>
                    <label className='col-sm-4-col-from-label'>Name</label>
                    <div className='col-sm-8'>
                      <input className='form-control' name='name'/>
                      <span className='text-danger'></span>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label className='col-sm-4-col-from-label'>Brand</label>
                    <div className='col-sm-8'>
                      <input className='form-control' name='name'/>
                      <span className='text-danger'></span>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label className='col-sm-4 col-from-label'>Category</label>
                    <div className='col-sm-8'>
                      <select className='form-select' name='category'>
                        <option value='other'>Other</option>
                        <option value='Phones'>Phones</option>
                        <option value='Computers'>Computers</option>
                        <option value='Accessories'>Accessories</option>
                        <option value='Printers'>Printers</option>
                        <option value='Cameras'>Cameras</option>
                      </select>
                      <span className='text-danger'></span>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-sm-8'>
                      <input className='form-control' name='price' type='number' step='0.01' min='1'/>
                      <span className='text-danger'></span>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label className='col-sm-4 col-form-label'>Description</label>
                    <div className='col-sm-8'>
                      <textarea className='form-control' name='description' rows='4'/>
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <label className='col-sm-4 col-form-label'>Image</label>
                    <div className='col-sm-8'>
                      <input className='form-control' type="file" name='image'/>
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='offset-sm-4 col-sm-4 d-grid'>
                      <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                   
                      
                      <div className="col-sm-4 d-grid">
                        <Link className='btn btn-secondary' to='/admin/products' role='button'>Cancel</Link>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateProducts