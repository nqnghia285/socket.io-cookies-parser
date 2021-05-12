# `Socket.IO Cookies Parser` [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/socket.io-cookies-parser.git)

`Socket.IO Cookies Parser` help us handle cookie for Socket.IO[](https://socket.io/)

### Note: After setup success, socket.request.cookies was parsed to JSON object.

### Functions:

```typescript
/**
 * @method namespaceCookieParser setup socket midleware for namespace instance
 * @param socket Socket
 */
function namespaceCookieParser(socket: Socket): void;
```

```typescript
/**
 * @method ioCookieParser setup socket midleware for io instance
 * @param socket Socket
 * @param next (err?: ExtendedError | undefined) => void
 */
function ioCookieParser(socket: Socket, next: (err?: ExtendedError | undefined) => void): void;
```

### Example:

```typescript
//ES6
import socketio from "socket.io";
import { namespaceCookieParser, ioCookieParser } from "socket.io-cookies-parser";
...
const io = new socketio.Server();
io.use(ioCookieParser);
...
const client = io.of("/client", namespaceCookieParser);
...
```
