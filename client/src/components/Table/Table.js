import React, { Component } from 'react';
import Row from '../Row/Row';
import DirectReport from '../DirectReport/DirectReport'
import './table.scss';

const testData = [
    {
        name: 'John',
        department: 'Engineering',
        reports: 2,
        invited: '1/1/19',
        activated: '1/2/19',
        deactivated: null,
        employees: [
            {
                name: 'Julia',
                department: 'Engineering',
                reports: 2,
                invited: '1/1/19',
                activated: '1/2/19',
                deactivated: null,
            }
        ]
    },
    {
        name: 'Jimmy',
        department: 'Product',
        reports: 5,
        invited: '1/1/19',
        activated: '1/2/19',
        deactivated: null,
        employees: [
            {
                name: 'Julia',
                department: 'Engineering',
                reports: 2,
                invited: '1/1/19',
                activated: '1/2/19',
                deactivated: null,
            }
        ]
    },
    {
        name: 'Joseph',
        department: 'Sales',
        reports: 90,
        invited: '1/1/19',
        activated: null,
        deactivated: null,
        employees: [
            {
                name: 'Julia',
                department: 'Engineering',
                reports: 2,
                invited: '1/1/19',
                activated: '1/2/19',
                deactivated: null,
            }
        ]
    },
]

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: testData,
        }
    }

    renderReports = (reports) => {
        return reports.map(report => <Row report={true} person={report} />);
    }

    renderRows = (data) => {
        return data.map((manager) => {
            return (
                <tbody>
                    <Row person={manager} />
                    <DirectReport />
                    {this.renderReports(manager.employees)}
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
                        <th className='header'>Named</th>
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