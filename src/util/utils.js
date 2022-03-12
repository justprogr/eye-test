export function colorDiff(level = 1) {
  const COLOR_DIF_MAP = [105, 75, 60, 45, 30, 20, 18, 16, 15, 15, 15, 14, 14, 14, 13, 13, 13, 12, 12, 12, 11, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1]
	if (level <= 58) {
		return COLOR_DIF_MAP[level - 1]
	}
	return 1
}

export const randomColor = (colordiff = 0) => {
	const r = Math.floor(Math.random() * (255 - colordiff));
	const g = Math.floor(Math.random() * (255 - colordiff));
	const b = Math.floor(Math.random() * (255 - colordiff));
  return { r, g, b }
}

export function applyColorDiff({ r, g, b }, diff = 0) {
  return {
    r: r + diff,
    g: g + diff,
    b: b + diff
  }
}

export function rgbToCss({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`
}

export function levelGrid(level) {
	if (level < 2) return 2
	if (level < 4) return 3
	if (level < 8) return 4
	if (level < 13) return 5
	if (level < 22) return 6
	if (level < 32) return 7
	if (level < 36) return 8
	if (level < 40) return 9
	if (level < 44) return 10
	if (level < 48) return 11
	return 12
}

export function restoreBestResult() {
  const value = localStorage.getItem('best-result')
  return value ? parseInt(value) : 0
}

export function saveBestResult(result) {
  const prev = restoreBestResult()
  if (result > prev) {
    localStorage.setItem('best-result', result)
  }
}
