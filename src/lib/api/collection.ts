import { collectionConstance } from "@/constants/collection";
import customJsFetch from "service/custom-js-fetch";
import customFetcher from "service/custome-fetcher";
import { z } from "zod";

const {
    getAllCollectionGroup: getAll,
    getAllCollectionWithCild: getAllCollection,
    getBreadcrumbCollection: getBreadcrumb,
} = collectionConstance;

const getCollectionGroupWithChild = async (): Promise<
    z.infer<typeof getAll.response>
> => await customFetcher({ url: getAll.url, method: getAll.method });

const getCollectionWithChild = async (
    data: z.infer<typeof getAllCollection.type>
): Promise<z.infer<typeof getAllCollection.response>> =>
    await customJsFetch({
        url: getAllCollection.url,
        method: getAllCollection.method,
        params: data,
    });

const getBreadcrumbCollection = async (
    id: number
): Promise<z.infer<typeof getBreadcrumb.response>> =>
    await customJsFetch({
        url: getBreadcrumb.url + id,
        method: getBreadcrumb.method,
    });

export {
    getCollectionGroupWithChild,
    getCollectionWithChild,
    getBreadcrumbCollection,
};
