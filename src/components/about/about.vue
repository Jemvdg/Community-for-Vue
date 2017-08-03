<template>
    <section class="main for-about">
        <div class="container clearfix">
            <div class="left-bar fl">
                <div class="location">
                    <a href="#">主页</a>&nbsp/&nbsp
                    <span>关于</span>
                </div>
                <div class="content">
                    <div class="context">
                        <div class="about left-content">
                            <h1>关于</h1>
                            <p>
                                Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。
                                <br>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。
                                <br>
                                <a href="#">
                                    <img src="../../assets/group.png" alt="fff">
                                </a>
                            </p>
                            <p>群二维码</p>
                            <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
                        </div>
                        <div class="dev left-content">
                            <h1>移动客户端</h1>
                            <p>
                                客户端目前正在加急开发中…静请期待
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-bar fr">
                <div class="login right-content">
                    <h1>CNode：Node.js专业中文社区</h1>
                    <p>您可以
                        <a href="#">登录</a> 或
                        <a href="#">注册</a> , 也可以</p>
                    <button type="button">通过 Github 登录</button>
                </div>
                <div class="adv right-content ">
                    <a href="#">
                        <img src="../../assets/adv1.png" alt="fff">
                    </a>
                    <a href="#">
                        <img src="../../assets/adv2.png" alt="fff">
                    </a>
                    <a href="#">
                        <img src="../../assets/adv3.png" alt="fff">
                    </a>
                </div>
                <div class="code right-content">
                    <h2>社区交流群</h2>
                    <img class="scan-code" src="../../assets/code.png" alt="fff">
                    <p>扫码快速入群</p>
                </div>
                <div class="link right-content">
                    <h2>友情社区</h2>
                    <ul>
                        <li>
                            <a href="#">微信小程序学习社群</a>
                        </li>
                        <li>
                            <a href="#">CTOLib码库</a>
                        </li>
                        <li>
                            <a href="#">汇智网</a>
                        </li>
                    </ul>
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
.for-about {
    padding: 15px 0;
    background: #e1e1e1;
    .left-bar {
        width: 75%;
        background: #fff;
        .location {
            width: 100%;
            background: #f6f6f6;
            line-height: 40px;
            color: #80bd01;
            text-indent: 1%;
            a {
                color: #80bd01;
            }
            span {
                color: #999;
            }
        }
        .content {
            width: 100%;
            padding: 15px 2%;
            .left-content+.left-content {
                margin-top: 20px;
            }
            h1 {
                border-bottom: 1px solid #eee;
                line-height: 40px;
                font-size: 24px;
            }
            p {
                font-size: 15px;
                line-height: 2em;
                letter-spacing: 1.5px;
                a {
                    font-size: 15px;
                    color: #08c;
                }
            }

            .link {
                h1 {
                    margin-bottom: 10px;
                }
                img {
                    display: inline-block;
                    width: 30%;
                }
            }

            .pho p {
                margin-top: 5px;
                a {
                    color: #778087;
                }
            }
        }
    }
    .right-bar {
        width: 23%;
        .right-content {
            width: 100%;
            margin-bottom: 13px;
            border-radius: 2px;
            background: #fff;
        }
        h2 {
            background: #f6f6f6;
            line-height: 42px;
            font-size: 12px!important;
            text-indent: 10px;
            color: #333;
        }
        .login {
            padding: 10px;
            h1 {
                margin: 19px 0 24px;
                font-size: 15px!important;
                color: #333;
            }
            p {
                color: #333;
                a {
                    color: #778087;
                }
            }
            button {
                width: 60%;
                height: 34px;
                margin-top: 10px;
                border: none;
                border-radius: 2px;
                background-color: #5bc0de;
                font-size: 15px;
                color: #fff;
                cursor: pointer;
            }
        }
        .adv {
            width: 100%;
            padding: 10px;
            img {
                width: 100%;
            }
            a {
                display: inline-block;
            }
            a+a {
                margin-top: 10px;
            }
        }
        .link {
            a {
                display: block;
                padding: 10px;
                margin-top: 5px;
            }
            img {
                width: 70%;
            }
        }
        .code {
            .scan-code {
                width: 60%;
                margin: 10px auto;
            }
            p {
                padding-bottom: 20px;
                text-align: center;
            }
        }
    }
}
</style>


