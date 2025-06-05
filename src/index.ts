import { defineExtension } from 'reactive-vscode'
import { registerCommands } from './commands'
import { registerEvents } from './events'
import { createStatusBarItems } from './items'

export const { activate, deactivate } = defineExtension((context) => {
  registerCommands()

  createStatusBarItems()

  registerEvents(context)
})
