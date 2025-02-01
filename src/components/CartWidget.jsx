//definir componente CartWidget 

const CartWidget = () => {
  return (
    <div style={styles.cart}>
       🛒<span style={styles.badge}>3</span>  
    </div>
  );
}

const styles = {
    cart: { position: "relative", fontSize: "24px", cursor: "pointer", marginTop: "1rem" },
    badge: { background: "red", color: "white", borderRadius: "50%", padding: "5px", fontSize: "14px", position: "absolute", top: "10px", right: "-10px" }
  };
//exportar CartWidget para ser usado en NavBar.jsx
  export default CartWidget; 