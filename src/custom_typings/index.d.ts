export {};

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
  namespace Socket {
    interface SocketData {
      userId: string;
    }
  }
}
