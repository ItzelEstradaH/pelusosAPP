<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/inicio">
      <!-- <img src="" alt="Logo"> -->
      PeluSOS
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      @click="menuVisible=!menuVisible"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" :class="menuVisible?'show':''">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown" :class="dropdownVisible?'show':''">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            @click="dropdownVisible=!dropdownVisible"
          >Perfil</a>
          <div class="dropdown-menu" :class="dropdownVisible?'show':''"
           @click="dropdownVisible=!dropdownVisible, menuVisible=!menuVisible">
            <router-link class="dropdown-item" to="/perfil">Ver Perfil</router-link>
            <router-link class="dropdown-item" to="/reportes">Mis Reportes</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/">Cerrar sesión</router-link>
          </div>
        </li>
        <li class="nav-item" @click="menuVisible=!menuVisible">
          <router-link class="nav-link" to="/noticias">Noticias</router-link>
        </li>
        <li class="nav-item" @click="menuVisible=!menuVisible">
          <router-link class="nav-link" to="#">Legales</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      menuVisible:false,
      dropdownVisible:false
    }
  }
};
</script>
