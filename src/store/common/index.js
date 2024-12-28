import { defineStore } from "pinia"
const useCommonStore = defineStore('common', {
  state: () => ({
    componentName: 'Overview',
    headerActive: '',
    isShowAlarmInfo: false,
    legendList: [],
    frameList: [],
    dialogData: {},
    dialogName: '',
    isLogin: false,
    isFrame: false,
    secondActive: '',
    secondList: [],
    statusData: {}

  }),
  actions: {
    changeComponent(index) {
      this.dialogName = ''
      this.headerActive = this.frameList[index].name
      this.componentName = this.frameList[index].componentName
      this.legendList = this.frameList[index].legendList
      this.secondList = this.frameList[index].secondList 

    },
  },
  persist: {
    key: 'actions', //存储名称
    storage: 'localStorage', // 存储方式
    // paths: null, //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
  },
})

export default useCommonStore