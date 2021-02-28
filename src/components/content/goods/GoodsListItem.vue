<!--  -->
<template>
  <div class="goodsItem" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad" />
    <div>
      <p class="view-text">{{ goodsItem.title }}</p>
      <div class="goodsInfo">
        <span class="price">{{ goodsItem.price }}</span>

        <span class="collect"
          ><span class="collect-img">{{ goodsItem.cfav }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>
<style  scoped>
.goodsItem {
  width: 50%;
  padding: 10px;
}
.goodsItem img {
  width: 100%;
  border-radius: 15px;
  padding-bottom: 5px;
}
.view-text {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.goodsInfo {
  display: flex;
}
.goodsInfo span {
  flex: 1;
}
.price {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  text-align: right;
  padding-right: 5px;
  color: var(--color-high-text);
}
.collect {
  height: 22px;
  line-height: 22px;
  display: inline-block;
}
.collect-img {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-position: 0 0;
  background-size: 22px auto;
  padding-left: 23px;
}
</style>