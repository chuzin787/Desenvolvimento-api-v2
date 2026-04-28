import * as userModel from '../models/userModel.js'

export const getUsers = async (req, res) => {
  const users = await userModel.getUsers()
  res.json(users)
}

export const createUser = async (req, res) => {
  const { name, email } = req.body
  const user = await userModel.createUser(name, email)
  res.status(201).json(user)
}