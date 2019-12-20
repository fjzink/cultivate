import React, { Component } from 'react';
import axios from 'axios';
import Row from '../Row/Row';
import DirectReport from '../DirectReport/DirectReport'
import './table.scss';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getManagers();
    }

    getManagers = () => {
        axios.get('/managers')
        .then((res) => {
            this.setState({ data: res.data });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    renderReports = (reports) => {
        return reports.map(report => <Row key={report.name + report.id} report={true} person={report} />);
    }

    inviteUser = (id, type) => {
        const invite = { "invite": { "invitable_id": id, "invitable_type": type } };
        axios.post('/invites', invite)
        .then((res) => {
            this.getManagers();
        })
    }

    deleteManager = (id) => {
        axios.delete(`/managers/${id}`)
        .then((res) => {
            this.getManagers();
        });

    }

    renderRows = (data) => {
        return data.map((manager) => {
            return (
                <tbody>
                    <Row
                        key={manager.name + manager.id}
                        person={manager}
                        personType={"Manager"}
                        invite={() => {this.inviteUser(manager.id, "Manager")}}
                        remove={() => {this.deleteManager(manager.id)}}
                    />
                    <DirectReport />
                    {this.renderReports(manager.directReports)}
                </tbody>
            );
        });
    }

    render() {
        const { data } = this.state;
        return (
            <table className='Table'>
                <thead>
                    <tr>
                        <th className='top-table'>Managers (102)</th>
                        <th className='top-table'></th>
                        <th className='top-table'>105</th>
                        <th className='top-table invited'>76</th>
                        <th className='top-table activated'>54</th>
                        <th className='top-table deactivated'>0</th>
                        <th className='top-table'></th>
                    </tr>
                    <tr>
                        <th className='header'>Name</th>
                        <th className='header'>Department</th>
                        <th className='header'>Reports</th>
                        <th className='header'>Invited</th>
                        <th className='header'>Activated</th>
                        <th className='header'>Deactivated</th>
                        <th className='header'>User Actions</th>
                    </tr>
                </thead>
                    {this.renderRows(data)}
            </table>
        );
    }
}