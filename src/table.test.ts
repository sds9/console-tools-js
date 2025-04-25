import { describe, it, expect } from 'vitest';
import { createTable, TableColumn } from './table';
import { FontColor } from './format';

describe('table', () => {
  const testData = [
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'inactive' },
    { id: 3, name: 'Charlie', status: 'pending' },
  ];

  const testColumns: TableColumn[] = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Status', key: 'status', color: FontColor.GREEN },
  ];

  it('should create a basic table with default options', () => {
    const table = createTable(testData, testColumns);
    console.log(table); // Log the table for visual inspection
    // Basic checks for content
    expect(table).toContain('ID');
    expect(table).toContain('Name');
    expect(table).toContain('Status');
    expect(table).toContain('Alice');
    expect(table).toContain('Bob');
    
    // Test for formatted text (formatting codes will be in the output)
    expect(table).toContain('\x1b[');
    
    // Should not include borders by default
    expect(table).not.toContain('┌');
    expect(table).not.toContain('│');
  });

  it('should respect custom padding', () => {
    const narrowTable = createTable(testData, testColumns, { padding: 1 });
    const wideTable = createTable(testData, testColumns, { padding: 4 });
    
    // Wide table should be longer than narrow table
    expect(wideTable.length).toBeGreaterThan(narrowTable.length);
    
    // Check for padding character counts in sample lines
    const narrowLine = narrowTable.split('\n')[1]; // Get first data row
    const wideLine = wideTable.split('\n')[1];     // Get first data row
    
    // Check spaces between entries (this is a simplistic test)
    expect(narrowLine.split('  ').length).toBeLessThan(wideLine.split('  ').length);
  });

  it('should display borders when specified', () => {
    const table = createTable(testData, testColumns, { border: true });
    
    // Should include border characters
    expect(table).toContain('┌');
    expect(table).toContain('│');
    expect(table).toContain('└');
    expect(table).toContain('┬');
    expect(table).toContain('┼');
    expect(table).toContain('┴');
  });

  it('should use custom header color', () => {
    const table = createTable(testData, testColumns, { headerColor: FontColor.MAGENTA });
    
    // The formatted text will contain ANSI codes
    expect(table).toContain('\x1b[');
    // The table should contain our header text
    expect(table).toContain('ID');
    expect(table).toContain('Name');
    expect(table).toContain('Status');
  });

  it('should handle empty data gracefully', () => {
    const table = createTable([], testColumns);
    
    // Should still include headers
    expect(table).toContain('ID');
    expect(table).toContain('Name');
    expect(table).toContain('Status');
    
    // Should not crash or throw errors
    expect(() => createTable([], testColumns)).not.toThrow();
  });

  it('should handle missing data properties gracefully', () => {
    const incompleteData = [
      { id: 1 },
      { name: 'Bob' },
      { status: 'pending' }
    ];
    
    const table = createTable(incompleteData, testColumns);
    
    // Should include what data is available
    expect(table).toContain('1');
    expect(table).toContain('Bob');
    expect(table).toContain('pending');
    
    // Should not crash or throw errors
    expect(() => createTable(incompleteData, testColumns)).not.toThrow();
  });

  it('should respect explicit column widths', () => {
    const columnsWithWidth: TableColumn[] = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 15 },
      { header: 'Status', key: 'status', color: FontColor.GREEN },
    ];
    
    const table = createTable(testData, columnsWithWidth);
    
    // Calculate expected line lengths based on explicit widths
    // This test is a bit brittle but helps ensure width constraints work
    const lines = table.split('\n');
    
    // Headers line includes color codes which affect length
    const headerLineLength = lines[0].length;
    expect(headerLineLength).toBeGreaterThan(10 + 15 + 6); // Min width based on column specs + padding
  });
});