import { IncomingMessage } from "node:http";

interface CustomerType {
    cookies?: object;
}

// RequestType
export type RequestType = IncomingMessage & CustomerType;
