export type DataModel = {
    id: number;
    name: string;
    age: number;
    email: string;
}

export type ColumnDefinition = {
    key: keyof DataModel;
    label: string;
    type: 'text' | 'number' | 'email';
    editable?: boolean;
}

export type EditingField = {
    columnKey: keyof DataModel;
    rowId: number;
    value: string | number;
    type: 'text' | 'number' | 'email';
}