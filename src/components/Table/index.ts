import { TableHeaderContainer } from "./Header/TableHeaderContainer";
import { TableHeaderItem } from "./Header/TableHeaderItem";
import { TableContainer } from "./Container";
import { TableFooter } from "./Footer";
import { TableRow } from "./Row";

export const Table = {
  Container: TableContainer,
  Header: {
    Container: TableHeaderContainer,
    Item: TableHeaderItem,
  },
  Row: TableRow,
  Footer: TableFooter,
};
