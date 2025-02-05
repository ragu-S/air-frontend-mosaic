'use client';
import { useEffect, useState } from "react";
import { Clip, ClipsListResponse, fetchAssets } from "@/app/api/clips";

export const useLoadAssets = ({ cursor }: { cursor: string | null }) => {
  const [assets, setAssets] = useState({} as ClipsListResponse);

  useEffect(() => {
    fetchAssets({ cursor }).then((_clips: ClipsListResponse) => {
      setAssets(_clips);
    });
  }, [cursor]);

  return assets;
};