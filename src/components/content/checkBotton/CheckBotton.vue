<!--  -->
<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckBotton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style  scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checked {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>