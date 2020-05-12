<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col col-sm-6 col-lg-4">
        <h3 class="font-weight-bold">Crear cuenta</h3>
        <p>Ingresa tus datos para registrar una cuenta nueva.</p>
        <div class="card mt-3">
          <div class="card-body">
            <form action="/inicio">
              <div class="form-group">
                <p>Tipo de usuario:</p>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tipo" id="mortal" value="1" checked>
                  <label class="form-check-label" for="mortal">
                    Mortal
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tipo" id="voluntario" value="2">
                  <label class="form-check-label" for="voluntario">
                    Voluntario
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="tipo" id="asociacion" value="3" checked>
                  <label class="form-check-label" for="asociacion">
                    Asociación
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="telefono">RFC:</label>
                <input type="text" class="form-control" name="rfc" id="rfc" placeholder="RFC">
              </div>
              <div class="form-group">
                <label for="telefono">Nombre:</label>
                <input type="text" class="form-control" name="nombre" id="telefono" placeholder="Nombre">
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" class="form-control" name="telefono" id="telefono" placeholder="Teléfono (10 dígitos)">
              </div>
              <div class="form-group">
                <label for="contraseña">Contraseña:</label>
                <input type="password" class="form-control" name="contraseña" id="contraseña" placeholder="Contraseña">
              </div>
              <div class="form-group">
                <label for="contraseña">Confirmar contraseña:</label>
                <input type="password" class="form-control" id="repite-contraseña" placeholder="Repite tu contraseña">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>