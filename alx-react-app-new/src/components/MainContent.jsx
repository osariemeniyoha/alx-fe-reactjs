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
      <h2 style={{ color: 'white', marginBottom: '10px' }}>
        Favorite Cities
      </h2>
      <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
        I love to visit <span style={{ fontWeight: 'bold' }}>New York</span>, 
        <span style={{ color: 'crimson' }}> Paris</span>, and 
        <span style={{ color: 'darkblue' }}> Tokyo</span>.
      </p>
    </main>
  );
}

export default MainContent;
