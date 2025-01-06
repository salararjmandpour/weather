import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Unhandled error:", err);
  res
    .status(500)
    .json({ message: "An unexpected error occurred", error: err.message });
}
