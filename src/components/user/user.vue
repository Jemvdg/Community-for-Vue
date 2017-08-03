<template>
    <section class="main for-title">
        <div class="container clearfix">
            <div class="left-bar fl">
                <div class="left-content for-details">
                    <h1 class="main-page">主页/</h1>
                    <div class="details-info">
                        <p class="avatar">
                            <img :src="cover" alt="fff"> {{author}}
                        </p>
                        <ul class="details">
                            <li class="collected">{{collect}}个话题收藏</li>
                            <li>
                                <i class="fa fa-home"></i>
                                <a href="#"> http://{{author}}com</a>
                            </li>
                            <li>
                                <i class="fa fa-map-marker"></i>北京</li>
                            <li>
                                <i class="fa  fa-github"></i>
                                <a href="#"> @{{author}}</a>
                            </li>
                            <li>
                                <i class="fa fa-twitter"></i>
                                <a href="#">shit微博</a>
                            </li>
                        </ul>
                        <p class="register">注册时间 {{timing(register)}}</p>
                    </div>
                </div>
                <div class="left-content for-recent-topic">
                    <h1>最近创建的话题</h1>
                    <ul class="content">
                        <li v-for="item,index in topicArr" v-if="index<5">
                            <img class="head fl" :src="cover" alt="fff">
                            <usertopic :idname="item.id"></usertopic>
                            <div class="title fl">
                                <router-link :to="'/topic/'+item.id">{{item.title}}</router-link>
                            </div>
                            <div class="time fr">
                                <img src="../../assets/icon1.jpeg" alt="fff">
                                <span class="day"> {{timing(item.last_reply_at)}}</span>
                            </div>
                        </li>
                    </ul>
                    <p class="more">
                        <a href="#">查看更多»</a>
                    </p>
                </div>
                <div class="left-content for-recent-replies">
                    <h1>最近参与的话题</h1>
                    <ul class="content">
                        <li v-for="item,index in repliesArr">
                            <img class="head fl" :src="item.author.avatar_url" alt="fff">
                            <usertopic :idname="item.id"></usertopic>
                            <div class="title fl">
                                <router-link :to="'/topic/'+item.id">{{item.title}}</router-link>
                            </div>
                            <div class="time fr">
                                <img src="../../assets/icon1.jpeg" alt="fff">
                                <span class="day"> {{timing(item.last_reply_at)}}</span>
                            </div>
    
                        </li>
                    </ul>
                    <p class="more">
                        <a href="#">查看更多»</a>
                    </p>
                </div>
    
            </div>
            <div class="right-bar fr">
                <div class="author-card  right-content">
                    <h2>作者</h2>
                    <p class="avatar">
                        <img :src="cover" alt="fff"> {{author}}
                    </p>
                    <p class="score">积分：{{score}}</p>
                    <p class="words">“ 狼叔说：少抱怨，多思考，未来更美好 ”</p>
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
                <div class="code right-content">
                    <h2>社区交流群</h2>
                    <img class="scan-code" src="../../assets/code.png" alt="fff">
                    <p>扫码快速入群</p>
                </div>
            </div>
        </div>
        <backtop></backtop>
    </section>
</template>
<script>
import backTop from '../backTop/backtop';
import userTopic from './userTopic';



export default {
    components: {
        backtop: backTop,
        usertopic: userTopic,
    },
    data() {
        return {
            loginname: this.$route.params.id,
            author: '',
            title: '',
            text: '',
            cover: '',
            collect: '',
            register: '',
            score: '',
            topicArr: {},
            repliesArr: {},

        }
    },
    methods: {
        timing: function (item) {
            var times = Date.parse(item);
            var now = Date.now()
            var val = Math.floor(((now - times) / 1000) / 60);//单位为分钟
            if (val < 60) {
                return val + '分钟前';
            }
            if (val > 60 && val < 1440) {
                val = Math.floor(val / 60);
                return val + '小时前';
            }
            if (val > 1440 && val < 40320) {
                val = Math.floor(val / 1440);
                return val + '天前';
            }
            if (val > 40320 && val < 483840) {
                val = Math.ceil(val / 40320);
                return val + '个月前';
            }
            if (val > 483840) {
                val = Math.floor(val / 483840);
                return val + '年前';
            }

        },
    },
    beforeCreate() {

    },
    created() {

        this.$http.get('https://www.vue-js.com/api/v1/user/' + this.loginname)
            .then(function (data) {
                console.log(data.body.data)
                this.cover = data.body.data.avatar_url;
                this.author = data.body.data.loginname;
                this.score = data.body.data.score;
                this.register = data.body.data.create_at;
                this.topicArr = data.body.data.recent_topics;
                this.repliesArr = data.body.data.recent_replies;

            })
        this.$http.get('https://www.vue-js.com/api/v1/topic_collect/' + this.loginname)
            .then(function (data) {
                this.collect = data.body.data.length;
            })




    },
    beforeMount() {

    },
    mounted() {

    },
}
</script>
<style lang="scss">
@import '../../scss/_mixin.scss';

