// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  // Leggiamo la password dal file .env (che NON è mai mandato al browser)
  const correctPassword = process.env.SITE_PASSWORD

  if (password === correctPassword) {
    return {
      success: true,
      message: 'Accesso autorizzato'
    }
  } else {
    // Restituisce un errore generico (non sveliamo la password)
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})