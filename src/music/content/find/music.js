import React from 'react';
import '../../../css/main.css';
// import { connect } from "react-redux";
import axios from 'axios';
class Music extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            musicList: [],
            newMusic: [],
            mv:[]
        }
    }
    render() {
        return (
            <div className='mainBox'>
                <div className='banner'>
                    <img src='http://127.0.0.1:3000/img/55_02.png' />
                </div>
                <div>
                    <ul className='listBox'>
                        <li className='fm'><a></a></li>
                        <li className='remd'><a></a></li>
                        <li className='playlist'><a></a></li>
                        <li className='list'><a></a></li>
                    </ul>
                </div>
                <div>
                    <div className='remd_play'>
                        <h1 className='remd_t'>推荐歌单 <span className='mainLeft'></span></h1>
                    </div>
                    <div className='play_c'>
                        <ul className='playlist_c'>
                            {
                                this.state.musicList.map((data) => {
                                    let src = `http://127.0.0.1:3000/` + data.img
                                    return <li id={data._id} onClick={this.click.bind(this)} key={data._id}>
                                        <img src={src} />
                                        <span><i></i></span>
                                        <p className='play_t'>{data.title}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='remd_play'>
                        <h1 className='remd_t'>最新音乐 <span className='mainLeft'></span></h1>
                    </div>
                    <div>
                        <ul className='playlist_c'>
                            {
                                this.state.newMusic.map((data) => {
                                    let src = `http://127.0.0.1:3000/` + data.img
                                    return <li id={data._id} onClick={this.click.bind(this)} key={data._id}>
                                        <img src={src} />
                                        <span><i></i></span>
                                        <p className='play_t'>{data.title}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='remd_play'>
                        <h1 className='remd_t'>推荐MV <span className='mainLeft'></span></h1>
                    </div>
                    <div>
                        <ul className='playlist_c mv'>
                            {
                                this.state.mv.map((data) => {
                                    let src = `http://127.0.0.1:3000/` + data.img
                                    return <li id={data._id} onClick={this.click.bind(this)} key={data._id}>
                                        <img src={src} />
                                        <span><i></i></span>
                                        <p className='play_t'>{data.title}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
    //获取歌单信息
    componentDidMount() {
        axios.get('http://127.0.0.1:3000/music/getList').then((data) => {
            let arr = [];
            for (let i = 0; i < 6; i++) {
                arr.push(data.data[i])
            }
            this.setState({ musicList: arr })
        })
        //最新音乐
        axios.get('http://127.0.0.1:3000/music/getNew').then((data) => {
            let arr = [];
            for (let i = 0; i < 6; i++) {
                arr.push(data.data[i])
            }
            this.setState({ newMusic: arr });
        })
        //mv
        axios.get('http://127.0.0.1:3000/music/getMv').then((data) => {
            let arr = [];
            for (let i = 0; i < 4; i++) {
                arr.push(data.data[i])
            }
            this.setState({ mv: arr });
        })
    }
    //点击获取歌单详情
    click(e) {
        sessionStorage.isId = e.target.parentNode.id;
        const { history } = this.props;
        history.push('/main/listinfo')
    }
}

export default Music;