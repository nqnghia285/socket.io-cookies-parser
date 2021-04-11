/// <reference path="index.ts" />
/// <reference types="socket.io" />
/// <reference types="handle-cookie" />

import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

/**
 * @method parser
 * @param socket
 */
export function parser(socket: any): void;

/**
 * @method socketIoCookieParser
 * @param socket
 * @param next
 */
export function cookieParser(socket: Socket, next: (err?: ExtendedError | undefined) => void): void;
