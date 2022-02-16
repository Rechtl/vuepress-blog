<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        <div class="Links">
          <span>友情链接</span>
          <a href="https://www.cnblogs.com/deali/"><img title="程序设计实验室" src="../../public/logo/DealiLogo.jpg"></a>
        </div>
        <div class="copyright">
          Copyright © 2022 ZERO. All Rights Reserved
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  height: 100%;
}

.theme-container {
  height: 100%;
}

.page {
  height: 95%;
}

.footer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  min-height: 9%;
  color: #888;
}

.Links {
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
}

.Links a {
  width: 3rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}

.Links img {
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
}

.copyright {
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
}

</style>