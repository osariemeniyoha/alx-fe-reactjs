function MainContent() {
  return (
    <main 
      style={{ 
        padding: '20px', 
        backgroundColor: 'black', 
        minHeight: '200px',
        textAlign: 'center' 
      }}
    >
      <h2 style={{ color: 'darkslategray', marginBottom: '10px' }}>
        Favorite Cities
      </h2>
      <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
