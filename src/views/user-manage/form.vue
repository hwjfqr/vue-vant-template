<template>
  <div>
    <NavBar title="添加专家" left-text="返回" left-arrow @click-left="onClickLeft" />
    <Form @submit="onSubmit">
      <CellGroup title="基本信息" inset>
        <Field v-model="data.name" label="姓名" :rules="[{ required: true, message: '请输入' }]" />
        <Field label="照片">
          <template #input>
            <Uploader v-model="data.photo" />
          </template>
        </Field>
        <Field v-model="data.industry" label="行业" />
        <Field v-model="data.title" label="职务" />
        <Field
          v-model="data.birthday"
          is-link
          readonly
          label="出生日期"
          @click="controlConf.birthday.show = true"
        />
        <Popup v-model:show="controlConf.birthday.show" position="bottom">
          <DatetimePicker
            type="date"
            @confirm="onControlConfirm('birthday', $event)"
            @cancel="controlConf.birthday.show = false"
            :min-date="controlConf.birthday.minDate"
            :max-date="controlConf.birthday.maxDate"
          ></DatetimePicker>
        </Popup>
        <Field v-model="data.tag" label="标签" />
        <Field v-model="data.brief" label="简介" type="textarea" rows="3" autosize />
      </CellGroup>
      <CellGroup title="联系方式" inset>
        <Field v-model="data.phoneNumber" label="手机" />
        <Field v-model="data.email" label="邮箱" />
        <Field v-model="data.wechat" label="微信" />
      </CellGroup>
      <div style="margin: 16px;">
        <Button round block type="primary" native-type="submit">提交</Button>
      </div>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { NavBar, Form, CellGroup, Field, Icon, Calendar, Button, Uploader, DatetimePicker, Popup } from 'vant'
import { useRouter, useRoute } from 'vue-router'
import dayjs from 'dayjs'

const { } = useRoute()
const router = useRouter()

const data = reactive<{ [prop: string]: any }>(({
  name: undefined,
  photo: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
  industry: undefined,
  title: undefined,
  birthday: undefined,
  tag: undefined,
  brief: undefined,
  phoneNumber: undefined,
  email: undefined,
  wechat: undefined
}))
const controlConf = reactive({
  birthday: {
    show: false,
    minDate: new Date(dayjs().subtract(90, 'years').format('YYYY/MM/DD')),
    maxDate: new Date()
  }
})

const onControlConfirm = (type: string, value: any) => {
  if (type === 'birthday') {
    controlConf.birthday.show = false
    data[type] = dayjs(value).format('YYYY-MM-DD')
  } else if (type === 'photo') {
    console.log(value, type)
  } else {
    data[type] = value
  }
}

const onSubmit = async () => {
  console.log('2112')
}




const onClickLeft = () => {
  router.back()
}


</script>
<style lang="less" scoped>
</style>