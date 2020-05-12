<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col col-sm-6 col-lg-4">
        <h3 class="font-weight-bold">Iniciar sesión</h3>
        <p>Ingresa tus datos para acceder.</p>
        <div class="card mt-3">
          <div class="card-body">
            <form action="/inicio">
              <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" class="form-control" id="telefono" placeholder="Teléfono (10 dígitos)">
              </div>
              <div class="form-group">
                <label for="contraseña">Contraseña:</label>
                <input type="password" class="form-control" id="contraseña" placeholder="Contraseña">
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="recuerdame">
                <label class="form-check-label" for="recuerdame">Recordarme</label>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Ingresar</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-3 text-center">No tienes cuenta? <router-link to="/registro">Registrate aquí</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>