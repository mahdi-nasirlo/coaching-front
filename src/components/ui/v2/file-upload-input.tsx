import React from "react";
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { uploadFileApiUrl } from "@/constants/upload-file";
import { ControllerRenderProps } from "react-hook-form";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import { useSession } from "next-auth/react";
import { cx } from "class-variance-authority";

const apiData = uploadFileApiUrl;

registerPlugin(FilePondPluginImagePreview);

const FileUploadInput = (
    props: ControllerRenderProps<any, string> & FilePondProps
) => {
    // const session = useSession();

    return (
        <div className={cx("file-upload-component")}>
            <FilePond
                {...props}
                files={props.value}
                // @ts-ignore
                onprocessfile={(error, file) => {
                    props.onChange(file.serverId);
                }}
                server={{
                    url: apiData.baseUrl,
                    // fetch: "/get/file",
                    process: {
                        url: apiData.process.url,
                        method: "POST",
                        headers: {
                            "x-customheader": "Processing File",
                        },
                        onload: (response) => {
                            console.log("raw", response);
                            response = JSON.parse(response);
                            console.log(response);
                            return response?.data?.key;
                        },
                        onerror: (response) => {
                            console.log("raw", response);
                            response = JSON.parse(response);
                            console.log(response);
                            return response.message;
                        },
                        ondata: (formData) => {
                            console.log(formData);
                            return formData;
                        },
                    },
                }}
            />
        </div>
    );
};

export { FileUploadInput };
