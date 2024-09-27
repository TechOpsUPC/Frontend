<script>
export default {
  name: "EventPage",
  data() {
    return {
      events: [
        {
          eventId: "65",
          contentId: "45",
          title: "Event for Call me movie",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nisl augue, vitae tincidunt sapien venenatis ut. Aenean dapibus sit.",
          date: "2024-05-05",
          address: "av.primavera 123",
          creatorId: "2"
        },
        {
          eventId: "456",
          contentId: "98",
          title: "Event for Impossile movie",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nisl augue, vitae tincidunt sapien venenatis ut. Aenean dapibus sit.",
          date: "2024-02-01",
          address: "av.primavera 321",
          creatorId: "654"
        }
      ]
    }
  }
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="https://img.freepik.com/vector-gratis/cartel-realista-cine-cubo-iluminado-bebida-palomitas-maiz-entradas-carrete-gafas-3d-sobre-fondo-azul-ilustracion-vector-cintas_1284-77070.jpg" />
    </template>

    <template #footer>

    </template>
  </pv-card>
</template>

<style scoped>

</style>