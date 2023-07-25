import { RowID, RowElement} from "./interface";

export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowid: RowID): void;
export declare function updateRow(rowid: RowID, row: RowElement): RowID;
