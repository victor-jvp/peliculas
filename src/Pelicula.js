export default function Pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src="images/uploads/mv1.jpg" alt="" />
      <div class="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{props.titulo}</a>
        </h6>
        <p class="rate">
          <i class="ion-android-star"></i>
          <span>{props.calificacion}</span> /10
        </p>
        <p class="describe">
          { props.children }
        </p>
        <p class="run-time">
          Duracion: {props.duracion}’.<span>MMPA: PG-13 </span>.
          <span>Fecha: { props.fecha }</span>
        </p>
        <p>
          Director: <a href="#">Joss Whedon</a>
        </p>
        <p>
          Actores: { props.actores }
        </p>
      </div>
    </div>
  );
}
