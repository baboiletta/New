import React, { Component } from 'react';
import Dates from './Datepicker';
import {Col} from 'react-bootstrap'
class Form2 extends Component {

    render() {
        return (

            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header text-xs-center">
                      Nhập hàng nhận
                         </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label >Ngày</label>
                            <Dates></Dates>
                        </div>
                        <div className="form-group"  >
                            <label >Mã WH-OT</label>
                            <input type="text" className="form-control" placeholder="Nhập mã" />
                        </div>
                        <div className="form-group"  >
                            <label >số thùng</label>
                            <input type="number" className="form-control" placeholder="Nhập mã" />
                        </div>
                        <div className="form-group"  >
                            <label >Đợt</label>
                            <input type="number" className="form-control" placeholder="Nhập mã" />
                        </div>
                        <div className="form-group"  >
                            <label >Đã giao</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="form-group"  >
                            <label >Thời gian nhận bàn giao</label>
                            <input type="date" className="form-control" />
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </div>
            </div>

        );
    }
}

export default Form2;