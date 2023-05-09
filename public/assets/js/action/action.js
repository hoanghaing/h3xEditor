import * as viewAction from './viewAction.js'
import * as keyAction from './keyAction.js'
const ACTION = {
  ADD: 'add',
  EDIT: 'edit',
  FILE: 'file',
  HELP: 'help',
  VIEW: 'view',
  KEY: 'key',
  IMPORT: 'import',
  EXPORT: 'export',
}
const execute = ({ action, type }) => {
  switch (action) {
    case ACTION.ADD:
      break;
    case ACTION.EDIT:
      break;
    case ACTION.FILE:
      break;
    case ACTION.HELP:
      break;
    case ACTION.VIEW:
      viewAction.handle(type)
      break;
    case ACTION.KEY:
      keyAction.handle(type)
      break; 
  }
}
export {
  execute,
}