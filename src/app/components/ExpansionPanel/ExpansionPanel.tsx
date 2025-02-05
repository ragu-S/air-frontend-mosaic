'use client';
import { ReactNode, useState } from "react";

type ExpansionPanelProps = {
  expansionPanelHeaderContent: ReactNode,
  children: ReactNode
};

const ExpansionPanel = ({ expansionPanelHeaderContent, children }: ExpansionPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  function handleOnClickExpand(ev: React.MouseEvent) {
    ev.preventDefault();
    setIsExpanded(!isExpanded);
  }
  return <div>
    <button onClick={handleOnClickExpand}>{expansionPanelHeaderContent}</button>
    {isExpanded && <ul>
      {children}
    </ul>
    }
  </div>
};

export default ExpansionPanel;
