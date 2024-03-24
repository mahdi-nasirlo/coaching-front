import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { coachApiUrl } from "@/constants/coach";
import customeFetcher from "../../service/custome-fetcher";
import { z } from "zod";
import { GeneralResponseType } from "../../@types/general";
import customFetcher from "../../service/custome-fetcher";
import { PaginationState } from "@tanstack/react-table";

const { register, getPage, adminGet, adminUpdate, adminCreate } = coachApiUrl;

const useRegisterCoach = () =>
    useMutation({
        mutationKey: [register.url],
        mutationFn: (
            variables: z.infer<typeof register.type>
        ): Promise<GeneralResponseType> =>
            customeFetcher({
                url: register.url,
                method: "POST",
                data: variables,
            }),
    });

const useGetPageCoaches = ({
    paginationState,
}: {
    paginationState: PaginationState;
}) =>
    useQuery({
        queryKey: [getPage.url, paginationState],
        queryFn: () =>
            customFetcher({
                url: getPage.url,
                method: getPage.method,
                params: {
                    page: paginationState.pageIndex,
                },
            }),
        select: (data: z.infer<typeof getPage.response>) => data.data,
    });

const useGetAdminCoach = (id: number) =>
    useQuery({
        queryKey: [adminGet.url, id],
        queryFn: () =>
            customFetcher({ url: adminGet.url + id, method: adminGet.method }),
        select: (data: z.infer<typeof adminGet.response>) => data.data,
    });

const useUpdateAdminCoach = (id: string | number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: z.infer<typeof adminUpdate.type>) =>
            customeFetcher({
                url: adminUpdate.url + id,
                method: adminUpdate.method,
                data,
            }),
        onSuccess: (data, variables) => {
            console.log(data, variables, [adminGet.url, id]);

            queryClient.invalidateQueries({
                queryKey: [adminGet.url],
                exact: false,
            });
        },
    });
};

const useCreateAdminCoach = () =>
    useMutation({
        mutationFn: (data: z.infer<typeof adminCreate.type.request>) =>
            customFetcher({
                url: adminCreate.url,
                method: adminCreate.method,
                data,
            }),
    });

export {
    useRegisterCoach,
    useGetPageCoaches,
    useGetAdminCoach,
    useUpdateAdminCoach,
    useCreateAdminCoach,
};
