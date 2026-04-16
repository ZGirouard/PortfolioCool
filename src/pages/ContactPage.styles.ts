import styled from "@emotion/styled"

const BOTTOM_SAFE = '7rem'

export const Shell = styled.main`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #0a0a0c;
  color: #f5f5f5;
  padding: 1.75rem 1.25rem ${BOTTOM_SAFE};
`

export const Inner = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  margin: 0 0 0.65rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #fff;
`

export const Tagline = styled.p`
  margin: 0 0 2rem;
  max-width: 28rem;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const Label = styled.label`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.88);
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.65rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  outline: none;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.28);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.08);
  }
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 8rem;
  padding: 0.65rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.28);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.08);
  }
`

export const SubmitRow = styled.div`
  margin-top: 0.25rem;
`

export const Submit = styled.button`
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  padding: 0.55rem 1.35rem;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    opacity 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.35);
  }
`

export const FormFeedback = styled.p<{ $ok: boolean }>`
  margin: 0.75rem 0 0;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  line-height: 1.45;
  color: ${(p) =>
    p.$ok ? 'rgba(140, 220, 175, 0.95)' : 'rgba(255, 165, 165, 0.95)'};
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  margin: 2.25rem 0 1.5rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.18) 20%,
    rgba(255, 255, 255, 0.18) 80%,
    transparent
  );
`

export const ConnectHeading = styled.h2`
  margin: 0 0 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.92);
`

export const ConnectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

export const ConnectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
    border-radius: 2px;
  }
`

export const IconBox = styled.span`
  display: inline-flex;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);

  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

export const LinkedInIcon = styled.svg`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  fill: currentColor;
  opacity: 0.95;
`