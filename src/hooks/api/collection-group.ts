import { collectionConstance } from "@/constants/collection";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import {
    getBreadcrumbCollection,
    getCollectionGroupWithChild,
    getCollectionWithChild,
} from "@/lib/api/collection";
import customFetcher from "service/custome-fetcher";

const {
    getAllCollectionGroup,
    createCollectionGroup,
    getAllCollectionWithCild,
    getAllCollection,
    createCollection,
    getBreadcrumbCollection: getBreadcrumbCollectionApiData,
} = collectionConstance;

const useGetAllCollectionGroup = () =>
    useQuery({
        queryKey: [getAllCollectionGroup.url],
        queryFn: getCollectionGroupWithChild,
        select: (data) => data.data,
    });

const useCreateCollectionGroup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (
            data: z.infer<typeof createCollectionGroup.type>
        ): Promise<z.infer<typeof createCollectionGroup.response>> =>
            await customFetcher({
                url: createCollectionGroup.url,
                method: createCollectionGroup.method,
                data,
            }),
        onSuccess: (data) => {
            queryClient.setQueriesData(
                { queryKey: [getAllCollectionGroup.url] },
                data
            );
        },
    });
};

const useGetAllCollectionWithChild = (
    data: z.infer<typeof getAllCollectionWithCild.type>
) =>
    useQuery({
        queryKey: [getAllCollectionWithCild.url],
        queryFn: () => getCollectionWithChild(data),
        select: (data) => data.data,
    });

const useGetAllCollection = (data: z.infer<typeof getAllCollection.type>) =>
    useQuery({
        queryKey: [getAllCollection.url],
        queryFn: () =>
            customFetcher({
                url: getAllCollection.url,
                method: getAllCollection.method,
                params: data,
            }),
        select: (data: z.infer<typeof getAllCollection.response>) => data.data,
    });

const useGetBreadcrumbCollection = (
    data: z.infer<typeof getBreadcrumbCollectionApiData.type> | undefined
) =>
    useQuery({
        queryKey: [getBreadcrumbCollectionApiData.url, data],
        queryFn: () => getBreadcrumbCollection(data as any),
        select: (data) => data.data,
        enabled: typeof data !== "undefined",
    });

const useCreateCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (
            data: z.infer<typeof createCollection.type.request>
        ): Promise<z.infer<typeof createCollection.response>> =>
            await customFetcher({
                url: createCollection.url,
                method: createCollection.method,
                data,
            }),
        onSuccess: (data) => {
            queryClient.setQueriesData(
                { queryKey: [getAllCollectionWithCild.url] },
                data
            );
        },
    });
};

export {
    useGetAllCollectionGroup,
    useGetBreadcrumbCollection,
    useCreateCollectionGroup,
    useGetAllCollectionWithChild,
    useGetAllCollection,
    useCreateCollection,
};
