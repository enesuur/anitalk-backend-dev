export interface APIErrors extends Error {
    statusCode?:number;
    message?:string;
}