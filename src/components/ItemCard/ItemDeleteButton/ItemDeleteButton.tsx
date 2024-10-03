import { FaTrashAlt } from "react-icons/fa";

interface ItemDeleteButtonProps {
  id: string;
}

const ItemDeleteButton: React.FC<ItemDeleteButtonProps> = ({ id }) => {
  return (
    <form action="">
      <button
        type="submit"
        className="hover:text-gray-700 text-lg cursor-pointer"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default ItemDeleteButton;
