import { workspace } from 'vscode'

import { SETTINGS_NAME } from './consts'

export function isEnabled() {
  // Check if the setting is enabled
  return workspace.getConfiguration().get <boolean> (SETTINGS_NAME)
}
