<!--  -->
<template>
  <div class="cart-list">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :item-info="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
  components: {
    CartListItem,
  },
  name: "CartList",
  data() {
    return {};
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
};
</script>
<style  scoped>
.cart-list {
  height: 100%;
}
</style>