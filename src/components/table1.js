import React, { Component } from 'react';
import{Table} from 'react-bootstrap'

class Tables extends Component {
    render() {
        return (
            <div className="to">
            
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Ngày nhận
                            </th>
                            <th>Mã WH-OUT</th>
                            <th>Hình thức</th>
                            <th>mã ghtk</th>
                            <th>tình trạng nhận</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23/11/2019</td>
                            <td>WH-OUT-08297</td>
                            <td>GHTK</td>
                            
                            <td>129275862</td>
                            <td>GHTK TRẢ</td>
                        </tr>
                        <tr>
                            <td>12/11/2019</td>
                            <td> </td>
                            <td> AHAMOVE</td>
                            <td>357514215</td>
                            <td>ĐÃ NHẬN</td>
                        </tr>
                        <tr>
                            <td>23/11/2019</td>
                            <td>WH-OUT-08297</td>
                            <td>CÔNG TY</td>
                            <td>379098692</td>
                            <td>BÀN GIAO KHO</td>
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Tables;