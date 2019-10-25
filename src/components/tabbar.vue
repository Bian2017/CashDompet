<template>
  <mt-tabbar :fixed="true" v-model="selectedBar">
    <mt-tab-item v-for="item in tabBars" :id="item.id" :key="item.id">
      <div class="tabbar-item">
        <div class="tabbar-img-wrapper">
          <img :src="selectedBar === item.id? item.imgActive: item.img" />
        </div>
        <span>{{item.text}}</span>
      </div>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import pinjamanImg from '@/assets/pinjaman.png'
import beritaImg from '@/assets/berita.png'
import pinjamanActiveImg from '@/assets/pinjaman-active.png'
import beritaActiveImg from '@/assets/berita-active.png'

const TABBAR_CONFIGS = [{
  id: 'Pinjaman',
  text: 'Pinjaman',
  imgActive: pinjamanActiveImg,
  img: pinjamanImg
},
{
  id: 'Berita',
  text: 'Berita',
  imgActive: beritaActiveImg,
  img: beritaImg,
}]

export default {
  name: 'MyTabBar',
  data () {
    return {
      tabBars: TABBAR_CONFIGS
    }
  },
  computed: {
    selectedBar: {
      get () {
        return this.$store.state.global.tabBarSelected
      },
      set (value) {
        let pathName = ''

        if (value === 'Pinjaman') {
          pathName = 'home'
        } else if (value === 'Berita') {
          pathName = 'news'
        }

        this.$router.push({ name: pathName })
        this.$store.commit('global/setTabBarSelected', value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tabbar-img-wrapper {
    display: inline-block;
    width: 23px;
    height: 23px;

    > img {
      width: 23px;
      height: 23px;
    }
  }
}

.mint-tabbar {
  box-shadow: 0px -8px 20px 0px rgba(0, 0, 0, 0.03);
  background: #fff;
}

.mint-tabbar > .mint-tab-item {
  color: #999;
  font-size: 12px;
  line-height: 12px;
}

.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: #073975;
}
</style>