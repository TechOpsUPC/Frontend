<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="https://img.freepik.com/vector-gratis/cartel-realista-cine-cubo-iluminado-bebida-palomitas-maiz-entradas-carrete-gafas-3d-sobre-fondo-azul-ilustracion-vector-cintas_1284-77070.jpg" />
    </template>
    <template #title>{{eventItem.title}}</template>

    <template #subtitle>
      <div style="width: fit-content; margin-left: auto; ">
        <router-link to="/event">
          <pv-button  Label="INFO" class="w-full" style="background-color: black; border-color: black"/>
        </router-link>
      </div>
    </template>

    <template #content>
      <p class="m-0">
        {{eventItem.description}}
      </p>
    </template>
    <template #footer>

    </template>
  </pv-card>

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