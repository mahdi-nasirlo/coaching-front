export interface General<T> {
    "data": T,
    "links": {
        "first": string,
        "last": string,
        "prev": string | null,
        "next": string | null
    },
    "meta": {
        "current_page": number,
        "from": number | null,
        "last_page": number,
        "links": {
            "url": string | null,
            "label": string,
            "active": boolean
        }[],
        "path": string,
        "per_page": number,
        "to": number | null,
        "total": number
    }
}

export interface GeneralResponseType {
    ok?: string,
    message: string,
    status: number,
    success?: string,
    data?: any,
}