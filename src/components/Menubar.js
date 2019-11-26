import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import Tables from './table1';
import Table2s from './table2';
import Form2 from './Form2';
import Forms from './Forms';

class Menubar extends Component {
    render() {
        return (
            <React.Fragment>
                <Tabs defaultActiveKey="NBGVC" transition={false} id="noanim-tab-example">
                    <Tab eventKey="NBGVC" title="Nhận bàn giao vận chuyển">
                        <Table2s></Table2s>
                        <div className="container-fluid">
                            <div className="row">
                            <Form2></Form2>
                            <Forms></Forms>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="HTV" title="Hàng trả về">

                        <Tables></Tables>
                        <div className="container-fluid">
                            <div className="row">
                            <Form2></Form2>
                            <Forms></Forms>
                            </div>
                        </div>
                    </Tab>

                </Tabs>
            </React.Fragment>
        );
    }
}

export default Menubar;