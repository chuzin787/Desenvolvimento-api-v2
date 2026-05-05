import pkg from 'pg'
const { Pool } = pkg
import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../../.env') })
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const requiredEnv = ['DB_USER', 'DB_HOST', 'DB_NAME', 'DB_PORT']
const missingEnv = requiredEnv.filter((key) => !process.env[key])

if (missingEnv.length > 0) {
  throw new Error(`Variaveis de ambiente ausentes: ${missingEnv.join(', ')}`)
}

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS ?? '',
  port: Number(process.env.DB_PORT),
})
