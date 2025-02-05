'use client';
import { useLoadAssets } from "@/app/hooks/useLoadAssets";
import ExpansionPanel from "../../components/ExpansionPanel/ExpansionPanel";
import { useLoadBoards } from "../../hooks/useLoadBoards";
import MasonryGrid from "@/app/components/Grid/MasonryGrid";

const HomeSection = () => {
  // state
  const boards = useLoadBoards();
  const assets = useLoadAssets({ cursor: null });
  return <section className="flex">
    <div className="flex flex-col relative mt-6 min-h-full">
      <ExpansionPanel expansionPanelHeaderContent={
        <div>
          Boards ({boards.length})
        </div>
      }>
        Contents
      </ExpansionPanel>
      <ExpansionPanel
        expansionPanelHeaderContent={
          <div>
            Assets ({assets?.data?.clips?.length})
          </div>
        }
      >
        {/* <div className="flex-grow"></div> */}
        <MasonryGrid assets={assets} />
      </ExpansionPanel>
    </div>
  </section>;
}

export default HomeSection;