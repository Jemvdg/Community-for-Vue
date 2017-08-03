<template>
    <div class="comment fl">
        {{reply}}&nbsp/
        <span class="total-comment">{{visit}}</span>
    </div>
</template>


<script>


export default {
    props: ['idname'],

    data() {
        return {
            reply: '',
            visit: '',
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
    },
    beforeCreate() {

    },
    created() {
        this.$http.get('https://www.vue-js.com/api/v1/topic/' + this.idname)
            .then(function (data) {
                this.reply = data.body.data.reply_count;
                this.visit = data.body.data.visit_count;
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


