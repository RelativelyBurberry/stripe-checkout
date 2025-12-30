// src/pages/Home.jsx
export default function Home() {
  const checkout = () => {
    window.location.href = "http://localhost:3000/checkout"
  }

  return <button onClick={checkout}>Buy for $50</button>
}
