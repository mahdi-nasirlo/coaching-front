import Link from "next/link";
import clsx from "clsx";
import Image from "@ui/image";

type TProps = {
    variant?: "dark" | "light";
    className?: string;
};

const Logo = ({ variant, className }: TProps) => {
    return (
        <Link href="/" className={clsx("tw-inline-block", className)}>
            {variant === "dark" && (
                <Image
                    src="/images/logo/dark-logo.png"
                    alt="Logo"
                    width={158}
                    height={26}
                />
            )}
            {variant === "light" && (
                <Image
                    src="/images/logo/light-logo.png"
                    alt="Logo"
                    width={158}
                    height={26}
                />
            )}
        </Link>
    );
};

export default Logo;
