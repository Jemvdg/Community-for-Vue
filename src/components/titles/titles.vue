<template>
    <section class="main for-title">
        <div class="container clearfix">
            <div class="left-bar fl">
                <div class="author">
                    <p class="author-head">
                        <span class="tag-name share" v-if="tab==='share'">分享</span>
                        <span class="tag-name ask" v-if="tab==='ask'">问答</span>
                        <span class="tag-name good" v-if="tab=='good'">精华</span>
                        <span class="tag-name top" v-if="tab==='top'">置顶</span>
                        {{title}}
                    </p>
                    <ul class="author-info">
                        <li>
                            <i class="fa fa-circle"></i>发布于 {{timing(timed)}}
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>作者 {{author}}
                        </li>
                        <li>
                            <i class="fa fa-circle"></i>{{visit}} 次浏览</li>
                        <li>
    
                            <li>
                                <i class="fa fa-circle"></i>来自
                                <span class="tag-name share" v-if="tab==='share'">分享</span>
                                <span class="tag-name ask" v-if="tab==='ask'">问答</span>
                                <span class="tag-name good" v-if="tab=='good'">分享</span>
                                <span class="tag-name top" v-if="tab==='top'">分享</span>
                            </li>
                    </ul>
                </div>
                <div class="content" v-html="this.text">
                </div>
                <ul class="comments">
                    <li class="messages-head">
                        {{replies.length}}回复
                    </li>
                    <li v-for="item,index in replies">
                        <router-link :to="'/user/'+item.author.loginname">
                            <img class="head fl" :src="item.author.avatar_url" alt="fff">
                        </router-link>
                        <div class="messages fl">
                            <p class="messages-title">
                                <router-link :to="'/user/'+item.author.loginname">
                                    {{item.author.loginname}}
                                </router-link>&nbsp
                                <span>{{index+1}}楼
                                    <i class="fa fa-circle"></i>
                                </span>
                                <span>{{timing(item.create_at)}}</span> &nbsp
                                <span class="writer" v-if="item.author.loginname===author">作者</span>
                                <span class="ups fr" v-if="item.ups.length>0">
                                    <i class="fa fa-thumbs-o-up"></i>&nbsp {{item.ups.length}}</span>
                            </p>
                            <p class="messages-content" v-html="item.content"></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="right-bar fr">
                <div class="author-card  right-content">
                    <h2>作者</h2>
                    <p class="avatar">
                        <router-link :to="'/user/'+author">
                            <img :src="avator" alt="fff"> {{author}}
                        </router-link>
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
                <div class="recent-topics  right-content">
                    <h2>作者其它话题</h2>
                    <ul class="other-topics">
                        <li v-for="item,index in recentTopic">
                            <p @click="changed(item.id)">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
                <div class="topic  right-content">
                    <h2>无人回复的话题</h2>
                    <topics></topics>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import topiclist from '../main/topic';
import backTop from '../backTop/backtop';



