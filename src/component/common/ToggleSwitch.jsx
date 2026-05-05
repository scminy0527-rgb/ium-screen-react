import React from "react";
import styled from "styled-components";

const Track = styled.div`
  width: 30px;
  height: 17px;
  border-radius: 100px;
  background: ${({ $checked, $activeColor }) =>
    $checked ? $activeColor : "#d1d5db"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
`;

const Thumb = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? "15px" : "2px")};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
`;

const ToggleSwitch = ({
  checked = false,
  onChange,
  activeColor = "#4359fc",
}) => (
  <Track $checked={checked} $activeColor={activeColor} onClick={onChange}>
    <Thumb $checked={checked} />
  </Track>
);

export default ToggleSwitch;
