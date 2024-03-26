import { coachApiUrl } from "@/constants/coach";
import { Button } from "@components/ui/v2/button";
import { useUpdateStatusAdminCoach } from "hooks/api/coach";
import { Loader2 } from "lucide-react";
import React from "react";
import { z } from "zod";

export default function ShowPageAction({
    data,
}: {
    data: z.infer<typeof coachApiUrl.adminGet.response.shape.data> | undefined;
}) {
    const { mutateAsync, isPending } = useUpdateStatusAdminCoach(data?.id as number);

    return (
        <>
            {(data?.status == 2 || data?.status == 1) && (
                <Button
                    onClick={() => mutateAsync({ status: 3 })}
                    size="sm"
                    variant="destructive"
                >
                    {isPending && (
                        <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" />
                    )}
                    regect
                </Button>
            )}
            {(data?.status == 3 || data?.status == 1) && (
                <Button
                    onClick={() => mutateAsync({ status: 2 })}
                    size="sm"
                    variant="default"
                >
                    {isPending && (
                        <Loader2 className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" />
                    )}
                    accept
                </Button>
            )}
        </>
    );
}
