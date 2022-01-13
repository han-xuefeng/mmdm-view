import request from '@/utils/request'

export function datagroupList(query) {
  return request({
    url: '/datagroup/list',
    method: 'get',
    params: query
  })
}

export function datagroupDelete(query) {
  return request({
    url: '/datagroup/delete',
    method: 'get',
    params: query
  })
}
