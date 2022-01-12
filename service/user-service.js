import Ticket from "../models/ticket-model.js";

const receiveTickets = async (search) => {
  const userTickets = await Ticket.find(search)
    .populate("userId", "name")
    .sort({
      creaatedAt: search.sort,
    });

  const formatUsr = userTickets.map((tic) => ({
    id: tic._id,
    userName: tic.userId.name,
    ticketName: tic.name,
    priority: tic.priority,
    createdAt: tic.creaatedAt,
  }));

  return formatUsr;
};

const create = async (ticket) => {
  const order = await Ticket.create(ticket);
  return order;
};

const userService = {
  create,
  receiveTickets,
};

export default userService;
