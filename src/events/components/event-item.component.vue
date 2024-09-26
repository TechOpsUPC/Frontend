<template>
  <pv-card>
    <template #title>Simple Card {{eventItem.title}}</template>
    <template #content>
      <p class="m-0">
        {{eventItem.description}}
      </p>
    </template>
  </pv-card>
  equisde
</template>

<script >
export default {
  name: "event-item",
  props:{
    eventItem:{
      type:Object,
      required:true
    }
  },
  created(){
    console.log(this.eventItem);
  }
}
</script>

<style scoped>

</style>