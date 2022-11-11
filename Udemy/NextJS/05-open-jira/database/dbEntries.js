// Mongoose
import { isValidObjectId } from "mongoose";

// DB
import {db} from "./"
import {Entry} from "../models"

export const getEntryById = async(id) => {
    if(!isValidObjectId(id)) return null;

    await db.connect();
    const entry = await Entry.findById(id).lean(); //el lean sirve para cargar menos data al entry
    await db.disconnect();
    return JSON.parse(JSON.stringify(entry))
}