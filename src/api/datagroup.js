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

export function datagroupCreate(data) {
  return request({
    url: '/datagroup/create',
    method: 'post',
    data
  })
}

export function datagroupDetail(query) {
  return request({
    url: '/datagroup/detail',
    method: 'get',
    params: query
  })
}

export function datagroupUpdate(data) {
  return request({
    url: '/datagroup/edit',
    method: 'post',
    data
  })
}
