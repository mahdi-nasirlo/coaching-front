import React from 'react';
import {SelectProps} from "@radix-ui/react-select";
import {FilePond} from "react-filepond";
import 'filepond/dist/filepond.min.css'
import {getSessionToken} from "@utils/methods";

const FileUploadInput = React.forwardRef<HTMLInputElement, SelectProps>(
    ({...props}) => {
        return (
            <div className="file-upload-component" {...props}>
                <FilePond
                    server={{
                        // @ts-ignore
                        process: async (fieldName, file, metadata, load, error, progress, abort) => {

                            const formData = new FormData();
                            formData.append("file", file, file.name);

                            const token = await getSessionToken()

                            const res = await fetch("", {
                                method: "Post",
                                body: formData,
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                }
                            })
                            const resBody = await res.json()

                            if (resBody?.status)
                                return load(resBody?.message || "")

                            abort()
                        },
                        load: async (source, load, error, progress, abort) => {

                            console.log(source, load, error, progress, abort)

                        }
                    }}
                />
            </div>
        )
    }
)


export {FileUploadInput};