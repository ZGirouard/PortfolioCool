import styled from '@emotion/styled'
import { type FormEvent, useId, useState } from 'react'
import { contactInfo, formspreeEndpoint } from '../data/contactInfo'

const BOTTOM_SAFE = '5.5rem'

const Shell = styled.main`
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

const Inner = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 0.65rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #fff;
`

const Tagline = styled.p`
  margin: 0 0 2rem;
  max-width: 28rem;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

const Label = styled.label`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.88);
`

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const SubmitRow = styled.div`
  margin-top: 0.25rem;
`

const Submit = styled.button`
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

const FormFeedback = styled.p<{ $ok: boolean }>`
  margin: 0.75rem 0 0;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  line-height: 1.45;
  color: ${(p) =>
    p.$ok ? 'rgba(140, 220, 175, 0.95)' : 'rgba(255, 165, 165, 0.95)'};
`

const Divider = styled.hr`
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

const ConnectHeading = styled.h2`
  margin: 0 0 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.92);
`

const ConnectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

const ConnectLink = styled.a`
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

const IconBox = styled.span`
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

const LinkedInIcon = styled.svg`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  fill: currentColor;
  opacity: 0.95;
`

type FormspreeJson = {
  error?: string
  errors?: Record<string, string | string[]>
}

function formatFormspreeError(data: FormspreeJson): string {
  if (data.error) return data.error
  if (data.errors) {
    const parts = Object.entries(data.errors).flatMap(([key, val]) => {
      const msg = Array.isArray(val) ? val.join(', ') : val
      return msg ? [`${key}: ${msg}`] : []
    })
    if (parts.length) return parts.join(' ')
  }
  return 'Something went wrong. Please try again.'
}

export function ContactPage() {
  const baseId = useId()
  const nameId = `${baseId}-name`
  const emailId = `${baseId}-email`
  const messageId = `${baseId}-message`

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(
    null,
  )

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    setSubmitting(true)
    setFeedback(null)

    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      let data: FormspreeJson = {}
      try {
        data = (await res.json()) as FormspreeJson
      } catch {
        /* non-JSON error body */
      }

      if (res.ok) {
        setName('')
        setEmail('')
        setMessage('')
        setFeedback({
          ok: true,
          text: 'Thanks — your message was sent. I’ll get back to you soon.',
        })
      } else {
        setFeedback({
          ok: false,
          text: formatFormspreeError(data),
        })
      }
    } catch {
      setFeedback({
        ok: false,
        text: 'Network error. Check your connection and try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Shell aria-label="Contact">
      <Inner>
        <Title>Contact</Title>
        <Tagline>
          Say hello! Whether it's about a role, a project, or coffee, I'll get back to you as soon as I can.
        </Tagline>

        <Form onSubmit={onSubmit}>
          <Field>
            <Label htmlFor={nameId}>Name</Label>
            <Input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label htmlFor={emailId}>Email</Label>
            <Input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label htmlFor={messageId}>Message</Label>
            <TextArea
              id={messageId}
              name="message"
              rows={5}
              placeholder="What would you like to talk about?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Field>
          <SubmitRow>
            <Submit type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send'}
            </Submit>
          </SubmitRow>
          {feedback ? (
            <FormFeedback
              $ok={feedback.ok}
              role={feedback.ok ? 'status' : 'alert'}
            >
              {feedback.text}
            </FormFeedback>
          ) : null}
        </Form>

        <Divider />

        <ConnectHeading>Connect</ConnectHeading>
        <ConnectList>
          <li>
            <ConnectLink href={contactInfo.phoneHref}>
              <IconBox aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </IconBox>
              {contactInfo.phoneDisplay}
            </ConnectLink>
          </li>
          <li>
            <ConnectLink href={contactInfo.emailHref}>
              <IconBox aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </IconBox>
              {contactInfo.emailDisplay}
            </ConnectLink>
          </li>
          <li>
            <ConnectLink
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </LinkedInIcon>
              LinkedIn
            </ConnectLink>
          </li>
        </ConnectList>
      </Inner>
    </Shell>
  )
}
