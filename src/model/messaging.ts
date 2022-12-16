import { User } from "./user";

export class Messaging {
    id?: any;
    userSender?:User;
    userReceiver?:User;
    subject?: string;
    message?:string;
}