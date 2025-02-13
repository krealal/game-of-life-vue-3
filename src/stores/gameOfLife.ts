import { defineStore } from 'pinia'

export const useGameOfLifeStore = defineStore('gameOfLife', () => {
  let grid: boolean[][] = []
  const rows = 50
  const columns = 50

  function getCell(column: number, row: number) {
    return grid[column][row]
  }

  function toggleCell(column: number, row: number) {
    //not using yet
    grid[column][row] = !grid[column][row]
  }

  function countNeightbors(column: number, row: number): number {
    let count = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue //refactor
        const neighborColumn = column + i
        const neighborRow = row + j
        if (
          neighborColumn >= 0 &&
          neighborColumn < grid.length &&
          neighborRow >= 0 &&
          neighborRow < grid[neighborColumn].length
        ) {
          count += grid[neighborColumn][neighborRow] ? 1 : 0
        }
      }
    }
    return count
  }

  function nextGeneration() {
    const newGrid: boolean[][] = []

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const neighbors = countNeightbors(i, j)

        if (grid[i][j]) {
          newGrid[i][j] = neighbors === 2 || neighbors === 3
        } else {
          newGrid[i][j] = neighbors === 3
        }
      }
    }
    grid = newGrid
  }
})
