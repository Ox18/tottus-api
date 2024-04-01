export type Handler<T = any> = (request: T) => Promise<any> | any;
