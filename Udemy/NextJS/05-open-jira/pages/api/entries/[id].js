// Mongoose
import mongoose from "mongoose";

// Database
import { db } from "../../../database";
import { Entry } from "../../../models";

export default function handler(req, res) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `El id "${id}" no es válido` });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);
    default:
      return res.status(400).json({ message: "El método no existe" });
  }
}

const getEntry = async(req, res) => {
  const { id } = req.query;
  await db.connect();

  const entryToGet = await Entry.findById(id);
  
  await db.disconnect();

  if (!entryToGet) {
    return res
      .status(400)
      .json({ message: "No hay entrada con ese ID: " + id });
  } else {
    return res.status(200).json(entryToGet)
  }
}

const updateEntry = async (req, res) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: "No hay entrada con ese ID: " + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
      //runValidators para que el estado sea uno permitido, y el new para que nos mande y regrese la nueva información actualizada
    );
    await db.disconnect();
    res.status(200).json(updatedEntry);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};
