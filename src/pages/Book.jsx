// import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
// import Chart from "../components/Chart";
import { NavLink, useLoaderData } from "react-router-dom";

const Book = () => {
  // const books = useLoaderData();
  // console.log(books);
  // const { book_name, total_pages } = books;

  // const [chart, setChart] = useState([]);
  // useEffect(() => {
  //   fetch("books.json")
  //     .then((res) => res.json())
  //     .then((data) => setChart(data));
  // }, []);
  // console.log(chart);
  // const data = { book_name };
  // console.log(data);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data = [
    {
      id: 1,
      name: "Kill a Mockingbird",
      total_pages: 281,
    },
    {
      id: 2,
      name: "1984",
      total_pages: 328,
    },
    {
      id: 3,
      name: "Great Gatsby",
      total_pages: 180,
    },
    {
      id: 4,
      name: "Pride Prejudice",
      total_pages: 279,
    },
    {
      id: 5,
      name: "The Catcher Rye",
      total_pages: 224,
    },
    {
      id: 6,
      name: "The Sorcerer's Stone",
      total_pages: 320,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-10  flex justify-center items-center">
      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="total_pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
          {/* {chart.map((char) => (
            <Chart key={char.book_id} char={char}></Chart>
          ))} */}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Book;
