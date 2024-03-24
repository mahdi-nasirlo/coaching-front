import { uploadFileApiUrl } from "@/constants/upload-file";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const { process, load } = uploadFileApiUrl;

const useUploadFile = () =>
    useMutation({
        mutationFn: async (
            data: FormData
        ): Promise<z.infer<typeof process.response>> =>
            await fetch(process.url, { method: "POST", body: data }).then(
                async (res) => await res.json()
            ),
    });

const useLoadFile = () =>
    useMutation({
        mutationFn: async (data: FormData) =>
            fetch(load, { method: "GET", body: data }).then(
                async (res) => await res.blob()
            ),
    });
export { useUploadFile, useLoadFile };
