// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: " ",
    sticky: "left",
    columns: [
      {
        Header: "Market Cap_ank",
        accessor: "market_cap_rank",
      },
      {
        Header: "Coin",
        accessor: "id",
      },
    ],
  },
  {
    Header: "Prices",
    columns: [
      {
        Header: "Price In $",
        accessor: "current_price",
      },
      {
        Header: "High 24h",
        accessor: "high_24h",
      },
      {
        Header: "Low 24h",
        accessor: "low_24h",
      },
    ],
  },
  {
    Header: "Change Rate",
    columns: [
      {
        Header: "1 h %",
        accessor: "price_change_percentage_1h_in_currency",
      },
      {
        Header: "24 h % ",
        accessor: "price_change_percentage_24h",
      },
      {
        Header: " 7 d %",
        accessor: "price_change_percentage_7d_in_currency",
      },
      {
        Header: "30 d %",
        accessor: "price_change_percentage_30d_in_currency",
      },
      {
        Header: "200 d %",
        accessor: "price_change_percentage_200d_in_currency",
      },
    ],
  },
  {
    Header: "Volume/Market Cap",
    columns: [
      {
        Header: "Volume ( 24h )",
        accessor: "total_volume",
      },
      {
        Header: "Market Cap",
        accessor: "market_cap",
      },
      {
        Header: "Market Cap ( 24h )",
        accessor: "market_cap_change_24h",
      },
      {
        Header: "Market Rate ( 24h )",
        accessor: "market_cap_change_percentage_24h",
      },
    ],
  },
  {
    Header: "Supply",
    columns: [
      {
        Header: "Max Supply",
        accessor: "max_supply",
      },
      {
        Header: "Total Supply",
        accessor: "total_supply",
      },
      {
        Header: "Circulating Supply",
        accessor: "circulating_supply",
      },
    ],
  },
];
