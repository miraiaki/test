import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import Reg from '../music/reg.js'
import Main from '../music/main.js'
import Login from '../music/login.js'
import Play from '../music/play.js'
class Nav extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/main" component={Main} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/play" component={Play} />
                </div>
            </Router>
        )
    }
}
export default Nav;