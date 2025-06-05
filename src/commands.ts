import { commands, ConfigurationTarget, workspace } from 'vscode'
import { COMMAND_NAME, SETTINGS_NAME } from './consts'
import { isEnabled } from './settings'

function registerToggleEnableFeatureCommand() {
  commands.registerCommand(COMMAND_NAME, async () => {
    const config = workspace.getConfiguration()
    await config.update(SETTINGS_NAME, !isEnabled(), ConfigurationTarget.Global)
  })
}

export function registerCommands() {
  registerToggleEnableFeatureCommand()
}
