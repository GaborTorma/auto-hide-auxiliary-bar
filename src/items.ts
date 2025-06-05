import { StatusBarAlignment, window, workspace } from 'vscode'
import { COMMAND_NAME, DEFAULT_STATUS_BAR_TEXT_CONFIGURATION } from './consts'
import { isEnabled } from './settings'

function createToggleAuxiliaryBarStatusBarItem() {
  const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 1)
  statusBarItem.command = 'workbench.action.toggleAuxiliaryBar'
  statusBarItem.tooltip = 'Toggle Auxiliary Bar'
  statusBarItem.text = `$(list-selection)`
  statusBarItem.show()
}

function getToggleEnableFeatureStatusBarText() {
  const { enabledText, disabledText } = DEFAULT_STATUS_BAR_TEXT_CONFIGURATION

  return isEnabled() ? enabledText : disabledText
}

function createToggleEnableFeatureStatusBarItem() {
  const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 2)
  statusBarItem.command = COMMAND_NAME
  statusBarItem.tooltip = 'Toggle Auto Hide Auxiliary Bar'
  statusBarItem.text = getToggleEnableFeatureStatusBarText()
  statusBarItem.show()

  workspace.onDidChangeConfiguration(() => {
    statusBarItem.text = getToggleEnableFeatureStatusBarText()
  })
}

export function createStatusBarItems() {
  createToggleAuxiliaryBarStatusBarItem()
  createToggleEnableFeatureStatusBarItem()
}
