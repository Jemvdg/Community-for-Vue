<template>
    <div>
        <div class="classify">
            <span v-for="items,index in tabs" :class="locate===index? 'active':''" @click="changeType(items.rotate,index)">{{items.type}}</span>
        </div>
        <ul class="content">
            <li v-for="item,index in topics">
                <router-link :to="'/user/'+item.author.loginname">
                    <img class="head fl" :src="item.author.avatar_url" alt="fff">
                </router-link>
                <div class="comment fl">{{item.reply_count}}&nbsp/
                    <span class="total-comment">{{item.visit_count}}</span>
                </div>
                <tag :item="item"></tag>
                <div class="title fl">
                    <router-link :to="'/topic/'+item.id">{{item.title}}</router-link>
                </div>
                <div class="time fr">
                    <img src="../../assets/icon1.jpeg" alt="fff">
                    <span class="day"> {{timing(item)}} </span>
                </div>
            </li>
        </ul>
        <div class="pages">
            <ul>
                <li @click="prePage()">
                    <<</li>
                        <li v-for="pa,index in pages" @click="changePage(pa.num)" :class="pagedex===pa.num? 'active':''">{{pa.num}}</li>
                        <li>...</li>
                        <li @click="nextPage()">>></li>
            </ul>
        </div>
    </div>
</template>
<script>
import tag from '../tag/tag';


export default {
    components: {
        tag: tag,
    },
    data() {
        return {
            topics: [],
            locate: 0,
            pagedex: 1,
            classify: 'all',
            tabs: [
                {
                    type: '全部',
                    rotate: 'all',
                },
                {
                    type: '精华',
                    rotate: 'good',
                },
                {
                    type: 'weex',
                    rotate: 'weex',
                },
                {
                    type: '分享',
                    rotate: 'share',
                },
                {
                    type: '问答',
                    rotate: 'ask',
                },
                {
                    type: '招聘',
                    rotate: 'job',
                },
            ],
            pages: [
                {
                    num: 1,
                },
                {
                    num: 2,
                },
                {
                    num: 3,
                },
                {
                    num: 4,
                },
                {
                    num: 5,
                },
            ]
        }
    },
    methods: {
        timing: function (item) {
            var times = Date.parse(item.last_reply_at);
            var now = Date.now()
            var val = Math.floor(((now - times) / 1000) / 60);
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
        changeType: function (a, b) {
            this.pagedex = 1;
            this.pages = [];
            for (var i = 1; i < 6; i++) {
                this.pages.push({ num: i })
            };
            this.$http.get('https://www.vue-js.com/api/v1/topics/?tab=' + a)
                .then(function (data) {
                    this.topics = data.body.data;
                });
            this.locate = b;
        },
        changePage: function (c) {
            if (c > 21) {
                return;
            }
            this.pagedex = c;
            this.$http.get('https://www.vue-js.com/api/v1/topics/?tab=' + this.classify + '&page=' + c)
                .then(function (data, c) {
                    this.topics = data.body.data;
                });
            this.pages = [];
            if (c < 17) {
                for (var i = c; i < c + 5; i++) {
                    this.pages.push({ num: i })
                };
            } else {
                for (var i = 17; i < 22; i++) {
                    this.pages.push({ num: i })
                };
            }

        },
        prePage: function () {
            if (this.pagedex === 1) {
                return;
            }
            this.pagedex -= 1;
            this.$http.get('https://www.vue-js.com/api/v1/topics/?tab=' + this.classify + '&page=' + this.pagedex)
                .then(function (data) {
                    this.topics = data.body.data;
                });
            this.pages = [];
            for (var i = this.pagedex; i < this.pagedex + 5; i++) {
                this.pages.push({ num: i })
            };
        },
        nextPage: function () {
            if (this.pagedex === 21) {
                return;
            }
            this.pagedex += 1;
            this.$http.get('https://www.vue-js.com/api/v1/topics/?tab=' + this.classify + '&page=' + this.pagedex)
                .then(function (data) {
                    this.topics = data.body.data;
                });
            this.pages = [];
            if (this.pagedex < 17) {
                for (var i = this.pagedex; i < this.pagedex + 5; i++) {
                    this.pages.push({ num: i })
                };
            } else {
                for (var i = 17; i < 22; i++) {
                    this.pages.push({ num: i })
                };
            }
        }
    },
    beforeCreate() {

    },
    created() {
        this.$http.get('https://www.vue-js.com/api/v1/topics/?tab=all')
            .then(function (data) {
                // console.log(data)
                this.topics = data.body.data;
            })
    },
    beforeMount() {

    },
    mounted() {

    },
}
</script>
<style lang="scss">

</style>


