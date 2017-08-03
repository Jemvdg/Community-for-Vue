<template>
    <section class="main for-login">
        <div class="container clearfix">
            <div class="left-bar fl to-login">
                <div class="location">
                    <a href="#">主页</a>&nbsp/&nbsp
                    <span>登录</span>
                </div>
                <div class="sign-up">
                    <form action="/">
                        <div class="username info">
                            <label for="username">用户名</label>
                            <input type="text" name="username" id="username">
                        </div>
                        <div class="password info">
                            <label for="password">密码</label>
                            <input type="password" name="password" id="password">
                        </div>
                        <div class="ctrl clearfix">
                            <input class="sign" type="button" value="登录">
                            <input class="sign-github" type="button" value="通过 GitHub 登录">
                            <a class="forget" href="#">忘记密码了?</a>
                        </div>
                    </form>
    
                </div>
            </div>
            <div class="right-bar fr">
                <div class="about  right-content">
                    <h2>关于</h2>
                    <div class="context">
                        <p>CNode：Node.js专业中文社区</p>
                        <ul>
                            <li class="title">在这里你可以：</li>
                            <li class="todo">向别人提出你遇到的问题</li>
                            <li class="todo">帮助遇到问题的人</li>
                            <li class="todo">分享自己的知识</li>
                            <li class="todo">和其它人一起进步</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
          <backtop></backtop>
    </section>
</template>

<script>
import backTop from '../backTop/backtop';

export default {
    components: {
        backtop: backTop,
    }
}
</script>

<style lang="scss">
.for-login {
    padding: 15px 0;
    background: #e1e1e1;
    .left-bar {
        width: 75%;
        background: #fff;
        .location {
            width: 100%;
            background: #f6f6f6;
            line-height: 40px;
            color: #999;
            text-indent: 1%;
            a {
                color: #80bd01;
            }
            span {
                color: #999;
            }
        }
        .sign-up {
            width: 100%;
            background: #fff;
            padding: 50px 0;
            form {
                .info {
                    margin-bottom: 10px;
                    label {
                        display: inline-block;
                        width: 20%;
                        margin-right: 2%;
                        font-size: 14px;
                        color: #000;
                        text-align: right;
                    }
                    input {
                        width: 30%;
                        height: 30px;
                    }
                }
                .ctrl {
                    margin: 30px 0 0 22%;
                    line-height: 34px;
                    .sign {
                        float: left;
                        width: 7%;
                        height: 34px;
                        border: none;
                        border-radius: 3px;
                        background-color: #08c;
                        color: #fff;
                    }
                    .sign-github {
                        float: left;
                        width: 20%;
                        height: 34px;
                        margin: 0 2% 0 0.5%;
                        border: none;
                        border-radius: 3px;
                        background-color: #5bc0de;
                        color: #fff;
                    }
                    .forget {
                        font-size: 14px;
                        color: #778087;
                    }
                }
            }
        }
    }
    .to-login {
        margin-bottom: 100px;
    }
    .right-bar {
        width: 23%;
        .right-content {
            width: 100%;
            margin-bottom: 13px;
            border-radius: 2px;
            background: #fff;
            h2 {
                background: #f6f6f6;
                line-height: 42px;
                font-size: 12px!important;
                text-indent: 10px;
                color: #333;
            }
            .context {
                padding: 5%;
                p {
                    font-size: 14px;
                }
                ul {
                    list-style: disc inside;
                    li.title {
                        margin: 20px 0 20px;
                        font-size: 14px;
                        list-style: none;
                    }
                    li.todo {
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>


