import React from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";
import {uploadFileApiUrl} from "@/constants/upload-file";
import {ControllerRenderProps} from "react-hook-form";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {useSession} from "next-auth/react";

const apiData = uploadFileApiUrl;

registerPlugin(FilePondPluginImagePreview)

const FileUploadInput = ((props: ControllerRenderProps<any, string>) => {

        const session = useSession()

        return (
            <div className="file-upload-component">
                <FilePond
                    files={props.value}
                    // @ts-ignore
                    onprocessfile={(error, file) => {
                        props.onChange(file.serverId);
                    }}
                    name="file"
                    server={{
                        process: apiData.upload.url,
                        // url: apiData.upload.url,
                        headers: {
                            // @ts-ignore
                            "Authorization": `Bearer ${session.data?.accessToken}`,
                        }
                    }}
                />
            </div>
        );
    }
);

export {FileUploadInput};
