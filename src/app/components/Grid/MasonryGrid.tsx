import { useEffect, useRef } from 'react';
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

const MasonryGrid = ({ assets, loadMore }) => {
  const cursor = assets?.pagination?.cursor;
  const gridRef = useRef(null);
  const prevRatio = useRef(0);
  const resizedAssetsCount = useRef(0);
  const cursorRef = useRef(cursor);
  const resizedAssets = getResizedAssets(assets);
  cursorRef.current = cursor;
  resizedAssetsCount.current = resizedAssets.length;

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if(resizedAssetsCount.current > 0) {
        if(entry.intersectionRatio > prevRatio.current) {
          loadMore(cursorRef.current);
        }
        prevRatio.current = entry.intersectionRatio;
      }
    });

  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(gridRef.current);
  }, []);

  return <div className="grid-masonry" >
    {
      resizedAssets.map(({ width, height, img }, index) => {
        return <div className="grid-masonry-cells" style={{ width: `${width}px` }} key={index}>
            <img className="grid-masonry-img" src={img} width={width} height={height} />
          </div>
      })
    }
    <div className="intersection-point" ref={gridRef} />
  </div>
};

export default MasonryGrid;