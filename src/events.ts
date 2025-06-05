import * as vscode from 'vscode'
import { isEnabled } from './settings'

let isAutoHidden = false

function toggleAuxiliaryBar() {
  if (!isEnabled() || !vscode.window.visibleTextEditors?.length)
    return

  if (vscode.window.visibleTextEditors?.length > 1) {
    vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar')
    isAutoHidden = true
  }
  else if (isAutoHidden) {
    vscode.commands.executeCommand('workbench.action.focusAuxiliaryBar').then(
      () => vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup'),
    )
    isAutoHidden = false
  }
}

export function registerEvents(context: vscode.ExtensionContext): void {
  vscode.window.onDidChangeActiveTextEditor(toggleAuxiliaryBar, null, context.subscriptions)

  toggleAuxiliaryBar()
}
