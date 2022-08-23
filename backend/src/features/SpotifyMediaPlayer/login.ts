import { NextApiRequest, NextApiResponse } from "next";

const test = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    firstCourse: "Web Development",
    secondCourse: "AI",
    thirdCourse: "Mobile Development",
  });
};

export default test;
