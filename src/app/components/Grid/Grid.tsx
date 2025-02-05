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

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 200,
  fixedHeight: true,
});

// Our masonry layout will use 3 columns with a 10px gutter between

const Grid = ({ assets }) => {
  const gridWidth = window.innerWidth;
  const gridHeight = window.innerHeight;
  const cellCount = assets?.data?.clips?.length;
  const cellPositioner = useMemo(() => {
    return createMasonryCellPositioner({
      cellMeasurerCache: cache,
      columnCount: 4,
      spacer: 10,
    });
  }, []);

  function cellRenderer({ index, key, parent, style }) {
    const { clips } = assets.data;
    const asset = clips[index];

    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          <img
            src={asset.assets.image}
            style={{
              height: asset.height,
              width: asset.width,
            }}
          />
          <h4>{asset.displayName}</h4>
        </div>
      </CellMeasurer>
    );
  }

  return <div>
    {
      // <InfiniteLoader 
      //   isRowLoaded={}
      // />
    }
    {/* <AutoSizer>
        {
          ({ width, height }) => {
            console.log(width, height);
            return cellCount > 0 && <Masonry
              cellCount={cellCount}
              cellMeasurerCache={cache}
              cellPositioner={cellPositioner}
              cellRenderer={cellRenderer}
              height={height}
              width={width}
            />
          }
        }
      </AutoSizer> */}
    {
      
    // cellCount > 0 && <Masonry
    //   cellCount={cellCount}
    //   cellMeasurerCache={cache}
    //   cellPositioner={cellPositioner}
    //   cellRenderer={cellRenderer}
    //   height={800}
    //   width={gridWidth}
    // />
    }
  </div>
};

export default Grid;