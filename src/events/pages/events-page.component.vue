<script>

import { ref } from 'vue';
import EventList from "../components/event-list.component.vue";



export default {
  name: "Events-page",
  components: {EventList},
  data() {
    return {
      searchQuery: "", // Campo de búsqueda
      items: [
        { id: 1, name: 'Goku' },
        { id: 2, name: 'Vegeta' },
        { id: 3, name: 'Gohan' }
        // Agrega más elementos según tus datos
      ],
      filteredItems: [],
      events: [
        {
          "eventId": "1",
          "contentId": "56",
          "title": "Make court night I.",
          "description": "Give store town decade record white. Authority establish really traditional star vote. Big girl end close race.",
          "date": "2024-10-18",
          "address": "212 Elizabeth Shoals\nNorth Sarah, AK 41993",
          "creatorId": "2"
        },
        {
          "eventId": "2",
          "contentId": "97",
          "title": "Positive good action across.",
          "description": "Reflect important computer simple conference green successful. Resource key important stage financial employee.",
          "date": "2024-11-10",
          "address": "921 Patricia Brook Apt. 883\nAshleyport, AL 00847",
          "creatorId": "5"
        },
        {
          "eventId": "3",
          "contentId": "47",
          "title": "Trip network feeling a understand.",
          "description": "Seek itself including teacher.",
          "date": "2024-12-26",
          "address": "29390 Steele Mews\nHoltview, WI 67646",
          "creatorId": "1"
        },
        {
          "eventId": "4",
          "contentId": "67",
          "title": "Share mention space.",
          "description": "Rock although serious eight party production knowledge. Truth outside letter scientist decision however exactly.",
          "date": "2024-10-04",
          "address": "0839 Samuel Corner Suite 496\nWest Tylermouth, NV 04398",
          "creatorId": "9"
        },
        {
          "eventId": "5",
          "contentId": "77",
          "title": "Outside knowledge help each girl.",
          "description": "Wide year week identify. Hear such likely girl choice ability on television. Necessary seem oil myself.",
          "date": "2024-10-02",
          "address": "Unit 1427 Box 6236\nDPO AE 08603",
          "creatorId": "1"
        },
        {
          "eventId": "6",
          "contentId": "63",
          "title": "Address smile sense.",
          "description": "Election poor human bill season pick responsibility daughter. Receive change hit eat summer. Kind catch apply able television rise.",
          "date": "2024-10-08",
          "address": "51701 Andrew Grove Suite 551\nWillieshire, FL 64931",
          "creatorId": "3"
        },
        {
          "eventId": "7",
          "contentId": "48",
          "title": "These sign role social item.",
          "description": "Affect establish key also whether summer community.",
          "date": "2024-11-21",
          "address": "94431 Ricardo Canyon\nEast Brandon, GA 45616",
          "creatorId": "5"
        },
        {
          "eventId": "8",
          "contentId": "31",
          "title": "Street bring bank employee newspaper worker.",
          "description": "Strong your accept movie peace claim ahead light. Buy their art art president.",
          "date": "2024-10-20",
          "address": "26485 Larson Motorway\nJamesport, IL 02045",
          "creatorId": "7"
        },
        {
          "eventId": "9",
          "contentId": "39",
          "title": "Tax rather car.",
          "description": "Decision hundred body. Total the well daughter our.",
          "date": "2024-10-20",
          "address": "86199 Amy Grove\nEast Hayley, DC 99445",
          "creatorId": "5"
        },
        {
          "eventId": "10",
          "contentId": "56",
          "title": "Old oil father large anyone may.",
          "description": "Myself year all board. Budget consumer morning story point door quality federal.",
          "date": "2024-12-30",
          "address": "3859 Emma Field Suite 809\nJohnmouth, KY 51365",
          "creatorId": "7"
        },
        {
          "eventId": "11",
          "contentId": "27",
          "title": "Also community apply party.",
          "description": "Believe white save. Only sometimes where us keep. Cover measure measure many.",
          "date": "2024-11-14",
          "address": "57139 Kimberly Cliffs\nMcconnelltown, IL 14499",
          "creatorId": "9"
        },
        {
          "eventId": "12",
          "contentId": "50",
          "title": "Commercial away win matter water task measure.",
          "description": "Expect result identify structure seven you. Interview tonight put PM stay. Realize health class professional.",
          "date": "2024-12-04",
          "address": "6956 Espinoza Crest\nLawrenceside, OR 77395",
          "creatorId": "3"
        },
        {
          "eventId": "13",
          "contentId": "63",
          "title": "Enter never make.",
          "description": "Enough any should there small east candidate. Use yourself explain need accept.",
          "date": "2024-10-02",
          "address": "2299 Anderson Squares\nNew Kellyberg, HI 09751",
          "creatorId": "1"
        },
        {
          "eventId": "14",
          "contentId": "79",
          "title": "Specific trouble leave put.",
          "description": "Heart week lay word money ahead. Effort see international team. Eye maintain I speech hour thus as. Guess approach develop newspaper.",
          "date": "2024-10-13",
          "address": "74710 Taylor Ferry\nSouth Samantha, NM 69494",
          "creatorId": "2"
        },
        {
          "eventId": "15",
          "contentId": "2",
          "title": "Forward always artist money.",
          "description": "Price form yourself her language when. Prove building loss at. Total read her loss plan although.",
          "date": "2024-10-08",
          "address": "6777 Stevens Point Apt. 972\nBobbyport, NY 59121",
          "creatorId": "3"
        },
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

    };
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    // Inicializar la lista filtrada con todos los items
    this.filteredItems = this.items;
  }

};

</script>

<template>
  <div>
    <h1>Eventos</h1>
    <p>Para ti</p>
  </div>

  <div>
    <!-- Barra de búsqueda
     <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="filterItems"
    />
    -->



    <div >
      <pv-icon-field style="margin-left: 84%; ">
        <pv-input-icon class="pi pi-search" />
        <pv-input-text  placeholder="Search" />
      </pv-icon-field>
    </div>

        <!-- Lista de resultados filtrados
         <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
        -->




    <pv-scroll-panel
        style="width: 100%; height: 600px; solid-color: black"
        :dt="{
        bar: {
            background: '{primary.color}'
        }
    }"
    >
      <div id="list">
        <event-list :event-list="events"></event-list>
      </div>
    </pv-scroll-panel>




  </div>
</template>

<style scoped>
#list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>