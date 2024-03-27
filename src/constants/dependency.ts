import { generalResponseZod } from "@/type/general";
import { z } from "zod";

export const dependencyConstance = {
    menu: {
        url: "/front-dependency/getMenu",
        method: "GET",
        response: generalResponseZod.extend({data: z.any()})
    }
} 
