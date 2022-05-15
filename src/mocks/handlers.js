import { rest } from "msw";
import { mockRobots } from "../redux/mocks/mockRobots";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRobots))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}/1`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRobots[0]))
  ),
];
