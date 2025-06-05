import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import { isEnabled } from './settings'

let isAutoHidden = false

function toggleAuxiliaryBar() {
  if (!isEnabled() || !window.visibleTextEditors?.length)
    return

  if (window.visibleTextEditors?.length > 1) {
    commands.executeCommand('workbench.action.closeAuxiliaryBar')
    isAutoHidden = true
  }
  else if (isAutoHidden) {
    commands.executeCommand('workbench.action.focusAuxiliaryBar').then(
      () => commands.executeCommand('workbench.action.focusActiveEditorGroup'),
    )
    isAutoHidden = false
  }
}

export function registerEvents(context: ExtensionContext): void {
  window.onDidChangeActiveTextEditor(toggleAuxiliaryBar, null, context.subscriptions)

  toggleAuxiliaryBar()
}
