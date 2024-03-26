import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { coachApiUrl } from "@/constants/coach";
import customeFetcher from "../../service/custome-fetcher";
import { z } from "zod";
import { GeneralResponseType } from "../../@types/general";
import customFetcher from "../../service/custome-fetcher";
import { PaginationState } from "@tanstack/react-table";

const { register, getPage, adminGet, adminUpdate, adminUpdateStatus } = coachApiUrl;

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
        queryKey: [adminGet.url, `${id}`],
        queryFn: () =>
            customFetcher({ url: adminGet.url + id, method: adminGet.method }),
        select: (data: z.infer<typeof adminGet.response>) => data.data,
    });

const useUpdateStatusAdminCoach = (id: string | number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: z.infer<typeof adminUpdateStatus.type>) =>
            customeFetcher({
                url: adminUpdateStatus.url + id,
                method: adminUpdateStatus.method,
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

const useUpdateAdminCoach = (id: number | string | undefined) =>
    useMutation({
        mutationFn: (data: z.infer<typeof adminUpdate.type.request>) =>
            customFetcher({
                url: adminUpdate.url + id,
                method: adminUpdateStatus.method,
                data,
            }),
    });

export {
    useRegisterCoach,
    useGetPageCoaches,
    useGetAdminCoach,
    useUpdateStatusAdminCoach,
    useUpdateAdminCoach
    // useCreateAdminCoach,
};
