import React from 'react';
import '../../css/user.css';
class User extends React.Component {
    render() {
        return (
            <div className='userBox'>
                <header className='headerBox'>
                    <h1>账号</h1>
                    <i className='headerIcon'></i>
                </header>
                <div className='userTop'>
                    <div className='userImg'><img /></div>
                    <div className='userName'>
                        <p>mirai</p>
                        <span></span>
                    </div>
                    <div>
                        <span className='signIcon'></span>
                    </div>
                </div>
                <div>
                    <ul className='dynamic'>
                        <li>
                            <span>动态</span>
                            <p>1</p>
                        </li>
                        <li>
                            <span>关注</span>
                            <p>1</p>
                        </li>
                        <li>
                            <span>粉丝</span>
                            <p>1</p>
                        </li>
                        <li>
                            <span></span>
                            <p>我的资料</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='userMain myMsg'>
                        <i className='msg'></i>
                        <p>我的消息</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>会员中心</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>商场</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>在线听歌免流量</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>设置</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>扫一扫</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>个性换肤</p>
                        <i className='userRight'></i>
                    </div>
                    <div className='userMain'>
                        <i className='msg'></i>
                        <p>夜间模式</p>
                        <i className='userRight'></i>
                    </div>
                </div>
                <div>
                    <p className='loginOut'>退出登录</p>
                </div>
            </div>
        )
    }
}
export default User;