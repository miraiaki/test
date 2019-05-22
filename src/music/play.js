import React from 'react';
import '../css/play.css';
class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [],
            index: 0,
        }
    }
    render() {
        let music = this.state.music;
        let index = this.state.index;
        let src = 'http://127.0.0.1:3000' + music[index].img;
        let href = 'http://127.0.0.1:3000' + music[index].href
        return (
            <div className='bj'>
                <header>
                    <span></span>
                    <div className='play_title'>
                        <h1>{music[index].name}</h1>
                        <p>{music[index].singer}</p>
                    </div>
                </header>
                <div id='musicBj' className='musicBj'>
                    <img className='musicImg' src={src} />
                </div>
                <div className='movieIcon'>
                    <ul>
                        <li><i className='collection'></i></li>
                        <li><i className='download'></i></li>
                        <li><i className='commit'></i></li>
                        <li><i className='share'></i></li>
                    </ul>
                </div>
                <div className='moviePlay'>
                    <audio id='play' src={href} autoPlay></audio>
                    <ul>
                        <li><i className='type' onClick={this.type.bind(this)}></i></li>
                        <li><i className='pre' onClick={this.preMusic.bind(this)}></i></li>
                        <li><i className='stopPlay' onClick={this.play.bind(this)}></i></li>
                        <li><i className='next' onClick={this.nextMusic.bind(this)}></i></li>
                        <li><i className='all'></i></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentWillMount() {
        let music = JSON.parse(sessionStorage.playList);
        let index = Number(sessionStorage.index);
        let src = 'http://127.0.0.1:3000' + music[index].img;
        let href = 'http://127.0.0.1:3000/music/' + music[index].href
        this.setState({ music, index, src, href })
    }
    //播放暂停
    play() {
        if (play.paused) {
            play.play();
            musicBj.style.animationPlayState='running'
        } else {
            play.pause();
            musicBj.style.animationPlayState='paused'
        }
    }
    //下一首
    nextMusic() {
        if (this.state.index < this.state.music.length - 1) {
            this.setState({ index: parseInt(sessionStorage.index) + 1 })
            sessionStorage.index = parseInt(sessionStorage.index) + 1
        } else {
            this.setState({ index: 0 })
            sessionStorage.index = 0
        }
        musicBj.style.animationPlayState='running'
    }
    //上一首
    preMusic() {
        if (this.state.index > 0) {
            this.setState({ index: parseInt(sessionStorage.index) - 1 })
            sessionStorage.index = parseInt(sessionStorage.index) - 1
        } else {
            this.setState({ index: this.state.music.length - 1 })
            sessionStorage.index = this.state.music.length - 1
        }
        musicBj.style.animationPlayState='running'
    }
    //随机
    type() {
        let arr = this.state.music.sort(function () {
            return 0.5 - Math.random()
        })
        this.setState({music:arr})
        musicBj.style.animationPlayState='running'
    }
}
export default Play;