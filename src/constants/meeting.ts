import { generalResponseZod } from "@/type/general";
import { z } from "zod";

const meetingConstants = {
    createMeeting: {
        url: "/admin/meeting",
        method: "POST",
        type: z.any(),
        response: generalResponseZod.extend({
            data: z.any(),
        }),
    },
};

export { meetingConstants };
