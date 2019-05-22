import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import '../css/main.css';
// 组件
import Findmusic from './content/findMusic.js';
import Mymusic from './content/myMusic.js';
import Friend from './content/friend.js';
import User from './content/user.js';
import Listinfo from './content/find/listInfo.js';
import Recent from './content/recentPlay.js';
class Main extends React.Component {
    render() {
        return (
            <div>
       
                <div>
                    <Router>
                        <div>
                            <Route path="/main/find" component={Findmusic} />
                            <Route path="/main/mymusic" component={Mymusic} />
                            <Route path="/main/friend" component={Friend} />
                            <Route path="/main/user" component={User} />
                            <Route path="/main/listinfo" component={Listinfo} />
                            <Route path="/main/recent" component={Recent} />
                        </div>
                    </Router>
                </div>
                <footer className='footer'>
                    <ul>
                        <li onClick={this.find.bind(this)} className='find'><i></i><a>发现音乐</a></li>
                        <li onClick={this.mymusic.bind(this)} className='my'><i></i><a>我的音乐</a></li>
                        <li onClick={this.friend.bind(this)} className='friend'><i></i><a>朋友</a></li>
                        <li onClick={this.user.bind(this)} className='user'><i></i><a>账号</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
    find(){
        const {history} = this.props;
        history.push('/main/find/music')
    }
    mymusic(){
        const {history} = this.props;
        history.push('/main/mymusic')
    }
    friend(){
        const {history} = this.props;
        history.push('/main/friend')
    }
    user(){
        const {history} = this.props;
        history.push('/main/user')
    }
}
export default Main;