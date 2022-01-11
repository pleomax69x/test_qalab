import User from "../models/user-model.js";
import Ticket from "../models/ticket-model.js";

const createUser = async (req, res) => {
  const name = req.body.name;
  try {
    console.log(req.body);
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
  const { userId, name, priority } = req.body;
  try {
    console.log(req.body);
    const order = await Ticket.create({ userId, name, priority });
    return res.status(200).json(order);
  } catch (e) {
    res.status(500).json(e);
  }
};

// изменить потом или удалить
const getTickets = async (req, res) => {
  try {
    console.log(req.query);

    // const orders = await Ticket.find();
    // const orders = await Ticket.find().populate(User).exec();
    // .populate({ path: 'id', model: 'ssers', select:'id name' })
    const orders = await Ticket.find().populate({
      path: "userId",
      model: "User",
      select: "name",
    });

    // console.log(orders);
    res.status(200).json(orders);
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
