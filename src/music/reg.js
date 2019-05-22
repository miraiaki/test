import React from 'react';
import "../css/reg.css";
import axios from 'axios'
class Reg extends React.Component {

    render() {
        return (
            <div>
                <header className="title">
                    <a href="#"></a>
                    <h1>手机号注册</h1>
                </header>
                <div className="main">
                    <div className="phone">
                        <i className='phoneIcon'></i>
                        <span className="text">+86</span>
                        <input ref='phone' type="text" placeholder="请输入手机号" />
                    </div>
                    <div className="psd">
                        <i className='pwdIcon'></i>
                        <input ref='pwd' id='pwd' type="password" placeholder="设置登录密码，不少于6位" />
                    </div>

                    <div>
                        <button className='btn' onClick={this.nextBtn.bind(this)}>下一步</button>
                    </div>
                </div>
                <footer>
                    <p className='other_t'></p>
                    <ul className='other'>
                        <li><i></i></li>
                        <li><i></i></li>
                        <li><i></i></li>
                        <li><i></i></li>
                    </ul>
                </footer>
            </div>
        )
    }

    nextBtn(e) {
        if (this.refs.phone.value.length < 11) {
            alert('手机号码需要十一位数字')
        } else {
            //检测手机号是否重复
            axios.get('http://127.0.0.1:3000/music/checkPhone', { params: { phone: this.refs.phone.value } }).then( (data)=> {
                if (data.data.length > 0) {
                    alert('手机号重复')
                    return;
                } else {
                    if (pwd.value.length < 6) {
                        alert('密码需要至少6位')
                        return;
                    } else {
                        let param = {
                            phone: this.refs.phone.value,
                            pwd: this.refs.pwd.value
                        }
                        axios.post('http://127.0.0.1:3000/music/reg', param).then( (data)=> {
                            let { history } = this.props;
                            history.push('/login')
                        })
                    }
                }
            })
        }
    }
}
export default Reg;