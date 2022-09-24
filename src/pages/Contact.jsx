export default () => {
    return (
      <div className="text-center">
        <h1 className="pt-4">
          Cuentanos, ¿en qué te podemos ayudar? 
        </h1>
        <div className="mb-3">
  <label  className="form-label">Correo</label>
  <input type="email" className="form-control" placeholder="Ingrese su correo"></input>
</div>
<div className="mb-3">
  <label  className="form-label">Descripción</label>
  <textarea className="form-control" placeholder="Ingrese sus comentarios" rows="3"></textarea>
</div>
<button type="button" className="btn btn-dark">Enviar</button>
      </div>
    );
  };