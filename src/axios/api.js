import { api, instance } from './http'

// 需要仓库打开
// import pinia from '@/store/index';
// import useCommonStore from '@/store/common/index';
// const store = useCommonStore(pinia)

// examples:
export const getData = params => api.get('url', { params })
export const postData = data => api.post('url', data)
// http://127.0.0.1:5001/sqlite?fn=dsxx&id=1
// http://127.0.0.1:5001/sqlite?fn=wyxx&id=1  