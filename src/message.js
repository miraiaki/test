import React from 'react';
import axios from 'axios';
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h1>留言板</h1>
                    {
                        this.fillter().map((data, i) => {
                            return <li key={i}>
                                <p>
                                    <span>{data.name}</span>
                                    <span>{data.content}</span>
                                    <span>发表于{data.time}</span>
                                </p>
                            </li>
                        })
                    }
                </div>
                <div>
                    <label>姓名</label><input ref='name' type="text" />
                    <label>留言:</label><textarea ref='text' cols="30" rows="10"></textarea>
                    <button onClick={this.submitBtn.bind(this)}>提交</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.post('http://127.0.0.1:3000/getMsg').then((data) => {
            this.setState({ message: data.data })
        })
    }
    submitBtn() {
        let date = new Date();
        let infoTimeYear = date.getFullYear();
        let infoTimeMonth = date.getMonth();
        let infoTimeDate = date.getDate();
        let infoTimeHours = date.getHours();
        if (infoTimeHours < 10) {
            infoTimeHours = "0" + infoTimeHours;
        }
        let infoTimeMinutes = date.getMinutes();
        if (infoTimeMinutes < 10) {
            infoTimeMinutes = "0" + infoTimeMinutes;
        }
        let infoTimeSecond = date.getSeconds();
        if (infoTimeSecond < 10) {
            infoTimeSecond = "0" + infoTimeSecond;
        }
        let infoTime = `${infoTimeYear}-${infoTimeMonth + 1}-${infoTimeDate} ${infoTimeHours}:${infoTimeMinutes}:${infoTimeSecond}`;
        let param = {
            count: this.state.message.length + 1 + '',
            name: this.refs.name.value,
            content: this.refs.text.value,
            time: infoTime
        }

        axios.post('http://127.0.0.1:3000/addMsg', param).then((data) => {
            axios.post('http://127.0.0.1:3000/getMsg').then((data) => {
                this.setState({ message: data.data })
            })
        })

    }
    fillter() {
       return  this.state.message.sort(function (a, b) {
            return b.count - a.count
        })
    }
}
export default Message;
