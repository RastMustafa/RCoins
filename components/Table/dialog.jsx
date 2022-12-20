import { Fragment, useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useContext } from "react";
import { TableColsContext } from "../../utlites/tableContext";
import { Checkbox } from "@material-tailwind/react";

{
  /* <label>
<input type="checkbox" {...allColumns[1].getToggleHiddenProps()} />
{allColumns[1].Header}
</label> */
}

export default function Dialoge({ allColumns }) {
  const price = allColumns.slice(2, 5);
  const PriceChange = allColumns.slice(5, 10);
  const volume = allColumns.slice(11, 14);
  const supply = allColumns.slice(14, 17);

  const { btnSelect, setBtnSelect } = useContext(TableColsContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  function handleClick(e) {
    setBtnSelect({
      ...btnSelect,
      [e.target.name]: btnSelect[e.target.name] ? !btnSelect[e.target.name] : true,
    });
    allColumns.map((cloumn) => {
      // console.log(cloumn.getToggleHiddenProps().onChange());
      // cloumn.getToggleHiddenProps().onChange=false
      return (
        <div key={cloumn.id}>
          <label>
            <input type="checkbox" {...cloumn.getToggleHiddenProps()} />
            {cloumn.Header}
          </label>
        </div>
      );
    });
  }
  return (
    <Fragment>
      <Button
        className="bg-white hover:shadow-gray-300 shadow-md text-black px-3 py-3  shadow-gray-300  tracking-widest font-semibold   font-display "
        onClick={handleOpen}
        variant="text"
      >
        Categories
      </Button>
      <div className="">
        <Dialog
          variant="standard"
          open={open}
          handler={handleOpen}
          className=" sm:min-w-[27rem] md:min-w-[40rem]  sm:max-w-[20rem] min-w-full  "
        >
          <DialogHeader>
            <span className="font-display">Add, delete and sort metrics just how you need it</span>
          </DialogHeader>
          <DialogBody divider>
            <div className="flex text-lg font-display font-bold  w-full flex-col gap-2">
              <div className="flex flex-row justify-between border-green-400 border-b   py-2  w-full">
                <h1 className="mr-12">Price </h1>
                <div className="flex flex-wrap text-sm justify-end 	  text-md gap-1">
                  {/* <label>
                    <input type="checkbox" {...allColumns[1].getToggleHiddenProps()} />
                    {allColumns[1].Header}
                  </label> */}
                  {price.map((item) => {
                    return (
                      <div key={item.accessor} className="flex justify-center   items-center">
                        <Checkbox
                          {...item.getToggleHiddenProps()}
                          id={item.accessor}
                          color="green"
                          name={item.accessor}
                          onClick={(e) => handleClick(e)}
                          className={`  transition-all duration-500 ease-in-out border-green-400 shadow-md rounded-md`}
                        />
                        <span className="inline-block text-[16px] ">{item.Header}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* ************************ */}
              <div className="border-b py-2 border-green-400 w-full">
                <div className="flex flex-row justify-between   w-full">
                  <h1>Price Change </h1>
                  <div className="flex flex-wrap text-sm 	justify-end  text-md gap-1">
                    {PriceChange.map((item) => {
                      return (
                        <div key={item.accessor} className="flex justify-center  items-center">
                          <Checkbox
                            {...item.getToggleHiddenProps()}
                            id={item.accessor}
                            color="green"
                            name={item.accessor}
                            onClick={(e) => handleClick(e)}
                            className={`  transition-all duration-500 ease-in-out     border-green-400 shadow-md rounded-md`}
                          />
                          <span className="inline-block text-[16px] ">{item.Header}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="border-b  border-green-400 w-full">
                <div className="flex flex-row justify-between   w-full">
                  <h1>Volume</h1>
                  <div className="flex flex-wrap text-sm 	justify-end  text-md gap-1">
                    {volume.map((item) => {
                      return (
                        <div key={item.accessor} className="flex justify-center   items-center">
                          <Checkbox
                            {...item.getToggleHiddenProps()}
                            id={item.accessor}
                            color="green"
                            name={item.accessor}
                            onClick={(e) => handleClick(e)}
                            className={`  transition-all duration-500 ease-in-out     border-green-400 shadow-md rounded-md`}
                          />
                          <span className="inline-block text-[16px] ">{item.Header}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* <div className="border-b  border-green-400 w-full">
                <div className="flex flex-row justify-between   w-full">
                  <h1>Charts</h1>
                  <div className="flex flex-wrap text-sm 	justify-end  text-md gap-1">
                    {charts.map((item) => {
                      return (
                        <div key={item.accessor} className="flex justify-center   items-center">
                          <Checkbox
                            {...cloumn.getToggleHiddenProps()}
                            id={item.accessor}
                            color="green"
                            name={item.accessor}
                            onClick={(e) => handleClick(e)}
                            className={`  transition-all duration-500 ease-in-out     border-green-400 shadow-md rounded-md`}
                          />
                          <span className="inline-block text-[16px] ">{item.Header}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div> */}
              <div className=" w-full">
                <div className="flex flex-row justify-between py-2  w-full">
                  <h1>Supply</h1>
                  <div className="flex flex-wrap text-sm 	justify-end  text-md gap-1 ">
                    {supply.map((item) => {
                      return (
                        <div key={item.accessor} className="flex justify-center   items-center">
                          <Checkbox
                            {...item.getToggleHiddenProps()}
                            id={item.accessor}
                            color="green"
                            name={item.accessor}
                            onClick={(e) => handleClick(e)}
                            className={`  transition-all duration-500 ease-in-out     border-green-400 shadow-md rounded-md`}
                          />
                          <span className="inline-block text-[16px] ">{item.Header}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="blue" onClick={handleOpen} className="mr-1">
              <span className="text-black">Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={handleOpen}>
              <span className="text-black">Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </Fragment>
  );
}
