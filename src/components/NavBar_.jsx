//importar CartWidget
import CartWidget from './CartWidget';

//definir NavBar
const NavBar = () => {
  return (
    <nav style={styles.navbar}>              
      <h1 sytle={styles.logo}>Escesounds</h1>   
      <ul style={styles.navLinks}>                
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />       
    </nav>
  );
};

//STYLE LATER
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: "10px",
    backgroundColor: 'lightgray',
    color: 'black',
  },
  navLinks: {
    display: 'flex',
    marginLeft: '40vh',
    marginTop: '1.5rem',
    gap: '2rem',
    listStyle: 'none',  
  },
  logo: {
    Margin: '0',
  },
};


//exportar NavBar para ser usado en App.js
export default NavBar;