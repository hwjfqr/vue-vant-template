<template>
  <div class="expert-detail">
    <NavBar
      title="专家详情"
      left-text="返回"
      left-arrow
      @click-left="back"
      right-text="编辑"
      @click-right="add"
    ></NavBar>
    <div class="info">
      <div class="info-item">
        <div class="title van-hairline--bottom">基本信息</div>
        <div class="desc">
          <ul>
            <li>
              <span>姓名：</span>
              <span>张三</span>
            </li>
            <li>
              <span>职务：</span>
              <span>研究员</span>
            </li>
            <li>
              <span>出生日期：</span>
              <span>2021年12月13日</span>
            </li>
            <li>
              <span>简介：</span>
              <span>这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-item">
        <div class="title van-hairline--bottom">基本信息</div>
        <div class="desc">
          <ul>
            <li>
              <span>姓名：</span>
              <span>张三</span>
            </li>
            <li>
              <span>职务：</span>
              <span>研究员</span>
            </li>
            <li>
              <span>出生日期：</span>
              <span>2021年12月13日</span>
            </li>
            <li>
              <span>简介：</span>
              <span>这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介这是张三的简介</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { NavBar } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const add = () => { }
const back = () => {
  router.back()
}
</script>
<style lang="less" scoped>
.expert-detail {
  .info {
    padding: 12px;
    .info-item {
      padding-bottom: 16px;
      .title {
        display: flex;
        align-items: center;
        font-size: 16px;
        padding-bottom: 8px;
        &::before {
          content: "";
          display: block;
          width: 4px;
          height: 16px;
          margin-right: 6px;
          background-color: #4169e2;
        }
      }
      .desc {
        font-size: 14px;
        padding-top: 8px;
        ul {
          li {
            padding: 4px 0px;
          }
        }
      }
    }
  }
}
</style>