.for-title {
    .left-bar {
        width: 75%;
        .left-content {
            margin-bottom: 20px;
            background-color: #fff;
            h1 {
                margin: 0;
                padding: 1.5%;
                background-color: #f6f6f6;
                font-size: 15px;
            }
            .main-page {
                color: #80bd01;
            }
        }
        .for-details {
            .details-info {
                padding: 1.5%;
                .avatar {
                    padding-top: 10px;
                    font-size: 18px;
                    color: #778087;
                    img {
                        display: inline-block;
                        width: 5%;
                        vertical-align: middle;
                    }
                }
                .details {
                    li {
                        margin-bottom: 15px;
                        line-height: 20px;
                        font-size: 15px;
                        color: #778087;
                        i {
                            width: 25px;
                            text-align: center;
                            transform: scale(1.5)
                        }
                        a {
                            color: #778087;
                        }
                    }
                }
                .register {
                    font-size: 14px;
                    color: #ababab;
                }
            }
        }
        .for-recent-topic {
            .content {
                li {
                    padding: 0.5%;
                    border-bottom: 1px solid #f0f0f0;
                    @include clearfix;
                    .head {
                        display: inline-block;
                        width: 5%;
                    }
                    .comment {
                        min-width: 8%;
                        line-height: 51px;
                        font-size: 14px;
                        color: #9e78c0;
                        text-align: center;
                        .total-comment {
                            color: #b4b4b4;
                        }
                    }
                    .title {
                        max-width: 70%;
                        margin-top: 15px;
                        a {
                            display: inline-block;
                            width: 100%;
                            font-size: 15px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .time {
                        padding-right: 1%;
                        line-height: 51px;
                        img {
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            margin-right: 20px;
                            vertical-align: middle;
                            transform: translateY(-2px);
                        }
                        span {
                            color: #778087;
                        }
                    }
                }
            }
            .more {
                padding: 0 0 1.5% 1.5%;
                a {
                    font-size: 18px;
                    color: #666;
                }
            }
        }
        .for-recent-replies {
            .content {
                li {
                    padding: 0.5%;
                    border-bottom: 1px solid #f0f0f0;
                    @include clearfix;
                    .head {
                        display: inline-block;
                        width: 4.5%;
                    }
                    .comment {
                        min-width: 8%;
                        line-height: 51px;
                        font-size: 14px;
                        color: #9e78c0;
                        text-align: center;
                        .total-comment {
                            color: #b4b4b4;
                        }
                    }
                    .title {
                        max-width: 70%;
                        margin-top: 15px;
                        a {
                            display: inline-block;
                            width: 100%;
                            font-size: 15px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .time {
                        padding-right: 1%;
                        line-height: 51px;
                        img {
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            margin-right: 20px;
                            vertical-align: middle;
                            transform: translateY(-2px);
                        }
                        span {
                            color: #778087;
                        }
                    }
                }
            }
            .more {
                padding: 0 0 1.5% 1.5%;
                a {
                    font-size: 18px;
                    color: #666;
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
        .author-card {
            padding-bottom: 2%;
            .avatar {
                font-size: 18px;
                color: #778087;
                img {
                    display: inline-block;
                    width: 20%;
                    vertical-align: middle;
                }
            }
            .score {
                text-indent: 3%;
                font-size: 14px;
            }
            .words {
                font-style: italic;
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


