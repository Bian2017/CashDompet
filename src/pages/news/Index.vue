<template>
  <div class="news-detail">
    <div>{{news.content}}</div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { fetchNewsDetailAsync } from '@/services/list'
import TabBar from '@/components/tabbar'

export default {
  data () {
    return {
      news: {}
    }
  },
  created () {
    this.getNews()
  },
  components: {
    TabBar
  },
  methods: {
    getNews () {
      this.$indicator.open()

      fetchNewsDetailAsync().then(res => {
        console.log('news:', res)
        this.news = res
        this.$indicator.close()
      }).catch(() => {
        this.$indicator.close()

      })
    }
  }

}
</script>

<style lang="less" scoped>
.news-detail {
  margin: 20px 10px 100px 10px;
}
</style>