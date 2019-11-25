import React, { Component } from 'react';
import{Tabs,Tab} from 'react-bootstrap'
import Tables from './table1';
import Table2s from './table2';

class Menubar extends Component {
    render() {
        return (
            <React.Fragment>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="Home">
                       <Tables></Tables>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Table2s></Table2s>
                      
                    </Tab>
                   
                </Tabs>
            </React.Fragment>
        );
    }
}

export default Menubar;