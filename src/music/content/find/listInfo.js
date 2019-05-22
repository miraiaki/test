import React from 'react';
import axios from 'axios';
import '../../../css/listInfo.css';
class ListInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
            musicList: []
        }
    }
    render() {
        let src = 'http://127.0.0.1:3000/' + this.state.music.img
        return (
            <div className='listinfo_main'>
                <header>
                    <div className='list_header'>
                        <span></span>
                        <h1>歌单</h1>
                        <div>
                            <span className='more'></span>
                            <span className='musicList'></span>
                        </div>
                    </div>
                    <div className='listHead'>
                        <div className='listImg'><img src={src} /></div>
                        <div className='listTitle'>
                            <h2>{this.state.music.title}</h2>
                            <p>{this.state.music.autor}</p>
                        </div>
                    </div>
                    <div>
                        <ul className='collect'>
                            <li><i className='first'></i><p>3321</p></li>
                            <li><i className='first'></i><p>3321</p></li>
                            <li><i className='first'></i><p>3321</p></li>
                            <li><i className='first'></i><p>3321</p></li>
                        </ul>
                    </div>
                </header>
                <div className='content'>
                    <div className='playTitle'>
                        <p className='playMore'>播放全部(共<span>{this.state.musicList.length}</span>首)</p>
                        <div className='more'><i></i><span>多选</span></div>
                    </div>
                    <div>
                        <ol className='musicList'>
                            {
                                this.state.musicList.map((data) => {
                                    return <li onClick={this.toPlay.bind(this)} id={data._id} key={data._id}>
                                                <p className='musicName'>{data.name}</p>
                                                <p>{data.singer}</p>
                                           </li>
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let _id = sessionStorage.isId;
        axios.get('http://127.0.0.1:3000/music/getMusic', { params: { _id } }).then((data) => {
            this.setState({ music: data.data })
            this.setState({ musicList: data.data.music })
        })
    }
    //跳转到播放页面
    toPlay(e){
        sessionStorage.movieId = e.target.parentNode.id;
        sessionStorage.playList = JSON.stringify(this.state.musicList);
        for(let i=0;i<this.state.musicList.length;i++){
            if(this.state.musicList[i]._id == e.target.parentNode.id){
                sessionStorage.index = i;
            }
        }
        const {history} = this.props;
        history.push('/play')
        //添加到最近播放
        axios.post('http://127.0.0.1:3000/music/addRecent',{id:sessionStorage.movieId}).then((data)=>{
            console.log(data);
        })
    }
}
export default ListInfo;