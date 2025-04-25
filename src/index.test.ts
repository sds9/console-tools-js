/**
 * Unit tests for the main index file exports
 * Verifies that all exports from format.ts and table.ts are correctly re-exported from index.ts
 */
import { describe, it, expect } from 'vitest'
import * as indexExports from '.'
import * as formatExports from './format'
import * as tableExports from './table'

describe('index exports', () => {
  /**
   * Test to verify that all exports from format.ts are re-exported from index.ts
   * Ensures complete export coverage between modules
   */
  it('should export all items from format.ts', () => {
    // Get all keys from both modules
    const indexKeys = Object.keys(indexExports)
    const formatKeys = Object.keys(formatExports)
    
    // Verify that all format keys exist in index exports
    formatKeys.forEach(key => {
      expect(indexExports).toHaveProperty(key)
    })
    
    // Verify that format items are properly included in index exports
    expect(formatKeys.every(key => indexKeys.includes(key))).toBe(true)
  })

  /**
   * Test to verify that all exports from table.ts are re-exported from index.ts
   * Ensures complete export coverage between modules
   */
  it('should export all items from table.ts', () => {
    // Get all keys from the table module
    const tableKeys = Object.keys(tableExports)
    
    // Verify that all table keys exist in index exports
    tableKeys.forEach(key => {
      expect(indexExports).toHaveProperty(key)
    })
    
    // Verify that table items are properly included in index exports
    expect(tableKeys.every(key => Object.keys(indexExports).includes(key))).toBe(true)
  })
  
  /**
   * Test to verify FontColor enum is properly exported
   * Checks both the enum existence and its values
   */
  it('should export FontColor enum', () => {
    expect(indexExports).toHaveProperty('FontColor')
    expect(indexExports.FontColor).toEqual(formatExports.FontColor)
    expect(indexExports.FontColor.BLACK).toBe('30')
    expect(indexExports.FontColor.RED).toBe('31')
  })
  
  /**
   * Test to verify BackgroundColor enum is properly exported
   * Checks both the enum existence and its values
   */
  it('should export BackgroundColor enum', () => {
    expect(indexExports).toHaveProperty('BackgroundColor')
    expect(indexExports.BackgroundColor).toEqual(formatExports.BackgroundColor)
    expect(indexExports.BackgroundColor.BLACK).toBe('40')
    expect(indexExports.BackgroundColor.RED).toBe('41')
  })
  
  /**
   * Test to verify formatText function is properly exported
   * Checks both function existence and functionality when imported from index
   */
  it('should export formatText function', () => {
    expect(indexExports).toHaveProperty('formatText')
    expect(typeof indexExports.formatText).toBe('function')
    
    // Test that the function works correctly when imported from index
    const text = 'Test Text'
    const style = { bold: true }
    const result = indexExports.formatText(text, style)
    expect(result).toBe('\x1b[1mTest Text\x1b[0m')
  })
  
  /**
   * Test to verify createTable function is properly exported from table.ts
   * Checks both function existence and basic functionality
   */
  it('should export createTable function', () => {
    expect(indexExports).toHaveProperty('createTable')
    expect(typeof indexExports.createTable).toBe('function')
    expect(indexExports.createTable).toEqual(tableExports.createTable)
    
    // Simple test to verify the function works as expected
    const data = [{ id: 1, name: 'Test' }]
    const columns = [
      { header: 'ID', key: 'id' },
      { header: 'Name', key: 'name' }
    ]
    const table = indexExports.createTable(data, columns)
    expect(table).toContain('ID')
    expect(table).toContain('Name')
    expect(table).toContain('Test')
  })
  
  /**
   * Test to verify TableColumn interface is properly exported
   * Ensures the interface can be used correctly with TypeScript
   */
  it('should be able to use TableColumn type from index exports', () => {
    // Create a compliant TableColumn object
    const column: indexExports.TableColumn = {
      header: 'Test',
      key: 'test',
      color: indexExports.FontColor.RED,
      width: 10
    }
    
    // If this compiles, it means the TableColumn type is exported correctly
    expect(column).toHaveProperty('header', 'Test')
    expect(column).toHaveProperty('key', 'test')
    expect(column).toHaveProperty('color', '31')
  })
  
  /**
   * Test to verify TableOptions interface is properly exported
   * Ensures the interface can be used correctly with TypeScript
   */
  it('should be able to use TableOptions type from index exports', () => {
    // Create a compliant TableOptions object
    const options: indexExports.TableOptions = {
      headerColor: indexExports.FontColor.GREEN,
      padding: 3,
      border: true
    }
    
    // If this compiles, it means the TableOptions type is exported correctly
    expect(options).toHaveProperty('headerColor', '32')
    expect(options).toHaveProperty('padding', 3)
    expect(options).toHaveProperty('border', true)
  })
  
  /**
   * Test to verify FontStyle type is properly exported
   * Ensures the type definition works correctly with TypeScript when imported from index
   */
  it('should be able to use FontStyle type from index exports', () => {
    // Create a compliant FontStyle object
    const style: indexExports.FontStyle = {
      bold: true,
      italic: false,
      underline: true,
      fontColor: indexExports.FontColor.RED,
      backgroundColor: indexExports.BackgroundColor.BLACK
    }
    
    // If this compiles, it means the FontStyle type is exported correctly
    expect(style).toHaveProperty('bold', true)
    expect(style).toHaveProperty('fontColor', '31')
  })
})