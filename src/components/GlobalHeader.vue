<template>
  <div class="GlobalHeader">GlobalHeader</div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: {
    msg: String,
  },
};
</script>

<style lang="less" scoped>
.GlobalHeader {
  height: 80px;
  border-bottom: 1px solid blue;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>