import React, { Component } from 'react';

import DevTools from './DevTools';
import NewUserContainer from '../users/NewUserContainer';
import UsersContainer from '../users/UsersContainer';


export default class Root extends Component {

    render() {
        const props = this.props;

        return (
            <div>
                <DevTools />
                <NewUserContainer />
                <UsersContainer />
            </div>
        );
    }
}
