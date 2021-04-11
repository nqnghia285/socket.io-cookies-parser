/// <reference path="index.ts" />
/// <reference types="handle-cookie" />

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
export function cookieParser(socket: any, next: (err?: ExtendedError | undefined) => void): void;
