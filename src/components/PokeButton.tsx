import React from "react";
interface Props {
  onClick?: () => void;
  title: string;
}

function PokeButton({ onClick, title }: Props) {
  return (
    <button className="bg-blue-500 rounded p-2" onClick={onClick}>
      {title}
    </button>
  );
}

export default PokeButton;
