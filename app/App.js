import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../app/store'; //Import the store
import Home from '../app/components/home'; //Import the component file
import Facetime from '../app/components/facetime' //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Facetime />
            </Provider>
        );
    }
}
