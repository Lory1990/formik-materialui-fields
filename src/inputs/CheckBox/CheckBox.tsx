import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import classnames from "classnames"
import IElementClassesProps from "interfaces/IElementClassesProps"
import * as React from "react"
import InputFieldWrapper from "ui/InputFieldWrapper/InputFieldWrapper"
import IFormProps from "../../interfaces/IFormProps"
import ITooltipProps from "../../interfaces/ITooltipProps"
import style from "./CheckBox.module.scss"

export interface ICheckBoxClasses {
    wrapper?: string
    checkBox?: string
}

export interface ICheckBoxProps extends IFormProps, ITooltipProps, IElementClassesProps<ICheckBoxClasses>, CheckboxProps {}

export function CheckboxComponent({
    onChange,
    id,
    disabled,
    label,
    name,
    value,
    className,
    errorMessage,
    warningMessage,
    readOnly,
    success,
    showWarningMessage,
    showErrorMessage,
    loading,
    elementClasses
}: ICheckBoxProps) {
    const style = {} as any
    return (
        <InputFieldWrapper
            className={className}
            componentClassName={"check-box"}
            styleClassName={style.checkBox}
            warningMessage={warningMessage}
            showWarningMessage={showWarningMessage}
            errorMessage={errorMessage}
            showErrorMessage={showErrorMessage}
            loading={loading}
            readOnly={readOnly}
            success={success}
            disabled={disabled}
        >
            <FormControlLabel
                className={classnames(style.checkbox, className, elementClasses?.wrapper)}
                control={
                    <>
                        <Checkbox className={classnames("checkbox", elementClasses?.checkBox, style.checkBox)} checked={Boolean(value)} onChange={onChange} id={id} name={name} disabled={disabled} />
                    </>
                }
                disabled={disabled}
                label={<>{label}</>}
            />
        </InputFieldWrapper>
    )
}

export default CheckboxComponent
