import Image from "@ui/image";

const BannerWidget = () => {
    return (
        <div className="banner-widget tw-mt-[45px]">
            <Image
                width="340"
                height="318"
                src="/images/others/course-sidebar-adv.jpg"
                alt=""
                loading="lazy"
            />
        </div>
    );
};

export default BannerWidget;
