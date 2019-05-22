import React from 'react';
import '../../css/mymusic.css';

class Mymusic extends React.Component {
    render() {
        return (
            <div className='mymusic'>
                <header className='myHeader'>
                    <a>更多</a>
                    <h1>我的音乐</h1>
                    <span className='myListener'></span>
                </header>
                <div className='myMain'>
                    <ul className='myContent'>
                        <li>
                            <i className='load'></i>
                            <div className='myRight'>
                                <a className='loadT'>本地音乐</a>
                                <div>
                                    <span className='loadCount'></span>
                                    <span className='right'></span>
                                </div>
                            </div>
                        </li>
                        <li onClick={this.backRecnt.bind(this)}>
                            <i className='recentPlay'></i>
                            <div className='myRight'>
                                <a className='loadT'>最近播放</a>
                                <div>
                                    <span className='recentCount'></span>
                                    <span className='right'></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i className='myRadio'></i>
                            <div className='myRight'>
                                <a className='loadT'>我的电台</a>
                                <div>
                                    <span className='radioCount'></span>
                                    <span className='right'></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i className='mycollection'></i>
                            <div className='myRight'>
                                <a className='loadT'>我的收藏</a>
                                <div>
                                    <span className='collectCount'></span>
                                    <span className='right'></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='myMusiclist'>
                    <ul>
                        <li>
                            <i className='myleft'></i>
                            <p>我创建的歌单(<span></span>)</p>
                        </li>
                        <li>
                            <i className='myleft'></i>
                            <p>我收藏的歌单(<span></span>)</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    backRecnt(){
        const {history} = this.props;
        history.push('/main/recent')
    }
}
export default Mymusic;