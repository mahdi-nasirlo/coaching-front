export type ApiResponse = {
    data: any,
    message?: string,
    success?: boolean,
    meta?: {
        first: string,
        last: string,
    }
}