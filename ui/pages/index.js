import React from 'react'

// const ndex = () => (
//     <>
//         <main>
//             <section id="hero" />
//             <section id="about" />
//             <section id="menu" />
//             <section id="reviews" />
//             <section id="reservation" />
//             <section id="gallery" />
//         </main>
//         <footer id="footer">
//             <div />
//         </footer>
//     </>
// )

const Index = () => (
    <main id="home" role="main">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happe!</h2>
        <div style={{ height: '50vh', background: 'blue' }} />
        <div id="about" style={{ height: '200vh', background: '#eeeeee' }} />
        <div id="reservations" style={{ height: '50vh', background: 'green' }} />
        <div style={{ height: '20vh', background: 'red' }} />
    </main>
)

export default Index
