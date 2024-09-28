<script>

export default {
  name: "main-page",
  components: {},
}
</script>

<template>
  <pv-splitter layout="horizontal"  style="height: 100vh">
    <pv-splitter-panel :size="20" :disabled="true" class="left-side" >

      <div class="sidebar">
        <img alt="zen-logo" src="../../assets/zenflicks-logo.png" class="w-full p-3">

        <router-link to="/home">
          <pv-button class="sidebar-button" label="Home" icon="pi pi-home"></pv-button>
        </router-link>

        <router-link to="/explorer">
          <pv-button class="sidebar-button" label="Explorar" icon="pi pi-search"></pv-button>
        </router-link>

        <router-link to="/list">
          <pv-button class="sidebar-button" label="Listas" icon="pi pi-list"></pv-button>
        </router-link>

        <pv-button class="sidebar-button" label="Foros" icon="pi pi-comments"></pv-button>

        <router-link to="/events">
          <pv-button class="sidebar-button" label="Eventos" icon="pi pi-calendar"></pv-button>
        </router-link>


        <span class="spacer"></span>

        <div class="bottom-options">
          <router-link to="/perfil">
            <pv-button icon="pi pi-user" class="bottom-button"></pv-button>
          </router-link>
          <span class="spacer"></span>
          <pv-button icon="pi pi-sign-out" class="bottom-button"></pv-button>
        </div>

      </div>
    </pv-splitter-panel>
    <pv-splitter-panel :size="80" :disabled="true">
      <router-view></router-view>
    </pv-splitter-panel>
  </pv-splitter>
</template>

<style scoped>
.sidebar {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
}
.sidebar-button {
  width: 100%;
  justify-content: flex-start;
  background-color: #DE9199;
  border-color: #eeb4b4;
  color: black;
  font-size: 22px;
}
.sidebar-button:hover {
  background-color: #d04c4c !important;
  border-color: #eeb4b4 !important;
}

.left-side{
  background-color: #DE9199;
}

.bottom-options{
  display: flex;
}

.spacer{
  flex: 1 1 auto;
}

.bottom-button{
  background-color: #DE9199;
  border-color: #eeb4b4;
  color: black;
}
.bottom-button:hover{
  background-color: #d04c4c !important;
  border-color: #eeb4b4 !important;
}

</style>