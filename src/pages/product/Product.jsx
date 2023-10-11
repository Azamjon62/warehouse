import React from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const Product = () => {


  const TABLE_HEAD = ["Img", "Name", "Amount", "Purchase price", "Selling price", "Status", "Expired date", ""];
 
  const TABLE_ROWS = [
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "1",
      purchase_price: "100$",
      selling_price: "110$",
      status: "true",
      expired_date: "06/2026",
    },
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "1",
      purchase_price: "100$",
      selling_price: "110$",
      status: "true",
      expired_date: "06/2026",
    },
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "1",
      purchase_price: "100$",
      selling_price: "110$",
      status: "true",
      expired_date: "06/2026",
    },
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "1",
      purchase_price: "100$",
      selling_price: "110$",
      status: "true",
      expired_date: "06/2026",
    },
    {
      img: "/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "1",
      purchase_price: "100$",
      selling_price: "110$",
      status: "true",
      expired_date: "06/2026",
    },
  ];

  return (
    <div className="py-5 pr-5" >

      <div className="w-[100%] rounded-[8px] text-white bg-[#060b268f]">
          <nav aria-label="breadcrumb" class="w-max">
            <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                <a class="opacity-60" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                <a class="opacity-60" href="#">
                  <span>Product</span>
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                <a
                  class="font-medium text-blue-gray-900 transition-colors hover:text-pink-500"
                  href="#"
                >
                  Products
                </a>
              </li>
            </ol>
          </nav>
      </div>

      <Card className="h-full w-full py-5 mt-5 bg-[#060b268f] rounded-[20px] text-white">
        <CardBody className="overflow-scroll py-0">
          <table className="w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    img,
                    name,
                    amount,
                    purchase_price,
                    selling_price,
                    status,
                    expired_date,
                  },
                  index,
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
  
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={img}
                            size="md"
                            className=" object-contain p-1"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={purchase_price}
                            color={
                              purchase_price === "paid"
                                ? "green"
                                : purchase_price === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>

                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {selling_price}
                            </Typography>                        

                      </td>

                      <td className={classes} >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {status.split("-").join(" ")} 
                            </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {expired_date}
                        </Typography>
                      </td>
                      <td className={classes}>
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter> */}
      </Card>
      
      <div className="py-5 pr-5">
        {/* <table className="table-auto text-white bg-[#060b268f] rounded-[20px] w-[100%]">
          <thead className="" >
            <tr className="" >
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Product;
