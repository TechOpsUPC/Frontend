﻿<script>
import EventItem from "./event-item.component.vue";

export default {
  name: "event-list",
  components: {EventItem},
  props:{
    eventList:{
      type:Array,
      required: true
    }
  },
  created(){
    console.log(this.eventList)
  }

}

</script>

<template>

  <div v-for="event in eventList">
  <event-item :eventItem="event"></event-item>
  </div>

</template>

<style scoped>

</style>