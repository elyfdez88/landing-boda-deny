import fondoMovil from "./assets/fondo-movil.png"

function App() {

  const telefono = "5213314677303"

  const confirmarAsistencia = (respuesta) => {

    const nombre =
      document.getElementById("nombre").value || "Invitado"

    const mensaje =
      `Hola, soy ${nombre}. ${respuesta} a la boda de Angel y Alejandra. ¡Gracias por la invitación!`

    const url =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    window.open(url, "_blank")
  }

  return (
    <>
      <div className="container">

        <img
          src={fondoMovil}
          alt="Invitación"
          className="background"
        />

        {/* BOTÓN UBICACIÓN */}
        <a
          href="https://www.google.com/maps/place/Terraza+MK/@20.4839567,-103.3402086,17z/data=!3m1!4b1!4m6!3m5!1s0x842f4d007c93ee17:0xecacc40486eaca9f!8m2!3d20.4839567!4d-103.3402086!16s%2Fg%2F11z2wkyfld!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="locationButton"
        >
          📍 Ubicación
        </a>

        {/* BOTÓN REGALO */}
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52003993"
          target="_blank"
          rel="noreferrer"
          className="giftButton"
        >
          🎁 Mesa de regalos
        </a>

        {/* CONFIRMACIÓN */}
        <div className="confirmSection">

          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
          />

          <button
            className="yesButton"
            onClick={() =>
              confirmarAsistencia("Sí asistiré")
            }
          >
            ✔ ¡Sí ahí estaré!
          </button>

          <button
            className="noButton"
            onClick={() =>
              confirmarAsistencia("No podré asistir")
            }
          >
            ✖ No podré asistir
          </button>

        </div>

      </div>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#f3f1ee;
          font-family: Georgia, serif;
        }

        .container{
          position:relative;
          width:100%;
          max-width:430px;
          margin:auto;
        }

        .background{
          width:100%;
          display:block;
        }

        /* UBICACIÓN */

        .locationButton {
          position: absolute;
          top: 46%;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          text-align: center;
          background: #a67c2d;
          color: white;
          padding: 5px 12px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 13px;
          font-weight: bold;
          box-shadow: 0 5px 14px rgba(0,0,0,.18);
        }
        /* REGALO */

        .giftButton {
          position: absolute;
          top: 68%;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          text-align: center;
          background: #a67c2d;
          color: white;
          padding: 5px 12px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 13px;
          font-weight: bold;
          box-shadow: 0 5px 14px rgba(0,0,0,.18);
          z-index: 10;
        }

        /* CONFIRMACIÓN */

        .confirmSection {
          position: absolute;
          top: 86%;
          left: 50%;
          transform: translateX(-50%);
          width: 68%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 20;
        }

        .confirmSection input {
          padding: 12px 14px;
          border-radius: 30px;
          border: 2px solid #d8c7a3;
          background: white;
          font-size: 13px;
          outline: none;
        }

        .yesButton,
        .noButton {
            padding: 8px;
            border-radius: 30px;
            font-size: 12px;
            cursor: pointer;
            font-weight: bold;
            width: 55%;
            margin: auto;
            z-index: 10;
            top: 84%;
          }

        .yesButton{
          background:#a67c2d;
          color:white;
        }

        .noButton{
          background:white;
          color:#7b6848;
          border:2px solid #d8c7a3;
        }

        .confirmSection input {
          user-select: text;
          -webkit-user-select: text;
          cursor: text;
          caret-color: #a67c2d;
          color: #7b6848;
          z-index: 20;
        }

      `}</style>
    </>
  )
}

export default App
