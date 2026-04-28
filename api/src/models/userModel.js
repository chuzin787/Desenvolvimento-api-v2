export const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users')
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  }
}
if (!name || !email) {
  return res.status(400).json({ error: 'Name e email são obrigatórios' })
}
