<template>
    <div class="back-to-top" @click="top()">
        回到顶部
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        top: function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
}
</script>
<style lang="scss">

</style>


