import { Board } from "@/app/api/boards";
import "./Boards.css";

function getBoardElement(board) {
  const { thumbnails: [src], title } = board;
  return <div>
    <img className="board-img" src={`${src}?auto=compress&fit=crop`} />
    <p className="title text-left text-20 line-clamp-3 break-words pb-0.5 font-semibold">{title}</p>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 from-20% to-black/20" />
  </div>
}

const Boards = ({ boards }: { boards: Board[] }) => {
  return <ul className="boards">
    {
      boards?.map((board, i) => <li className="board-element" key={i}>
        {getBoardElement(board)}
      </li>)
    }
  </ul>
};

export default Boards;