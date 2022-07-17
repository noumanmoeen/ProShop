
import bcrypt from 'bcryptjs'
const users = [
  {
    name: "Admin User",
    email: "admin@text.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "john@text.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "jane@text.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users