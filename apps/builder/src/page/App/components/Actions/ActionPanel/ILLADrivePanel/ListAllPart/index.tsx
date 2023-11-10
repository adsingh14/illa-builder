import { FC } from "react"
import { useTranslation } from "react-i18next"
import { CODE_LANG } from "@/components/CodeEditor/CodeMirror/extensions/interface"
import { ILLADriveActionPartProps } from "@/page/App/components/Actions/ActionPanel/ILLADrivePanel/interface"
import { SingleTypeComponent } from "@/page/App/components/Actions/ActionPanel/SingleTypeComponent"
import { InputEditor } from "@/page/App/components/Actions/InputEditor"
import {
  EXPIRATION_TYPE,
  FILTER_TYPE,
  FileUrlExpiredTypeOption,
  FilterTypeOption,
  ListAllContent,
} from "@/redux/currentApp/action/illaDriveAction"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export const ListAllPart: FC<ILLADriveActionPartProps> = (props) => {
  const { t } = useTranslation()
  const commandArgs = props.commandArgs as ListAllContent
  const { handleOptionsValueChange } = props
  const filterType = commandArgs.filterType
  const expirationType = commandArgs.expirationType

  return (
    <>
      <SingleTypeComponent
        title={t("editor.action.panel.label.drive.filter_type")}
        tips={t("editor.action.panel.label.tips.drive.filter_type")}
        value={commandArgs.filterType}
        componentType="select"
        type="button"
        forceEqualWidth={true}
        onChange={(value) => handleOptionsValueChange("filterType", value)}
        options={FilterTypeOption}
      />
      {filterType === FILTER_TYPE.BY_NAME && (
        <InputEditor
          title={t("editor.action.panel.label.drive.file_name")}
          tips={t("editor.action.panel.label.tips.drive.file_name")}
          placeholder={t(
            "editor.action.panel.label.placeholder.drive.file_name",
          )}
          lineNumbers
          mode={CODE_LANG.JAVASCRIPT}
          value={commandArgs.search}
          onChange={(value) => handleOptionsValueChange("search", value)}
          expectedType={VALIDATION_TYPES.STRING}
        />
      )}
      {filterType === FILTER_TYPE.BY_ID && (
        <InputEditor
          title={t("editor.action.panel.label.drive.file_id")}
          tips={t("editor.action.panel.label.tips.drive.file_id")}
          placeholder={t("editor.action.panel.label.placeholder.drive.file_id")}
          lineNumbers
          mode={CODE_LANG.JAVASCRIPT}
          value={commandArgs.fileID}
          onChange={(value) => handleOptionsValueChange("fileID", value)}
          expectedType={VALIDATION_TYPES.STRING}
        />
      )}
      <InputEditor
        title={t("editor.action.panel.label.drive.folder")}
        tips={t("editor.action.panel.label.tips.drive.folder")}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.path}
        onChange={(value) => handleOptionsValueChange("path", value)}
        expectedType={VALIDATION_TYPES.STRING}
      />

      <SingleTypeComponent
        title={t("editor.inspect.setter_label.drive_builder.expired_time")}
        tips={t("editor.inspect.setter_tips.drive_builder.expired_time")}
        value={commandArgs.expirationType}
        componentType="radio-group"
        type="button"
        forceEqualWidth={true}
        onChange={(value) => handleOptionsValueChange("expirationType", value)}
        radioOptions={FileUrlExpiredTypeOption}
      />
      {expirationType === EXPIRATION_TYPE.CUSTOM && (
        <InputEditor
          title={t("editor.inspect.setter_label.drive_builder.time")}
          tips={t("editor.inspect.setter_tips.drive_builder.time")}
          mode={CODE_LANG.JAVASCRIPT}
          value={commandArgs.expiry}
          onChange={(value) => handleOptionsValueChange("expiry", value)}
          expectedType={VALIDATION_TYPES.NUMBER}
        />
      )}
      <SingleTypeComponent
        title={t("editor.inspect.setter_label.drive_builder.turn_on_hotlink")}
        tips={t("editor.inspect.setter_tips.drive_builder.turn_on_hotlink")}
        value={commandArgs.hotlinkProtection}
        componentType="switch"
        onChange={(value) =>
          handleOptionsValueChange("hotlinkProtection", value)
        }
      />
      <InputEditor
        title={t("editor.action.panel.label.drive.limit")}
        tips={t("editor.action.panel.label.tips.drive.limit")}
        placeholder={t("editor.action.panel.label.placeholder.drive.limit")}
        lineNumbers
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.limit}
        onChange={(value) => handleOptionsValueChange("limit", value)}
        expectedType={VALIDATION_TYPES.NUMBER}
      />
      <InputEditor
        title={t("editor.action.panel.label.drive.page")}
        tips={t("editor.action.panel.label.tips.drive.page")}
        placeholder={t("editor.action.panel.label.placeholder.drive.page")}
        lineNumbers
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.page}
        onChange={(value) => handleOptionsValueChange("page", value)}
        expectedType={VALIDATION_TYPES.NUMBER}
      />
    </>
  )
}

ListAllPart.displayName = "ListAllPart"
