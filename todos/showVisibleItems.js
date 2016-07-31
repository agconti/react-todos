'use strict'

export function showVisibleItems(items, visibleState) {
  switch (visibleState) {
    case "SHOW_ALL":
      return items
    case "SHOW_COMPLETE":
      return items.filter(item => item.complete)
    case "SHOW_ACTIVE":
      return items.filter(item => !item.complete)
    default:
      return items
  }
}
