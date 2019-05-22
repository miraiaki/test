import React from 'react';
import "../css/reg.css";
import axios from 'axios'
class Login extends React.Component{
    render(){
        return(
            <div>
                <header className="title">
                    <a href="#"></a>
                    <h1>手机号登录</h1>
                </header>
                <div className="main">
                    <div className="login">
                        <i className='phoneIcon'></i>
                        <input ref='phone' type="text" placeholder="手机号" />
                    </div>
                    <div className="psd">
                        <i className='pwdIcon'></i>
                        <input ref='pwd' id='pwd' type="password" placeholder="密码" />
                    </div>
                    <div>
                        <button className='btn' onClick={this.loginBtn.bind(this)}>登录</button>
                    </div>
                    <div className='reset'>
                        <a>重设密码</a>
                    </div>
                </div>
            </div>
        )
    }
    loginBtn(){
        let param = {
            phone : this.refs.phone.value,
            pwd : this.refs.pwd.value
        }
        axios.post('http://127.0.0.1:3000/music/login',param).then((data)=>{
            if(data.data.length==1){
                const {history} = this.props
                history.push('/main/find/movie')
            }else{
                alert('手机号或密码错误')
            }
        })
    }
}
export default Login;