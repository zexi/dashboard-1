export default {
  scope: state => state.auth.scope,
  auth: state => state.auth,
  userInfo: state => state.auth.info,
  permission: state => state.auth.permission,
  scopeResource: state => state.auth.scopeResource,
  windows: state => state.window.windows,
  common: state => state.common,
  dialogs: state => state.dialog.dialogs,
  isAdminMode: (state, getters) => getters['auth/isAdminMode'],
  isDomainMode: (state, getters) => getters['auth/isDomainMode'],
  l3PermissionEnable: (state, getters) => getters['auth/l3PermissionEnable'],
  currentScopeResource: (state, getters) => getters['auth/currentScopeResource'],
}