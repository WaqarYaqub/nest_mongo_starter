/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface ITeacher extends Document{
    readonly name:string;
    readonly email:string;
    readonly gender: string;
    readonly password: string;
}