export type Coach =
    {
        name: string,
        hourly_price_formatted: string,
        hourly_price: string,
        username: string,
        uuid: string,
        avatar: string,
        about_me: string,
        job_experience?: string,
        education?: string,
        best_on?: string,
    }


export type Times = {
    id: number,
    is_active: boolean,
    is_reserved: boolean,
    date: string,
    time: string,
    body: string,
}