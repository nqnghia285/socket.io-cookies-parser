import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { RequestType } from "./lib/interface";
import { cookieParse } from "handle-cookie";

/**
 * @method parser
 * @param socket
 */
export function parser(socket: Socket): void {
    const req: RequestType = socket.request;
    const cookies = cookieParse(socket.request.headers.cookie);
    req.cookies = cookies;
}

/**
 * @method socketIoCookieParser
 * @param socket
 * @param next
 */
export default function cookieParser(socket: Socket, next: (err?: ExtendedError | undefined) => void): void {
    const req: RequestType = socket.request;
    const cookies = cookieParse(socket.request.headers.cookie);
    req.cookies = cookies;
    next();
}
