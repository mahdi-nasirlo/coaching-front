import { meetingConstants } from "@/constants/meeting";
import { useMutation } from "@tanstack/react-query";
import customFetcher from "service/custome-fetcher";
import { z } from "zod";

const { createMeeting } = meetingConstants;

const useCreateMeeting = () => {

    return useMutation({
        mutationFn: async (
            data: z.infer<typeof createMeeting.type>
        ): Promise<z.infer<typeof createMeeting.response>> =>
            await customFetcher({
                url: createMeeting.url,
                method: createMeeting.method,
                data,
            }),
        // onSuccess: (data) => {
        //     queryClient.setQueriesData(
        //         { queryKey: [getAllCollectionWithCild.url] },
        //         data
        //     );
        // },
    });
};

export { useCreateMeeting };
