import request from '@/utils/request'

export function datasourceList(query) {
  return request({
    url: '/datasource/list',
    method: 'get',
    params: query
  })
}