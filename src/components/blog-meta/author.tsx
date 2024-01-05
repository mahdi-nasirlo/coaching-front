import clsx from "clsx";
import {IInstructor} from "@utils/types";
import Image from "@ui/image";
import Anchor from "@ui/anchor";

type TProps = {
    author: IInstructor;
    className?: string;
};

const AuthorMeta = ({author, className}: TProps) => {
    return (
        <div className={clsx("post-author tw-mb-[5px]", className)}>
            <Anchor path={`/profile/${author.name}`} className="tw-flex tw-items-center">
                {author?.image?.src && (
                    <Image
                        alt={author?.image?.alt || "Avatar"}
                        src={author?.image.src}
                        className="tw-w-8 tw-h-8 tw-rounded-full tw-mr-2"
                        height="96"
                        width="96"
                    />
                )}
                {author?.name}
            </Anchor>
        </div>
    );
};

export default AuthorMeta;
