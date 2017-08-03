<template>
  <div>
    <header>
      <div class="container">
        <div class="logo-bar clearfix">
          <img class="logo fl" src="./assets/logo.png" alt="fff">
          <span class="logoname fl"> Vue.js</span>
          <div class="search-box fl">
            <input class="search" type="text">
            <button class="search-btn" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <ul class="main-nav fr clearfix">
            <li>
              <router-link to='/'>首页</router-link>
            </li>
            <li>
              <a href="#">VUE 2.0</a>
            </li>
            <li>
              <a href="#">参考资料</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <router-link to='/about'>关于</router-link>
            </li>
            <li>
              <a href="#">注册</a>
            </li>
            <li>
              <router-link to='/login'>登录</router-link>
            </li>
          </ul>
          <i class="btn fa fa-bars fr" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
        </div>
      </div>
      <ul class="sub-main-nav collapse" id="collapseExample">
        <li>
          <router-link to='/'>首页</router-link>
        </li>
        <li>
          <a href="#">VUE 2.0</a>
        </li>
        <li>
          <a href="#">参考资料</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <router-link to='/about'>关于</router-link>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <router-link to='/login'>登录</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import footer from './components/footer';

export default {
  name: 'app',
  components: {
    footers: footer,
  }
}
</script>

<style>

</style>


<style lang="scss" >
@import './scss/_common.scss';
</style>
