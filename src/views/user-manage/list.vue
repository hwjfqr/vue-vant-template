<template>
  <div class="index">
    <NavBar title="智库专家库" @click-right="add">
      <template #right>
        <Popover
          v-model:show="showAddPopover"
          :actions="addActions"
          @select="add"
          placement="bottom-end"
        >
          <template #reference>
            <Button plain hairline type="primary" size="mini">添加</Button>
          </template>
        </Popover>
      </template>
    </NavBar>
    <Tabs v-model:active="listFilter.type">
      <Tab title="专家" name="expert"></Tab>
      <Tab title="报告" name="report"></Tab>
      <Tab title="论坛" name="forum"></Tab>
    </Tabs>

    <PullRefresh v-model="listLoadArgs.refreshing" @refresh="getListFn(true)">
      <List
        v-model:loading="listLoadArgs.loading"
        :finished="listLoadArgs.finished"
        finished-text="没有更多数据了"
        @load="onLoad"
      >
        <div class="expert-list">
          <ul>
            <li>
              <div>
                <Image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div>
                <div class="title">钟南山</div>
                <div class="desc">著名呼吸病学家</div>
              </div>
            </li>
            <li>
              <div>
                <Image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div>
                <div class="title">钟南山</div>
                <div class="desc">著名呼吸病学家</div>
              </div>
            </li>
            <li>
              <div>
                <Image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div>
                <div class="title">钟南山</div>
                <div class="desc">著名呼吸病学家</div>
              </div>
            </li>
          </ul>
        </div>
      </List>
    </PullRefresh>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { NavBar, Tabs, Tab, Button, PullRefresh, List, Image, Popover } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { getList } from './api'

const router = useRouter()
const { query } = useRoute()


const listLoadArgs = reactive({
  finished: true,
  loading: false,
  refreshing: false
})
const listFilter = reactive<{ page: number; type: 'expert' | 'report' | 'forum' }>({
  page: 1,
  type: 'expert'
})
const list = reactive<{ data: any[]; total: number }>({
  data: [],
  total: 0
});
const getListFn = async (first?: boolean) => {
  if (first) listFilter.page = 1

  const { data, total } = await getList(listFilter)

  if (data.length < 10)
    listLoadArgs.finished = true
  else
    listLoadArgs.finished = false

  if (first) list.data = []
  list.data = [...list.data, ...data]
  list.total = total
  listLoadArgs.loading = false
  listLoadArgs.refreshing = false

}
const onLoad = () => {
  listFilter.page += 1; getListFn();
}
onMounted(() => { getListFn(true) })


const showAddPopover = ref(false)
const addActions = [{ text: '添加专家', value: 'expert' }, { text: '添加论坛', value: 'report' }]
const add = ({ value }: { text: string; value: string }) => {
  let path
  if (value === 'expert') {
    path = '/app/expert-library/expert-add'
  } else if (value === 'report') {
    path = '/app/expert-library/report-add'
  }
  router.push({
    path,
    query
  })
}

</script>
<style lang="less" scoped>
.index {
  .expert-list {
    ul {
      padding-top: 8px;
      li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 12px 0px;
        & > div:first-child {
          width: 100px;
          text-align: center;
        }
        & > div:last-child {
          .title {
          }
          .desc {
            padding-top: 6px;
            color: #ccc;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>