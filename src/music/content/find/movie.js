import React from 'react';
import '../../../css/movie.css';
import axios from 'axios';
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }
    render() {

        return (
            <div>
                <ul className='videoBox'>
                    {
                        this.state.movie.map((data) => {
                        let src = `http://127.0.0.1:3000/` + data.href
                            return <li key={data._id}>
                                <div className='video'><video src={src}></video></div>
                                <div className='playIcon'>
                                    <div className='playCount'><i></i><span>{data.play}</span></div>
                                    <div className='playTime'><i></i><span>11:00</span></div>
                                </div>
                                <div className='videoMain'>
                                    <p className='videoTitle'>{data.title}</p>
                                    <div>
                                        <i className='likeIcon'></i>
                                        <p className='like'>{data.like}</p>
                                    </div>
                                    <div>
                                        <i className='commentIcon'></i>
                                        <p className='comment like'>{data.comments}</p>
                                    </div>
                                    <span className='videoInfo'></span>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:3000/music/getMovie').then((data) => {
            let arr = [];
            for (let i = 0; i < 5; i++) {
                arr.push(data.data[i])
            }
            this.setState({ movie: arr })
        })
    }
}
export default Movie;