import { ExtendedError } from "socket.io/dist/namespace";
import { RequestType } from "./lib/interface";
import { cookieParse } from "handle-cookie";
import { Socket } from "socket.io";

export type IRequest = Request | RequestType;

/**
 * @method namespaceCookieParser setup socket midleware for namespace instance
 * @param socket Socket
 */
export function namespaceCookieParser(socket: Socket): void {
	const req: IRequest = socket.request;
	const cookies = cookieParse(socket.request.headers.cookie);
	req.cookies = cookies;
}

/**
 * @method ioCookieParser setup socket midleware for io instance
 * @param socket Socket
 * @param next (err?: ExtendedError | undefined) => void
 */
export function ioCookieParser(socket: Socket, next: (err?: ExtendedError | undefined) => void): void {
	const req: IRequest = socket.request;
	const cookies = cookieParse(socket.request.headers.cookie);
	req.cookies = cookies;
	next();
}
