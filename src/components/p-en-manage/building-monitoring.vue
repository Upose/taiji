<script setup>
import IconCold from '@/assets/images/icon/icon-cold.png'
import IconWarm from '@/assets/images/icon/icon-warm.png'
const menus = [
  { label: '按实验室', value: '1' },
  { label: '按科室', value: '2' }
]

const input = ref('')
</script>

<template>
  <!-- 摄像头预警 -->
  <section>
    <card-title-left title="AI摄像头及视频预警" />
    <card-container
      screen
      height="1286px"
      class="mt-35px"
    >
      <card-top-title :data="menus" />
      <div class="flex gap-30px flex-shrink-0 flex-wrap justify-between">
        <el-input v-model="input" placeholder="请输入实验室名称" class="p-en-input">
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M21.0065 19.0065H19.9532L19.5798 18.6465C20.8865 17.1265 21.6732 15.1532 21.6732 13.0065C21.6732 8.21984 17.7932 4.33984 13.0065 4.33984C8.21984 4.33984 4.33984 8.21984 4.33984 13.0065C4.33984 17.7932 8.21984 21.6732 13.0065 21.6732C15.1532 21.6732 17.1265 20.8865 18.6465 19.5798L19.0065 19.9532V21.0065L25.6732 27.6598L27.6598 25.6732L21.0065 19.0065ZM13.0065 19.0065C9.68651 19.0065 7.00651 16.3265 7.00651 13.0065C7.00651 9.68651 9.68651 7.00651 13.0065 7.00651C16.3265 7.00651 19.0065 9.68651 19.0065 13.0065C19.0065 16.3265 16.3265 19.0065 13.0065 19.0065Z"
                fill="#A5FA9F"
              />
            </svg>
          </template>
        </el-input>
      </div>
      <div class="mt-30px">
        <div class="mt-28px">
          <div
            v-for="item in 7"
            :key="item"
            class="h-128px p-30px flex items-center justify-between border border-1px border-[rgba(255,255,255,0.1)] rounded-15px not-last:mb-20px"
          >
            <p class="self-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M26.4015 24.5335L18.6682 14.2268V8.66683L20.4682 6.4135C20.8149 5.9735 20.5082 5.3335 19.9482 5.3335H12.0549C11.4949 5.3335 11.1882 5.9735 11.5349 6.4135L13.3349 8.66683V14.2268L5.60154 24.5335C4.9482 25.4135 5.57487 26.6668 6.6682 26.6668H25.3349C26.4282 26.6668 27.0549 25.4135 26.4015 24.5335Z" fill="#4E8BE3"/>
              </svg>
            </p>
            <p class="text-[rgba(255,255,255,0.4)] text-26px flex-1 min-w-0 mx-30px self-start">
              <p class="flex gap-30px items-center">
                <span class="text-28px text-white w-150px truncate">实验室名称</span>
                <p class="flex-1 text-26px flex justify-between">
                  <span>实际温度</span>
                  <span class="ml-30px text-[#A5FA9F]">23.5℃</span>
                </p>
              </p>
              <p class="flex gap-30px mt-15px items-center">
                <span class="text-28px w-150px truncate">F06-A001</span>
                <p class="flex-1 text-26px flex justify-between">
                  <span>设定温度</span>
                  <span class="ml-30px text-[#4E8BE3]">24℃</span>
                </p>
              </p>
            </p>
            <img class="w-100px h-80px" :src="item % 2 ? IconCold : IconWarm" alt="">
          </div>
        </div>
      </div>
    </card-container>
  </section>
</template>

<style lang="scss">
.p-en-input{
  height: 70px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  .el-input__wrapper{
    background: rgba(0,0,0,0.1);
    box-shadow: none;
    .el-input__inner{
      font-size: 28px;
      color: #fff;
      &::placeholder{
        font-size: 28px;
      }
    }
  }
}
</style>
