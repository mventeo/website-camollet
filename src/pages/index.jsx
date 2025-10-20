import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Club Atlètic Mollet - En construcció</title>
        <meta
          name="description"
          content="Club Atlètic Mollet - Pàgina web en construcció"
        />
      </Head>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: '20px'
      }}>
        <img
          src="/logos/Logo CAM.png"
          alt="Club Atlètic Mollet"
          style={{
            width: '300px',
            height: 'auto',
            marginBottom: '40px'
          }}
        />
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'normal',
          color: '#333',
          margin: 0
        }}>
          Estem construint la nova pàgina web del club.
        </h1>
      </div>
    </>
  )
}
