import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Devy Neauxtonez",
    email: "dnt@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Devon DeVaughnn",
    email: "dd@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
