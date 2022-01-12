import User from "../models/user-model.js";
import userService from "../service/user-service.js";

const getTickets = async (req, res) => {
  //   const { userId, priority, sort, outputFormat } = req.query;
  const search = req.query;
  const format = search.outputFormat;

  try {
    if (format === undefined || format === "json") {
      const data = await userService.receiveTickets(search);
      return res.status(200).json(data);
    }

    if (format === "html") {
      const data = await userService.receiveTickets(search);

      const tickets = data.map(
        (tic) =>
          `<tr>
            <td>${tic.id}</td>
            <td>${tic.userName}</td>
            <td>${tic.ticketName}</td>
            <td>${tic.priority}</td>
            <td>${tic.createdAt}</td>
          </tr>`
      );
      const ticketsStr = tickets.join(" ");
      const table = `<table>${ticketsStr}</table>`;

      return res.status(200).send(table);
    }

    return res.status(400).json({ message: "Incorrect output format" });
  } catch (e) {
    res.status(500).json(e);
  }
};

const createUser = async (req, res) => {
  const name = req.body.name;
  try {
    const user = await User.create({ name });
    return res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createTicket = async (req, res) => {
  //   const { userId, name, priority } = req.body;
  const ticket = req.body;
  try {
    const order = await userService.create(ticket);

    return res.status(200).json(order);
  } catch (e) {
    res.status(500).json(e);
  }
};

const userCntrl = {
  createUser,
  getAllUsers,
  createTicket,
  getTickets,
};

export default userCntrl;
