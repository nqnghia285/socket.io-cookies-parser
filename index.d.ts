import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { RequestType } from "./lib/interface";
import { Request } from "express";

export declare type IRequest = Request | RequestType;

/**
 * @method namespaceCookieParser setup socket midleware for namespace instance
 * @param socket Socket
 */
export declare function namespaceCookieParser(socket: Socket): void;

/**
 * @method ioCookieParser setup socket midleware for io instance
 * @param socket Socket
 * @param next (err?: ExtendedError | undefined) => void
 */
export declare function ioCookieParser(socket: Socket, next: (err?: ExtendedError | undefined) => void): void;
