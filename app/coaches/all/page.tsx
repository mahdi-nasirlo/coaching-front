import Link from "next/link";
import {ApiResponse} from "@/Types/app/response";
import CoachList from "@/app/coaches/all/components/coach-list";
import {getAllCoaches} from "@/services/coach/getAllCoaches";


export default async function Page() {

    // const {data: coaches, isLoading, error} = useSWR("/coaches", getAllCoaches)

    const coaches: ApiResponse = await getAllCoaches()

    return (
        <>

            <div className="row justify-content-between align-items-center max-mb-20" data-aos="fade-up">
                <div className="col-sm-auto col-12 max-mb-10">
                    <p className="result-count">ما پیدا کردیم<span>22</span> دوره های موجود برای شما</p>
                </div>
                <div className="col-sm-auto col-12 max-mb-10">
                    {/*<select className="sort-by">*/}
                    {/*    <option >پشفرض</option>*/}
                    {/*    <option value="popularity">محبوبیت</option>*/}
                    {/*    <option value="date">اخیر</option>*/}
                    {/*    <option value="price">قیمت از پایین به بالا</option>*/}
                    {/*    <option value="price-desc">قیمت از بالا به پایین</option>*/}
                    {/*</select>*/}
                </div>
            </div>

            <div className="row row-cols-lg-2 row-cols-1 max-mb-n30">

                <CoachList items={coaches.data}/>

            </div>

            <div className="row max-mt-50">
                <div className="col text-center">
                    <Link href="JavaScript:Void(0);" className="btn btn-outline-primary load-more-btn">مطالعه
                        بیشتر <i className="fal fa-redo ml-3"></i></Link>
                </div>
            </div>

        </>
    )
}


