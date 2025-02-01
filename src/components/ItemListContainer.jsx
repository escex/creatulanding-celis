const ItemListContainer = ({ greeting }) => {
    return <h2 style={styles.container}>{greeting}</h2>;
  };
  
  const styles = {
    container: { padding: "20px", textAlign: "center", fontSize: "24px" }
  };
  
  export default ItemListContainer;
  