export default {
    components: {
        topics: topiclist,
        backtop: backTop,
    },
    data() {
        return {
            id: this.$route.params.id,
            datas: [],
            author: '',
            title: '',
            text: '',
            tab: '',
            visit: '',
            timed: '',
            edtime: '',
            avator: '',
            score: '',
            ups: '',
            replies: [],
            recentTopic: [],
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

        },
        changed: function (item) {
            this.id = item
            console.log(this.id)
            this.$http.get('https://www.vue-js.com/api/v1/topic/' + this.id)
                .then(function (data) {
                    this.datas = data;
                    this.text = data.body.data.content;
                    this.title = data.body.data.title;
                    this.author = data.body.data.author.loginname;
                    this.visit = data.body.data.visit_count;
                    this.timed = data.body.data.create_at;
                    this.avator = data.body.data.author.avatar_url;
                    this.replies = data.body.data.replies;

                    if (data.body.data.top) {
                        this.tab = 'top'
                    } else if (data.body.data.good) {
                        this.tab = 'top'
                    } else {
                        this.tab = data.body.data.tab
                    }
                })
                .then(function () {
                    this.$http.get('https://www.vue-js.com/api/v1/user/' + this.author)
                        .then(function (data) {
                            this.score = data.body.data.score;
                            this.recentTopic = data.body.data.recent_topics.slice(0, 5);
                        })
                })
        }
    },
    beforeCreate() {

    },
    created() {
        this.$http.get('https://www.vue-js.com/api/v1/topic/' + this.id)
            .then(function (data) {
                console.log(data)
                this.datas = data;
                this.text = data.body.data.content;
                this.title = data.body.data.title;
                this.author = data.body.data.author.loginname;
                this.visit = data.body.data.visit_count;
                this.timed = data.body.data.create_at;
                this.avator = data.body.data.author.avatar_url;
                this.replies = data.body.data.replies;

                if (data.body.data.top) {
                    this.tab = 'top'
                } else if (data.body.data.good) {
                    this.tab = 'top'
                } else {
                    this.tab = data.body.data.tab
                }
            })
            .then(function () {
                this.$http.get('https://www.vue-js.com/api/v1/user/' + this.author)
                    .then(function (data) {
                        this.score = data.body.data.score;
                        this.recentTopic = data.body.data.recent_topics.slice(0, 5);
                    })
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
        .author {
            border-bottom: 1px solid #e1e1e1;
            background-color: #fff;
            .author-head {
                margin: 0 0 0 1.5%;
                padding: 2% 0;
                line-height: 130%;
                font-size: 22px;
                font-weight: 700;
                span {
                    padding: 2px 5px;
                    border-radius: 2px;
                    background: #80bd01;
                    color: #fff;
                }
                .share {
                    background: #e5e5e5;
                }
                .ask {
                    background: #e5e5e5;
                }
            }
            .author-info {
                @include clearfix;
                li {
                    float: left;
                    color: #838383;
                    i {
                        transform: scale(.4)
                    }
                }
            }
        }

        .markdown-text {
            width: 100%;
            padding: 1.5%;
            background-color: #fff;
            line-height: 2em;
            img {
                max-width: 100%;
            }
        }

        .comments {
            margin-top: 20px;
            background: #fff;
            li.messages-head {
                background-color: #f6f6f6;
                line-height: 30px;
                font-size: 14px;
                color: #1c6132;
            }
            li {
                padding: 0 1%;
                border-top: 1px solid #f0f0f0;
                @include clearfix;
                .head {
                    width: 4%;
                    margin: 1.5% 15px 0 0;
                    border-radius: 2px;
                }
                .messages {
                    width: 91%;
                    margin-top: 1.8%;
                    .messages-title {
                        width: 100%;
                        color: #666;
                        @include clearfix;
                        a {
                            color: #000;
                        }
                        span {
                            color: #08c;
                        }
                        span.writer {
                            padding: 0 2px;
                            background-color: #6ba44e;
                            color: #fff;
                        }
                        i.fa-circle {
                            transform: scale(.6)
                        }
                        .ups {
                            font-size: 15px;
                            color: gray;
                        }
                    }
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
            color: #1c6132;
        }
        .author-card {
            padding-bottom: 2%;
            .avatar {
                font-size: 18px;
                img {
                    display: inline-block;
                    width: 20%;
                    vertical-align: middle;
                }
                a {
                    color: #778087;
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
        .recent-topics {
            ul {
                padding: 0 10px 20px;
                li {
                    width: 100%;
                    margin-top: 10px;
                    p {
                        display: inline-block;
                        width: 100%;
                        color: #778087;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                }
            }
        }
        .topic {
            ul {
                padding: 0 10px 20px;
                li {
                    width: 100%;
                    margin-top: 10px;
                    a {
                        display: inline-block;
                        width: 100%;
                        color: #778087;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>


