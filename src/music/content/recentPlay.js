import React from 'react';
import '../../css/recent.css';
import axios from 'axios';
class Recent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }
    render() {
        return (
            <div>
                <header className='recent'>
                    <span></span>
                    <p>最近播放的音乐</p>
                    <span className='recentIcon'></span>
                </header>
                <div>
                    <div className='recentAll'>
                        <span></span>
                        <p>播放全部</p>
                        <span>多选</span>
                    </div>
                    <ul className='recentMain'>
                        {
                            this.state.movie.map((data) => {
                                return <li key={data._id}>
                                    <p className='recentTitle'>{data.name}</p>
                                    <p className='recentSinger'>{data.singer}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:3000/music/getRecent').then((data) => {
            this.setState({ movie: data.data });
        })
    }
}
export default Recent;