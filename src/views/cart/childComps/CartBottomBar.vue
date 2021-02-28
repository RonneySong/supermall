<!--  -->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-botton
        class="check-botton"
        @click.native="checkAllClick"
        :is-checked="isSelectAll"
      ></check-botton>
      <span class="check-text">全选</span>
    </div>
    <div class="priceShow">合计:{{ totalPrice }}</div>
    <div class="calcPrice" @click="calcClick">去结算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkBotton/CheckBotton.vue";
export default {
  name: "CartBottomBar",
  components: {
    CheckBotton,
  },
  data() {
    return {
      isCheckedAll: true,
    };
  },
  methods: {
    checkAllClick() {
      const checkAll = this.$store.state.cartList;
      if (this.isSelectAll) {
        //全部选中
        checkAll.forEach((item) => (item.checked = false));
      } else {
        checkAll.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      //return this.$store.state.cartList.filter((item) => item.checked).length;
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((prevCount, item) => prevCount + item.count, 0);
    },
    isSelectAll() {
      //return !this.$store.state.cartList.filter((item) => !item.checked).length;
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
};
</script>
<style  scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.bottom-bar > div {
  flex: 1;
}
.check-content {
  display: flex;
  align-items: center;
}
.check-botton {
  margin-left: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.check-text {
  display: block;
  margin-left: 5px;
}
.priceShow {
  font-size: 14px;
  font-weight: 700;
}
.calcPrice {
  align-self: flex-end;
  color: #fff;
  background-color: orangered;
  text-align: center;
}
</style>