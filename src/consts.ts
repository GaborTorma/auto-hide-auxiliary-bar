// This should be kept in sync with the command name specified in the
// `package.json` file: `contributes.commands[0].command`.
export const COMMAND_NAME = 'autoHideAuxiliaryBar.toggleEnableFeature'

export const SETTINGS_NAME = 'autoHideAuxiliaryBar.enableFeature'

// This should be kept in sync with the default specified in the `package.json`
// file: `contributes.configuration.properties.autoHideAuxiliaryBar.statusBarText.default`.
export const DEFAULT_STATUS_BAR_TEXT_CONFIGURATION = {
  enabledText: 'Auto Hide $(list-selection): $(check)',
  disabledText: 'Auto Hide $(list-selection): $(x)',
}
