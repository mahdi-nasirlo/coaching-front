import * as React from "react";

import { cx } from "class-variance-authority";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, XIcon } from "lucide-react";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useUploadFile } from "hooks/api/file-managment";
import { ControllerRenderProps } from "react-hook-form";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const ProfileInput = (
    props: ControllerRenderProps<any, string> & {
        className?: React.HTMLProps<HTMLElement>["className"];
        error?: boolean;
    }
) => {
    const upload = useUploadFile();

    const [file, setFile] = React.useState<string>();

    const myRefname = React.useRef<HTMLInputElement>(null);

    const handleOnClean = () => {
        if (myRefname.current && myRefname.current.value) {
            myRefname.current.value = "";
            setFile(undefined);
        }
    };

    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        const url = file ? URL.createObjectURL(file) : undefined;

        setFile(url);

        if (file) {
            const formData = new FormData();

            formData.append("file", file);

            const res = await upload.mutateAsync(formData);

            if (res.success) {
                props.onChange(res.data.key);
            }
        }
    };

    return (
        <div>
            <input
                type="file"
                className="tw-hidden"
                multiple={false}
                ref={myRefname}
                onChange={handleOnChange}
            // {...props}
            />
            <div
                className={cx(
                    props.className,
                    "tw-w-15 tw-h-15 tw-overflow-hidden tw-bg-warmGray-100 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-rounded-full hover:tw-scale-105 hover:tw-bg-warmGray-300 tw-transition-all tw-duration-300"
                )}
                onClick={() => myRefname?.current?.click()}
            >
                <AnimatePresence>
                    {typeof file == "string" ? (
                        <div className="tw-relative tw-w-full tw-h-full">
                            <motion.div
                                transition={{ duration: 1 }}
                                initial={{ x: 20 }}
                                animate={{
                                    x: 0,
                                }}
                            >
                                <XIcon
                                    className="tw-absolute tw-z-[100] tw-bottom-9 tw-left-2 tw-font-bold tw-h-6 tw-w-6 tw-bg-gray-900 tw-text-white tw-bg-opacity-50 tw-rounded-full tw-p-1 hover:tw-rounded-full tw-transition-all tw-duration-300"
                                    onClick={handleOnClean}
                                />
                            </motion.div>
                            {upload.isPending && (
                                <motion.div
                                    transition={{ duration: 0.5 }}
                                    initial={{ x: 20 }}
                                    animate={{
                                        x: 0,
                                    }}
                                >
                                    <Loader2 className="tw-absolute tw-z-[100] tw-bottom-9 tw-right-2 tw-animate-spin tw-font-bold tw-h-6 tw-w-6 tw-bg-gray-900 tw-text-white tw-bg-opacity-50 tw-rounded-full tw-p-1 hover:tw-rounded-full tw-transition-all tw-duration-300" />
                                </motion.div>
                            )}
                            {!upload.data?.status && !upload.isPending && (
                                <motion.div
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    style={{
                                        boxShadow:
                                            "rgb(255, 0, 0) 0px -29px 15px",
                                    }}
                                    className="tw-w-full tw-h-full tw-z-50 tw-absolute tw-top-[100%]"
                                ></motion.div>
                            )}
                            {upload.data?.success && !upload.isPending && (
                                <motion.div
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    style={{
                                        boxShadow:
                                            "rgb(1 185 0) 0px -29px 15px",
                                    }}
                                    className="tw-w-full tw-h-full tw-z-50 tw-absolute tw-top-[100%]"
                                ></motion.div>
                            )}
                            <div
                                style={{
                                    boxShadow:
                                        "rgb(28 28 28 / 79%) 0px -22px 27px",
                                }}
                                className="tw-w-full tw-h-full tw-z-50 tw-absolute tw-top-[100%]"
                            ></div>
                            <motion.div
                                className="tw-w-full tw-h-full group"
                                initial="initialState"
                                animate="animateState"
                                exit="exitState"
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                variants={{
                                    initialState: {
                                        y: "-50%",
                                    },
                                    animateState: {
                                        y: "0%",
                                        shadow: "0px -255px 54px -222px rgba(255,0,0,0.73) inset !important",
                                    },
                                    exitState: {
                                        opacity: 0.1,
                                        x: "+10%",
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                            >
                                <Image
                                    style={{
                                        boxShadow:
                                            "0px -255px 54px -222px rgba(255,0,0,0.73) inset !important",
                                    }}
                                    src={file}
                                    className="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
                                    alt="upload file preview"
                                    width={50}
                                    height={50}
                                />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="tw-relative tw-w-full tw-h-full aragment tw-justify-center">
                            <span>select file</span>
                            {props.error && (
                                <>
                                    <div
                                        style={{
                                            boxShadow:
                                                "rgb(28 28 28 / 79%) 0px -22px 27px",
                                        }}
                                        className="tw-w-full tw-h-full tw-z-50 tw-absolute tw-top-[100%]"
                                    ></div>
                                    <motion.div
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        style={{
                                            boxShadow:
                                                "rgb(255, 0, 0) 0px -29px 15px",
                                        }}
                                        className="tw-w-full tw-h-full tw-z-50 tw-absolute tw-top-[100%]"
                                    ></motion.div>
                                </>
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

ProfileInput.displayName = "Input";

export { ProfileInput };
