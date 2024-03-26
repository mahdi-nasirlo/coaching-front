import { generalResponseZod } from "../@types/general";
import { z } from "zod";

const getAllCollectionGroupRes = generalResponseZod.extend({
    data: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            handle: z.string(),
        })
    ),
});

const getAllCollectionRes = generalResponseZod.extend({
    data: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
        })
    ),
});

const createCollectionFormType = z.object({
    fa: z.object({
        name: z.string(),
    }),
    en: z.object({
        name: z.string(),
    }),
    // handle: z.string(),
});

const getAllCollectionItem = z.object({
    id: z.string(),
    name: z.string(),
    group: z.object({
        id: z.number(),
        name: z.string(),
    }),
});

const collectionConstance = {
    getAllCollectionGroup: {
        url: "/admin/collection-groups",
        method: "GET",
        response: getAllCollectionGroupRes,
    },
    createCollectionGroup: {
        url: "/admin/collection-groups",
        method: "POST",
        response: generalResponseZod.extend({
            data: z.array(z.object({})),
        }),
        type: z.object({
            fa: z.object({
                name: z.string(),
            }),
            en: z.object({
                name: z.string(),
            }),
            handle: z.string(),
        }),
    },
    getAllCollectionWithCild: {
        url: "/admin/collection",
        method: "GET",
        type: z.object({
            collection_group_id: z.number(),
            collection_id: z.number().optional(),
        }),
        response: getAllCollectionRes,
    },
    getAllCollection: {
        url: "/admin/collection/get-all",
        method: "GET",
        type: z
            .object({
                collection_group_id: z.string().optional(),
            })
            .optional(),
        item: getAllCollectionItem,
        response: generalResponseZod.extend({
            data: z.array(getAllCollectionItem),
        }),
    },
    createCollection: {
        url: "/admin/collection",
        method: "POST",
        response: getAllCollectionRes,
        type: {
            form: createCollectionFormType,
            request: createCollectionFormType.extend({
                collection_group_id: z.number(),
                parent_id: z.number().optional(),
            }),
        },
    },
    getBreadcrumbCollection: {
        url: "/admin/collection/get-breadcrumb/",
        method: "GET",
        type: z.number(),
        response: generalResponseZod.extend({
            data: z.array(z.string()),
        }),
    },
};

export { collectionConstance };
