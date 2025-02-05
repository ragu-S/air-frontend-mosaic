import { useLoadAssets } from '@/app/hooks/useLoadAssets';
import { useLayoutEffect, useMemo } from 'react';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  InfiniteLoader
} from 'react-virtualized';
import "./MasonryGrid.css";

const fixedHeight = 370;
const fixedWidth = 170;

function getImageSize(clip) {
  const { width, height, assets: { image } } = clip;
  const resizedWidth = fixedHeight * width/height || fixedWidth;
  return {
    img: `${image}?auto=compress&fit=crop&w=${resizedWidth}&h=${fixedHeight}`,
    width: resizedWidth,
    height: fixedHeight,
    orgWidth: width,
    orgHeight: height
  }
}

const getResizedAssets = (assets) => {
  const clips = assets?.data?.clips || [];
  return clips.map(getImageSize);
}

const MasonryGrid = ({ assets }) => {
  const resizedAssets = getResizedAssets(assets);
  
  return <div className="grid-masonry">
    {
      resizedAssets.map(({ width, orgWidth, height, orgHeight, img }, index) => {
        return <div className="grid-masonry-cells" style={{ width: `${width}px` }} key={index}>
            <img src={img} width={width} height={height} />
            <p className="abs">{width}w {height}h</p>
            <p className="abs-1">{orgWidth}w {orgHeight}h</p>
          </div>
      })
    }
  </div>
};

export default MasonryGrid;