<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{ cartLength }}）</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list> </cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
export default {
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  name: "Cart",
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
  },
  methods: {},
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.content {
  width: 100%;
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
  padding-bottom: 40px;
}
.nav-bar {
  background-color: #ff8198;
  color: #fff;
  font-weight: 700;
}
</style>
