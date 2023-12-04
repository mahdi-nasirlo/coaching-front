import { useQuery } from "@tanstack/react-query";
import simpleFetcher from "../../service/simpleFetcher";

export const useRequestPost = () => {
    return useQuery({ queryKey: ["/blog/posts"], queryFn: simpleFetcher });
};
