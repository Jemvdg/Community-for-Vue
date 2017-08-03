<template>
  <section class="main home">
    <div class="container clearfix">
      <div class="left-bar fl">
        <titles></titles>
      </div>
      <div class="right-bar fr">
        <div class="login right-content">
          <h1>Vue：Vue.js专业中文社区</h1>
          <p>您可以
            <a href="#">注册</a> , 也可以</p>
          <button class="login-github" type="button">通过 Github 登录</button>
        </div>
        <div class="adv right-content ">
          <a href="#">
            <img class="img-responsive" src="../../assets/adv1.png" alt="fff">
          </a>
          <a href="#">
            <img class="img-responsive" src="../../assets/adv2.png" alt="fff">
          </a>
          <a href="#">
            <img class="img-responsive" src="../../assets/adv3.png" alt="fff">
          </a>
        </div>
        <div class="topic  right-content">
          <h2>无人回复的话题</h2>
          <topics></topics>
        </div>
        <div class="rank right-content">
          <h2>积分榜 &nbsp&nbsp &nbsp &nbsp
            <a href="#">TOP 100 >></a>
          </h2>
          <ul class="topic-list">
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
            <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
              <a href="#">i5ting</a>
            </li>
          </ul>
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
import titlelist from './titlelist';
import topiclist from './topic';
import backTop from '../backTop/backtop';


export default {
  components: {
    titles: titlelist,
    topics: topiclist,
    backtop: backTop,
  }
}
</script>
<style lang="scss">
@import '../../scss/_mixin.scss';
.home {

  .left-bar {
    width: 75%;
    .classify {
      width: 100%;
      background: #f6f6f6;
      span {
        display: inline-block;
        padding: 5px 8px;
        margin: 15px 10px;
        border-radius: 4px;
        font-size: 13px;
        color: #369219;
        cursor: pointer;
      }
      span.active {
        background: #369219;
        color: #fff;
      }
    }
    .content {
      width: 100%;
      margin: 0;
      li {
        width: 100%;
        height: 51px;
        border-top: 1px solid #f0f0f0;
        background: #fff;
        clear: both;
        overflow: hidden;
        .head {
          display: inline-block;
          width: 30px;
          height: 30px;
          margin: 10px 5px 0 10px;
        }
        .comment {
          width: 8%;
          line-height: 51px;
          font-size: 14px;
          color: #9e78c0;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .total-comment {
            color: #b4b4b4;
          }
        }
        .tag {
          margin-right: 4px;
          line-height: 51px;
          span {
            padding: 2px 5px;
            border-radius: 2px;
            background: #369219;
            color: #fff;
          }
          .share {
            background: #e5e5e5;
          }
          .ask {
            background: #e5e5e5;
          }
        }
        .title {
          max-width: 70%;
          line-height: 51px;
          a {
            display: inline-block;
            width: 100%;
            font-size: 15px;
            color: #000;
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
      li:hover {
        background-color: #f6f6f6;
      }
    }
    .pages {
      width: 100%;
      padding: 10px;
      background-color: #fff;
      @include clearfix;
      ul {
        float: left;
        border: 1px solid #ddd;
        @include clearfix;
        li {
          float: left;
          width: 30px;
          height: 30px;
          background-color: #fff;
          line-height: 30px;
          text-align: center;
          color: #778087;
          cursor: pointer;
        }
        li+li {
          border-left: 1px solid #ddd;
        }
        li.active {
          background-color: rgba(0, 0, 0, .1);
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
      .login-github {
        width: 60%;
        height: 34px;
        margin-top: 10px;
        border: none;
        border-radius: 2px;
        background-color: #7597d4;
        font-size: 15px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    .topic {
      ul {
        padding: 0 10px 30px;
        li {
          width: 100%;
          margin-top: 20px;
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
    .rank {
      ul {
        padding: 0 10px 30px;
        li {
          margin-top: 20px;
          font-size: 13px;
          color: #778087;
          a {
            color: #778087;
          }
        }
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


