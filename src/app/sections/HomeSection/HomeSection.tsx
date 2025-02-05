'use client';
import { useState } from "react";
import { useLoadAssets } from "@/app/hooks/useLoadAssets";
import ExpansionPanel from "../../components/ExpansionPanel/ExpansionPanel";
import { useLoadBoards } from "../../hooks/useLoadBoards";
import MasonryGrid from "@/app/components/Grid/MasonryGrid";
import Boards from "@/app/components/Boards/Boards";

const HomeSection = () => {
  const [currCursor, setCursor] = useState(null as null | string);
  const boards = useLoadBoards();
  const assets = useLoadAssets({ cursor: currCursor });

  function loadMore(cursor) {
    setCursor(cursor);
  }

  return <section className="flex">
    <div className="flex flex-col relative mt-6 min-h-full">
      <ExpansionPanel expansionPanelHeaderContent={
        <div>
          Boards ({boards.length})
        </div>
      }>
        <Boards boards={boards} />
      </ExpansionPanel>
      <ExpansionPanel
        expansionPanelHeaderContent={
          <div>
            Assets ({assets?.data?.total})
          </div>
        }
      >
        <MasonryGrid assets={assets} loadMore={loadMore} />
      </ExpansionPanel>
    </div>
  </section>;
}

export default HomeSection;