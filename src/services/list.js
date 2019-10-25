import http from '../utils/http'

/**
 * 获取产品列表
 */
export async function fetchLoanListAsync() {
  return http.$post('/rest/v1/loan/getLoanList')
}

/**
 * 获取产品详情
 */
export async function fetchLoanDetailAsync(id) {
  return http.$post('/rest/v1/loan/getLoan', { id })
}

/**
 * 获取新闻详情
 */
export async function fetchNewsDetailAsync() {
  return http.$post('/rest/v1/news/getNew')
}

export default {
  fetchLoanListAsync
}
