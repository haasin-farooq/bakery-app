import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
    const clientView = useSelector(state => state.view.clientView);

    if(clientView) {
        return <Redirect to='/signin' />
    }
    else {
        return <Redirect to='/additem' />
    }
}

export default HomePage;