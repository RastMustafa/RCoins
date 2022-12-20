import React from "react";
import { Input } from "@material-tailwind/react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
      <Input
        onChange={(e) => setFilter(e.target.value)}
        value={filter || ""}
        type="text"
        variant="static"
        label="Search"
        placeholder="Search for coin"
        color="teal"
      />

      {/* <input onChange={e=>setFilter(e.target.value)} value={filter|| ''} type="text" /> */}
    </span>
  );
}

export default GlobalFilter;
