<template>
    <div class="tag fl" >
        <span class="tag-name share" v-if="item.tab==='share' && !item.good && !item.top">分享</span>
        <span class="tag-name ask" v-if="item.tab==='ask' && !item.good && !item.top">问答</span>
        <span class="tag-name good" v-if="item.good && !item.top">精华</span>
        <span class="tag-name top" v-if="item.top">置顶</span>
    </div>
</template>
<script>
export default {
    props: ['item'],

}
</script>
<style lang="scss">

</style>


