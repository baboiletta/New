import React, { Component } from 'react';
import Dates from './Datepicker';

class Forms extends Component {

    render() {
        return (

            <div className="col-sm-6 bang2">
                <div className="card">
                    <div className="card-header text-xs-center">
                         Nhập hàng trả về
                         </div>
                    <div className="card-body">
                        <div className="form-group ">
                            <label >Ngày</label>
                            <Dates></Dates>
                        </div>
                        <div className="form-group">
                            <label >Mã WH-OT</label>
                            <input type="text" className="form-control" placeholder="Nhập mã" />
                        </div>


                        <div className="form-group">
                            <label >Hình thức  </label>
                            <select className="form-control">
                                <option>GHTK</option>
                                <option>AHAMOVE</option>
                                <option>Công ty</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label >Mã GHTK</label>
                            <input type="number" className="form-control" placeholder="Nhập mã" />
                        </div>
                        <div className="form-group">
                            <label >Tình trạng nhận</label>
                            <select className="form-control">
                                <option>GHTK trả</option>
                                <option>Đã nhận</option>
                                <option>Bàn giao kho</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </div>
            </div>

        );
    }
}

export default Forms;