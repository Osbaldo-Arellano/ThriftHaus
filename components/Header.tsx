import React from 'react';

export default function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>THRIFT HAUS</h1>
      <p style={styles.tagline}>Curated Finds</p>
      <a href="#products" style={styles.button}>Shop Now</a>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center' as const,
    padding: '2rem 1rem',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    color:'black'
  },
  tagline: {
    fontSize: '1rem',
    color: '#555',
    margin: '0.5rem 0 1.5rem',
  },
  button: {
    display: 'inline-block',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    backgroundColor: 'black',
    borderColor: 'black',
    color:'white'
  },
  hero: {
    marginTop: '2rem',
    height: '200px',
    backgroundColor: '#f0f0f0',
    backgroundImage: 'url("/your-banner.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
  },
  reasonsContainer: {
    marginTop: '2rem',
  },
  reasonsTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  reasonsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '1rem',
    fontWeight: 500,
  },
};
