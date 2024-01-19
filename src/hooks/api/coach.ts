import {useMutation} from "@tanstack/react-query";
import {coachApiUrl} from "@/constants/coach";
import customeFetcher from "../../service/customeFetcher";
import {z} from "zod";
import {GeneralErrorType} from "../../@types/api-response/general";

const apiData = coachApiUrl

const useRegisterCoach = () => useMutation({
    mutationKey: [apiData.register.url],
    mutationFn: (variables: z.infer<typeof apiData.register.type>): Promise<GeneralErrorType> => customeFetcher({
        url: apiData.register.url,
        method: "POST",
        data: variables
    })
})

export {useRegisterCoach}