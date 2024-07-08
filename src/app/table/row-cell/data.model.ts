export type RowCell = {
    columnKey: string;
    rowId: number;
    value: string | number;
    type: 'text' | 'number' | 'email';
}