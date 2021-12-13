import axios from '@/utils/request'

export async function getList({ page }: any) {
  console.log(page)
  const {
    data: { data }
  } = await axios('/cp/sfc/bt/auth')
  return { data: [], total: 0 }
}
