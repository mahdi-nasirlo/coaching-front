import { dependencyConstance } from "@/constants/dependency";
import { useQuery } from "@tanstack/react-query";
import customFetcher from "service/custome-fetcher";
import { z } from "zod";

const {menu} = dependencyConstance

const useGetMenuDependency = () => useQuery({
    queryKey: [menu.url],
    queryFn: () => customFetcher({ url: menu.url, method: menu.method }),
    select: (data: z.infer<typeof menu.response>) => data.data
})

export {useGetMenuDependency}