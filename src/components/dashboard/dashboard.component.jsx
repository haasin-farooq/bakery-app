import React from 'react';

import ItemSection from '../item-section/item-secion.component';
import SummarySection from '../summary-section/summary-section.component';

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m7">
                    <ItemSection />
                </div>
                <div className="col s12 m3 offset-m2">
                    <SummarySection />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;