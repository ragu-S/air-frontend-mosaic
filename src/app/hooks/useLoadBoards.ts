'use client';
import { useEffect, useState } from "react";
import { Board, BoardsListResponse, fetchBoards } from "@/app/api/boards";

export const useLoadBoards = () => {
  const [boards, setBoards] = useState([] as Board[]);

  useEffect(() => {
    console.log("render load boards");
    fetchBoards().then((_boards: BoardsListResponse) => {
      setBoards(_boards?.data);
    });
  }, []);

  return boards;
};
