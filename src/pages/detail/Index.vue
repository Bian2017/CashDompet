<template>
  <div class="detail">
    <div class="detail-card">
      <div class="detail-card-image">
        <img class="card-image" :src="productInfo.icon" />
      </div>
      <div class="detail-card-content">
        <div class="detail-card-title">{{productInfo.loanName}}</div>
        <div class="detail-card-content">{{productInfo.dayRate}}</div>
        <div class="detail-card-foot">{{productInfo.limitScope}}</div>
      </div>
    </div>

    <div class="detail-info">
      <div class="detail-info-list">
        <div class="detail-info-item">
          <div class="item-label">Nominal Pinjaman:</div>
          <div class="item-content">{{productInfo.limitScope}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Umur Peminjam:</div>
          <div class="item-content">{{productInfo.borrowerAge}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Warga Negara:</div>
          <div class="item-content">{{productInfo.borrowerCountry}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Dokumen:</div>
          <div class="item-content">{{productInfo.documentation}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Bank:</div>
          <div class="item-content">{{productInfo.bank}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Penghasialan Minimum:</div>
          <div class="item-content">{{productInfo.minIncome}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Limit Pinjaman:</div>
          <div class="item-content">{{productInfo.minScope}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Tenor Pinjaman:</div>
          <div class="item-content">{{productInfo.termScope}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Bunga:</div>
          <div class="item-content">{{productInfo.dayRate}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Max Keterlambatan:</div>
          <div class="item-content">{{productInfo.maxOverduleRate}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Waktu Persetujuan:</div>
          <div class="item-content">{{productInfo.approvalTime}}</div>
        </div>
        <div class="detail-info-item">
          <div class="item-label">Lain-lain:</div>
          <div class="item-content">{{productInfo.otherDoc}}</div>
        </div>
      </div>
    </div>

    <a :href="productInfo.registLink" class="download-link">
      <span>DOWNLOAD APLIKASI</span>
    </a>
  </div>
</template>

<script>
import { fetchLoanDetailAsync } from "@/services/list";

export default {
  data() {
    return {
      productId: "",
      productInfo: {}
    };
  },
  created() {
    this.productId = this.$route.query.id;
    this.getLoanDetail(this.productId);
  },
  methods: {
    getLoanDetail(id) {
      this.$indicator.open();

      fetchLoanDetailAsync(id)
        .then(res => {
          this.productInfo = res;
          this.$indicator.close();
        })
        .catch(() => {
          this.$indicator.close();
        });
    }
  }
};
</script>

<style lang="less" scoped>
.detail-card {
  background: #fff;
  padding: 20px 0 20px 28px;
  display: flex;
  align-items: center;

  .detail-card-image {
    display: inline-block;
    width: 81px;
    height: 81px;
    margin-right: 20px;
    background: #616161;
    border-radius: 6px;

    .card-image {
      width: 81px;
      height: 81px;
      border-radius: 6px;
    }
  }

  .detail-card-content {
    .detail-card-title {
      color: #0e8601;
      font-size: 16px;
      font-weight: bold;
      line-height: 12px;
      margin-bottom: 9.5px;
    }

    .detail-card-content {
      color: #666666;
      font-size: 14px;
      line-height: 12px;
      margin-bottom: 14px;
    }

    .detail-card-foot {
      display: inline-block;
      color: #0e8601;
      font-size: 14px;
      line-height: 12px;
      padding: 6px 23px;
      border: 1px solid #0e8601;
      border-radius: 12px;
    }
  }
}

.detail-info {
  background: #fff;
  margin: 15px 0 0 0;
  padding: 17.5px 25px 100px 25px;

  .detail-info-list {
    margin-bottom: 62px;

    .detail-info-item {
      padding: 10px 0;

      .item-label {
        font-size: 13px;
        font-weight: bold;
        line-height: 18px;
        color: #333;
        margin-bottom: 5.5px;
      }

      .item-content {
        color: #666;
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}

.detail {
  position: relative;

  .download-link {
    position: fixed;
    width: 80%;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    bottom: 20px;
    background: #073975;
    padding: 18px 0;
    border-radius: 30px;
    text-align: center;

    cursor: pointer;
    color: #fff;
    font-size: 16px;
    line-height: 18px;
    text-decoration: none;
  }
}
</style>