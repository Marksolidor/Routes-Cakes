export default () => {
    return (
      <div className="text-center">
        <h1 className="pt-4">
          Cuentanos, ¿en qué te podemos ayudar? 
        </h1>
        <div class="mb-3">
  <label  class="form-label">Correo</label>
  <input type="email" class="form-control" placeholder="Ingrese su correo"></input>
</div>
<div class="mb-3">
  <label  class="form-label">Descripción</label>
  <textarea class="form-control" placeholder="Ingrese sus comentarios" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary">Enviar</button>
      </div>
    );
  };