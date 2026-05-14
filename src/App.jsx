import fondo from "./assets/fondo-boda.png"

function App() {
  const telefono = "5213314677303"

  const confirmarAsistencia = (respuesta) => {
    const nombre = document.getElementById("nombre").value
    const mensaje = `Hola, soy ${nombre}. ${respuesta} a la boda de Angel y Alejandra`
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    window.open(url, "_blank")
  }

  return (
    <div style={styles.page}>
      <a
        href="https://www.google.com/maps/place/Terraza+MK/@20.4839567,-103.3402086,17z/data=!3m1!4b1!4m6!3m5!1s0x842f4d007c93ee17:0xecacc40486eaca9f!8m2!3d20.4839567!4d-103.3402086!16s%2Fg%2F11z2wkyfld!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
        style={styles.locationButton}
      >
        📍 Ubicación
      </a>

      <a
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52003993"
        target="_blank"
        rel="noreferrer"
        style={styles.giftButton}
      >
        🎁 Mesa de regalos
      </a>

      <div style={styles.confirmBox}>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre"
          style={styles.input}
        />

        <div style={styles.confirmButtons}>
          <button
            style={styles.confirmButton}
            onClick={() => confirmarAsistencia("Sí asistiré")}
          >
            ¡Sí ahí estaré!
          </button>

          <button
            style={styles.confirmButton}
            onClick={() => confirmarAsistencia("No podré asistir")}
          >
            No podré asistir
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "120vh",
    backgroundImage: `url(${fondo})`,
    backgroundSize: "contain",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#15161d",
    fontFamily: "Georgia, serif",
    position: "relative"
  },

  locationButton: {
    position: "absolute",
    top: "725px",
    left: "50%",
    transform: "translateX(250px)",
    backgroundColor: "#a67c2d",
    color: "white",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "25px",
    fontSize: "14px",
    fontWeight: "bold",
    zIndex: 10,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
  },

  giftButton: {
    position: "absolute",
    top: "870px",
    left: "50%",
    transform: "translateX(210px)",
    backgroundColor: "#a67c2d",
    color: "white",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    zIndex: 5,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
  },

  confirmBox: {
    position: "absolute",
    top: "1010px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "420px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  input: {
    padding: "18px",
    borderRadius: "14px",
    border: "2px solid #a67c2d",
    fontSize: "20px",
    outline: "none",
    color: "#7a5c45",
    backgroundColor: "rgba(255,255,255,0.9)"
  },

  confirmButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  },

  confirmButton: {
    flex: 1,
    padding: "16px",
    borderRadius: "14px",
    border: "2px solid #a67c2d",
    backgroundColor: "#efe7d8",
    color: "#7a5c45",
    fontSize: "18px",
    cursor: "pointer"
  }
}

export default App