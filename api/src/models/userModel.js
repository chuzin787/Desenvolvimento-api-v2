export const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users')
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  }
}