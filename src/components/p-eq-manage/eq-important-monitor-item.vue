<script setup></script>

<template>
  <section class="mt-40px mb-60px">
    <div class="flex">
      <div class="w-297px h-166px mr-88px rounded-4px border-4px border-[#5A7BA1] box-border">
        <img class="h-full w-full object-cover" src="" alt="">
      </div>
      <ul class="h-166px flex flex-1 flex-col justify-between text-24px ">
        <li class="flex justify-between">
          <p class="text-[rgba(255,255,255,0.6)]">设备状态</p>
          <p class="text-[#A5FA9F]">运行中</p>
        </li>
        <li class="flex justify-between">
          <p class=" text-[rgba(255,255,255,0.6)]">当前任务</p>
          <p class="text-[#CFFFFF]">XXX检测中</p>
        </li>
        <li class="flex justify-between">
          <p class="text-[rgba(255,255,255,0.6)]">当前使用人</p>
          <p class="text-[#CFFFFF]">张三</p>
        </li>
      </ul>

    </div>
    <div class="flex justify-between my-40px">
      <div class="catch-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
          <path d="M30.5441 27.0133L18.9377 6.90918C18.7781 6.63277 18.5486 6.40323 18.2722 6.24364C17.9957 6.08404 17.6822 6.00002 17.363 6C17.0438 5.99997 16.7303 6.08398 16.4539 6.24358C16.1774 6.40318 15.9479 6.63274 15.7884 6.90918L4.18129 27.0133C3.85624 27.5759 3.85624 28.2691 4.18129 28.8317C4.50634 29.3943 5.10653 29.7409 5.75594 29.7409H28.9698C29.6195 29.7409 30.2194 29.3943 30.5444 28.8317C30.8695 28.2691 30.8691 27.5759 30.5441 27.0133ZM17.5978 12.5256C18.424 12.5187 19.2429 13.2522 19.2429 13.9324L18.8348 20.9669C18.8348 21.6471 18.2784 22.2039 17.5982 22.2039C16.918 22.2039 16.3616 21.6475 16.3616 20.9669L15.9535 13.9324C15.9528 13.2522 16.6018 12.5516 17.5978 12.5256ZM17.5978 27.3175C16.6593 27.3175 15.8984 26.5567 15.8984 25.6181C15.8984 24.6795 16.6593 23.9187 17.5978 23.9187C18.5364 23.9187 19.2973 24.6795 19.2973 25.6181C19.2973 26.5567 18.5364 27.3175 17.5978 27.3175Z" fill="#ECC69F"/>
        </svg>
        <span class="text-24px text-[rgba(255,255,255,0.6)]">今日设备异常</span>
        <span class="text-24px text-[#ECC69F]"> 150</span>
      </div>
      <div class="catch-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
          <path d="M30.5441 27.0133L18.9377 6.90918C18.7781 6.63277 18.5486 6.40323 18.2722 6.24364C17.9957 6.08404 17.6822 6.00002 17.363 6C17.0438 5.99997 16.7303 6.08398 16.4539 6.24358C16.1774 6.40318 15.9479 6.63274 15.7884 6.90918L4.18129 27.0133C3.85624 27.5759 3.85624 28.2691 4.18129 28.8317C4.50634 29.3943 5.10653 29.7409 5.75594 29.7409H28.9698C29.6195 29.7409 30.2194 29.3943 30.5444 28.8317C30.8695 28.2691 30.8691 27.5759 30.5441 27.0133ZM17.5978 12.5256C18.424 12.5187 19.2429 13.2522 19.2429 13.9324L18.8348 20.9669C18.8348 21.6471 18.2784 22.2039 17.5982 22.2039C16.918 22.2039 16.3616 21.6475 16.3616 20.9669L15.9535 13.9324C15.9528 13.2522 16.6018 12.5516 17.5978 12.5256ZM17.5978 27.3175C16.6593 27.3175 15.8984 26.5567 15.8984 25.6181C15.8984 24.6795 16.6593 23.9187 17.5978 23.9187C18.5364 23.9187 19.2973 24.6795 19.2973 25.6181C19.2973 26.5567 18.5364 27.3175 17.5978 27.3175Z" fill="#ECC69F"/>
        </svg>
        <span class="text-24px text-[rgba(255,255,255,0.6)]">今日设备异常</span>
        <span class="text-24px text-[#ECC69F]"> 150</span>
      </div>
    </div>
    <chart-area-line class="h-197px mt-40px mb-50px"/>
  </section>
</template>

<style scoped lang='scss'>
.catch-item {
  width: 307px;
  height: 50px;
  background: linear-gradient( 38deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>