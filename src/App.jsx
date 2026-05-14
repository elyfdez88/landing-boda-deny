import fondo from "./assets/fondo-boda.png"

function App() {
  const telefono = "5213312345678"

  const confirmarAsistencia = (respuesta) => {
    const nombre = document.getElementById("nombre").value || "Invitado"

    const mensaje = `Hola, soy ${nombre}. ${respuesta} a la boda de Angel y alejandra. ¡Gracias por la invitación!`

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    window.open(url, "_blank")
  }

  return (
    <div className="page">
      <div className="invitation">
        <img
          src={fondo}
          alt="Invitación"
          className="invitationImage"
        />

        <a
          href="https://www.google.com/maps/place/Terraza+MK/@20.4839567,-103.3402086,17z/data=!3m1!4b1!4m6!3m5!1s0x842f4d007c93ee17:0xecacc40486eaca9f!8m2!3d20.4839567!4d-103.3402086!16s%2Fg%2F11z2wkyfld!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="locationButton"
        >
          📍 Ubicación
        </a>

        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52003993"
          target="_blank"
          rel="noreferrer"
          className="giftButton"
        >
          🎁 Mesa de regalos
        </a>
      </div>

      <div className="confirmBox">
        <input
          id="nombre"
          type="text"
          placeholder="Nombre"
        />

        <div className="confirmButtons">
          <button
            onClick={() =>
              confirmarAsistencia("Sí asistiré")
            }
          >
            ¡Sí ahí estaré!
          </button>

          <button
            onClick={() =>
              confirmarAsistencia("No podré asistir")
            }
          >
            No podré asistir
          </button>
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          background-color: #15161d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 40px;
          font-family: Georgia, serif;
        }

        .invitation {
          position: relative;
          width: min(100%, 1100px);
        }

        .invitationImage {
          width: 100%;
          display: block;
        }

        .locationButton,
        .giftButton {
          position: absolute;
          background-color: #a67c2d;
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          z-index: 10;
        }

        .locationButton {
          top: 80%;
          left: 79%;
          transform: translate(-50%, -50%);
          padding: 10px 18px;
          font-size: clamp(10px, 1vw, 14px);
        }

        .giftButton {
          top: 95%;
          left: 79%;
          transform: translate(-50%, -50%);
          padding: 14px 24px;
          font-size: clamp(11px, 1.2vw, 16px);
        }

        .confirmBox {
          width: min(92%, 500px);
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .confirmBox input {
          padding: 16px;
          border-radius: 12px;
          border: 2px solid #a67c2d;
          font-size: 18px;
          background: white;
        }

        .confirmButtons {
          display: flex;
          gap: 16px;
        }

        .confirmButtons button {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          border: 2px solid #a67c2d;
          background-color: #efe7d8;
          color: #7a5c45;
          font-size: 16px;
          cursor: pointer;
          font-family: Georgia, serif;
        }

        @media (max-width: 600px) {
          .locationButton {
            padding: 6px 10px;
            font-size: 10px;
          }

          .giftButton {
            padding: 8px 12px;
            font-size: 11px;
          }

          .confirmButtons {
            gap: 10px;
          }

          .confirmButtons button {
            font-size: 12px;
            padding: 12px 8px;
          }

          .confirmBox input {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default App