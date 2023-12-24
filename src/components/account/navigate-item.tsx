import React from 'react';
import {CardTitle} from "@ui/v2/card";
import Anchor from "@ui/anchor";
import {ChevronRight} from "lucide-react";
import {Separator} from "@ui/v2/separator";
import Breadcrumb, {BreadcrumbType} from "@components/breadcrumb";

interface PropType {
    title: string | React.ReactNode,
    description?: string | React.ReactNode | BreadcrumbType,
    action?: React.ReactNode,
    backUrl?: string
}

function NavigateItem({title, description, action, backUrl}: PropType) {

    return (
        <div>
            <div className="tw-flex tw-justify-between tw-items-center">
                <CardTitle>
                    {title}
                    <div className="tw-text-secondary-light">
                        <div>
                            {description && typeof description === 'object' && 'currentPage' in description
                                ? (
                                    <Breadcrumb
                                        style={{padding: 0}}
                                        className="tw-text-sm" {...(description as BreadcrumbType)} />
                                )
                                : (
                                    description
                                )
                            }
                        </div>
                    </div>
                </CardTitle>
                <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
                    {action}
                    {backUrl && <Anchor path={backUrl}
                                        className="tw-flex tw-items-center tw-text-secondary-light">
                    <span>
                        Back
                    </span>
                        <ChevronRight/>
                    </Anchor>}
                </div>
            </div>
            <Separator className="tw-mb-6"/>
        </div>
    );
}

export default NavigateItem;