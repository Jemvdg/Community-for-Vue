<template>
    <ul class="topic-list">
        <li v-for="item,index in topics">
            <router-link v-if="index < 5" :to="'/topic/'+item.id">{{item.title}}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            topics: [],
            nums: 0,
        }
    },
    methods: {
        changed: function (item) {
            this.id = item
            this.$http.get('https://www.vue-js.com/api/v1/topics')
                .then(function (data) {
                    this.topics = data.body.data;
                })
        }
    },
    beforeCreate() {

    },
    created() {
        this.$http.get('https://www.vue-js.com/api/v1/topics')
            .then(function (data) {
                this.topics = data.body.data.filter(function (item, index) {
                    return item.reply_count === 0;
                });
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


