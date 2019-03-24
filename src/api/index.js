import request from '@/utils/request'
// 发起一个POST请求
// export function sentImgdata(params) {
//   return request({
//     // url: '/api/apm/custom/tradeVoucherUpload.html',
//     url: '/api/tradeVoucherUpload.php',
//     method: 'post',
//     data: params
//   })
// }
export function getHomeinfo() {
  return request({
    method: 'get',
    url: '/Travel/static/mock/index.json'
  })
}
export function getDetailinfo() {
  return request({
    method: 'get',
    url: '/Travel/static/mock/detail.json'
  })
}
export function getCityinfo() {
  return request({
    method: 'get',
    url: '/Travel/static/mock/city.json'
  })
}