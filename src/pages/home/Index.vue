<template>
  <div class="loan-list">
    <div v-for="loan in loanList" class="card-item" :key="loan.id" @click="goToDetail(loan.id)">
      <div class="card-head">
        <div class="card-head-iconWrapper">
          <img class="card-head-icon" :src="loan.icon" />
        </div>
        <span class="card-head-name">{{loan.loanName}}</span>
        <span class="card-head-label">Pinjaman</span>
      </div>
      <div class="card-content">
        <div class="card-money">{{loan.limitScope}}</div>
        <span class="card-vertical"></span>
        <div class="card-interest">{{loan.dayRate}}</div>
      </div>
      <div class="card-foot">{{loan.loanDesc}}</div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { fetchLoanListAsync } from '@/services/list'
import TabBar from '@/components/tabbar'

export default {
  data () {
    return {
      loanList: []
    }
  },
  created () {
    this.getLoanList()
  },
  components: {
    TabBar
  },
  methods: {
    goToDetail (id) {
      this.$router.push({
        name: 'detail',
        query: { id }
      })
    },
    getLoanList () {
      this.$indicator.open()

      fetchLoanListAsync().then(res => {
        this.loanList = res
        this.$indicator.close()
      }).catch(() => {
        this.$indicator.close()

      })
    }
  }

}
</script>

<style lang="less" scoped>
.loan-list {
  margin-bottom: 100px;

  .card-item {
    padding: 9px 25px 10px 25px;
    background: #fff;
    margin: 15px 0;

    .card-head {
      display: flex;
      align-items: center;

      .card-head-iconWrapper {
        height: 23px;
        width: 23px;
        margin-right: 9.5px;
        border-radius: 3px;

        .card-head-icon {
          height: 23px;
          width: 23px;
          border-radius: 3px;
        }
      }

      .card-head-name {
        flex: 1;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        line-height: 12px;
      }

      .card-head-label {
        color: #0e8601;
        font-size: 13px;
        line-height: 21px;
        padding: 4.5px 10px;
        border: 1.5px solid #0e8601;
        border-radius: 12px;
      }
    }

    .card-content {
      padding: 18.5px 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;

      .card-money {
        color: #0e8601;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
        display: inline-block;
        width: 160px;
      }

      .card-vertical {
        display: inline-block;
        background: #eee;
        width: 1px;
        height: 36px;
      }

      .card-interest {
        display: inline-block;
        color: #333;
        text-align: center;
        font-size: 14px;
        line-height: 16px;
        width: 160px;
      }
    }

    .card-foot {
      color: #999999;
      font-size: 13px;
      line-height: 18px;
      padding-top: 8.5px;
    }
  }
}
</style>