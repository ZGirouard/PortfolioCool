import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { BasicText } from "./BasicText.styles"

export const PageStage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
`

export const BottomBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem 1.5rem 1.25rem;
  background: #0a0a0c;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  box-sizing: border-box;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`

export const NameText = styled(BasicText)`
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`

export const NameLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.85);
    outline-offset: 6px;
    border-radius: 4px;
  }
`