import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface Props {
  onClick?: () => void;
  icon: IconDefinition
}

function PokeButton({ onClick, icon }: Props) {
  return (
    <button className="" onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </button>
  );
}

export default PokeButton;
