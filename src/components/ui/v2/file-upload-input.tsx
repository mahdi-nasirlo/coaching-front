import React from "react";
import {FilePond} from "react-filepond";
import "filepond/dist/filepond.min.css";
import {getSessionToken} from "@utils/methods";
import {uploadFileApiUrl} from "@/constants/upload-file";
import {ControllerRenderProps} from "react-hook-form";

const apiData = uploadFileApiUrl;

const FileUploadInput = ((props: ControllerRenderProps<any, string>) => {
        return (
            <div className="file-upload-component">
                <FilePond
                    files={props.value}
                    // @ts-ignore
                    onprocessfile={(error, file) => {
                        props.onChange(file.serverId);
                    }}
                    server={{
                        process: async (
                            // @ts-ignore
                            fieldName,
                            file,
                            // @ts-ignore
                            metadata,
                            load,
                            error,
                            // @ts-ignore
                            progress,
                            // @ts-ignore
                            abort
                        ) => {
                            const formData = new FormData();
                            formData.append("file", file, file.name);

                            const token = await getSessionToken();

                            try {
                                const res = await fetch(apiData.upload.url, {
                                    method: "Post",
                                    body: formData,
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                });
                                const resBody = await res.json();

                                if (resBody?.status)
                                    return load(resBody?.path || "");
                            } catch (e: any) {
                                error(e?.response?.data?.message || e.message);
                            }
                        },
                        load: async (source, load, error, progress, abort) => {
                            console.log(source, load, error, progress, abort);
                        },
                    }}
                />
            </div>
        );
    }
);

export {FileUploadInput};
