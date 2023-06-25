/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface IGrade extends Document{
    readonly name:string
}