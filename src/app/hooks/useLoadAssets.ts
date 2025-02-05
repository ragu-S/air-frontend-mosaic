'use client';
import { useEffect, useState } from "react";
import { ClipsListResponse, fetchAssets } from "@/app/api/clips";

export const useLoadAssets = ({ cursor }: { cursor: string | null }) => {
  const [assets, setAssets] = useState(null as ClipsListResponse | null);

  useEffect(() => {
    fetchAssets({ cursor }).then((response: ClipsListResponse) => {
      setAssets(prevAssets => {
        return cursor ? ({ ...prevAssets, ...response, data: { clips: prevAssets.data.clips.concat(response.data.clips), total: response.data.total } }) : response
      });
    });
  }, [cursor]);

  return assets;
};