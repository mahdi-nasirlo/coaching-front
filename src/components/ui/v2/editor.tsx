import * as React from "react"
import {ControllerRenderProps} from "react-hook-form";
import {Editor as TinyEditor} from "@tinymce/tinymce-react";

interface PropsType {
    height?: number
}

const Editor = ((props: ControllerRenderProps<any, string> & PropsType) => {

    return <>
        <TinyEditor
            {...props}
            tinymceScriptSrc={'/tinymce/tinymce.min.js'}
            initialValue={props.value}
            onChange={(t: any) => props.onChange(t.level.content)}
            init={{
                height: props?.height || 500,
                menubar: false,
                language: "fa",
                ui_mode: "split",
                directionality: "rtl",
                plugins: [
                    'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                    'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                    'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'wordcount'
                ],
                toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist checklist outdent indent | removeformat | a11ycheck code table',
                content_style: `body { font-family: "IRANSansfanum" !important; font-size:14px !important; direction: rtl !important;text-align: right }`,
            }}
        />
    </>
})

export {Editor}