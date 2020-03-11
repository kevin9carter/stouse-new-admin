import React, { Component, Fragment } from 'react';
import data from '../../assets/data/reports';
import Datatable from '../common/Datatable'

export class Report_table extends Component {
    render() {
        return (
            <Fragment>
                <div className="translation-list">
                    <Datatable
                        multiSelectOption={false}
                        myData={data}
                        pageSize={12}
                        pagination={false}
                        class="-striped -highlight"
                    />
                </div>
            </Fragment>
        )
    }
}

export default Report_table
