import request from '@/utils/request'

export function datasourceList(query) {
  return request({
    url: '/datasource/list',
    method: 'get',
    params: query
  })
}

export function datasourceDelete(query) {
  return request({
    url: '/datasource/delete',
    method: 'get',
    params: query
  })
}

export function datasourceCreate(data) {
  return request({
    url: '/datasource/create',
    method: 'post',
    data
  })
}

export function datasourceDetail(query) {
  return request({
    url: '/datasource/detail',
    method: 'get',
    params: query
  })
}

export function datasourceUpdate(data) {
  return request({
    url: '/datasource/edit',
    method: 'post',
    data
  })
}

export function datasourceListAll() {
  return request({
    url: '/datasource/listAll',
    method: 'get'
  })
}
