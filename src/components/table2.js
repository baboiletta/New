import React, { Component } from 'react';
import{Table} from 'react-bootstrap'

class Table2s extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Ngày nhận
                            </th>
                            <th>Mã WH-OUT</th>
                            <th>So thung</th>
                            <th>dot</th>
                            <th>da giao</th>
                            <th>THOI GIAN NHAN BAN GIAO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23/11/2019</td>
                            <td>WH-OUT-08297</td>
                            <td>1</td>
                            <td>1</td>
                            
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>23/11/2019</td>
                            <td>WH-OUT-08297</td>
                            <td>1</td>
                            <td>1</td>
                            
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>23/11/2019</td>
                            <td>WH-OUT-08297</td>
                            <td>1</td>
                            <td>1</td>
                            
                            <td> </td>
                            <td> </td>
                        </tr>
                        
                       
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Table2s;