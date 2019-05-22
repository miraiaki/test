import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import '../../css/main.css';
//组件
import Music from './find/music.js';
import Movie from './find/movie.js';
import Radio from './find/radio.js';
import '../../css/main.css';
class Findmusic extends React.Component {
    render() {
        return (
            <div>
                <header className='findmusic'>
                    <i className='listener'></i>
                    <div className='searchBox'>
                        <i className='search'></i>
                        <input type='text' placeholder='搜索音乐、视频、歌词、电台' />
                    </div>
                    <i className='play'></i>
                </header>
                <div className='classify'>
                    <ul className='clsBox'>
                        <li className='active' onClick={this.backMusic.bind(this)}><a>音乐</a></li>
                        <li onClick={this.backMv.bind(this)}><a>视频</a></li>
                        <li onClick={this.backRadio.bind(this)}><a>电台</a></li>
                    </ul>
                </div>
                <div>
                    <Router>
                        <div>
                            <Route path="/main/find/music" component={Music} />
                            <Route path="/main/find/movie" component={Movie} />
                            <Route path="/main/find/radio" component={Radio} />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
    backMusic(){
        const {history} = this.props;
        history.push('/main/find/music')
    }
    backMv(){
        const {history} = this.props;
        history.push('/main/find/movie')
    }
    backRadio(){
        const {history} = this.props;
        history.push('/main/find/radio')
    }
}
export default Findmusic;