// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  // Leggiamo la password
  const correctPassword = process.env.SITE_PASSWORD

  // DEBUGGING: Controlliamo se il server conosce la password
  if (!correctPassword) {
    return {
      success: false,
      debug: "Il server NON trova la variabile SITE_PASSWORD. Controlla .env o le impostazioni di Vercel.",
      receivedPassword: password
    }
  }

  if (password === correctPassword) {
    return {
      success: true,
      message: 'Authorized'
    }
  } else {
    // Invece di bloccare tutto, restituiamo il motivo
    return {
      success: false,
      debug: "La password inserita è diversa da quella salvata nel server.",
      receivedPassword: password,
      serverPassword: correctPassword // (ATTENZIONE: questo lo mostrerà nel messaggio di errore!)
    }
  }
})