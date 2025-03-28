import pkg from 'jsonwebtoken'
import dotenv from 'dotenv'
const { verify } = pkg
dotenv.config()

const { SECRET_KEY } = process.env

const verifyToken = (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.headers['x-access-token'] || req.headers.authorization

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' })
  }

  // Verifica el token
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado.' })
      }
      return res.status(401).json({ error: 'Token inválido.' })
    }
    // Almacena el usuario decodificado en el objeto de solicitud para su uso posterior
    req.user = decoded
    const userId = decoded.id
    req.userId = userId
    // console.log(req.user.userId+' id del usuario')
    // console.log(req.user.email+': este es el email del usuario')

    next()
  })
}

export default verifyToken
