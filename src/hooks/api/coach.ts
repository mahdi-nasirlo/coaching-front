import { useMutation } from "@tanstack/react-query";
import { coachApiUrl } from "@/constants/coach";
import customeFetcher from "../../service/custome-fetcher";
import { z } from "zod";
import { GeneralResponseType } from "../../@types/general";

const apiData = coachApiUrl;

const useRegisterCoach = () =>
    useMutation({
        mutationKey: [apiData.register.url],
        mutationFn: (
            variables: z.infer<typeof apiData.register.type>
        ): Promise<GeneralResponseType> =>
            customeFetcher({
                url: apiData.register.url,
                method: "POST",
                data: variables,
            }),
    });

export { useRegisterCoach };
