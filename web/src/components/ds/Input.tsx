'use client';

import { useId, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

type FieldChrome = {
  label?: string;
  hint?: string;
  error?: string;
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStretch: 'var(--display-stretch)',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  fontSize: 10,
  color: 'var(--color-obsidian-ink)',
};

function hintStyle(error?: string): React.CSSProperties {
  return {
    fontFamily: 'var(--font-serif)',
    fontSize: 13,
    color: error ? 'var(--color-iris-voltage)' : 'var(--color-ash)',
    paddingLeft: 24,
  };
}

function fieldStyle(focus: boolean, error?: string, disabled?: boolean): React.CSSProperties {
  const borderColor = error || focus ? 'var(--color-iris-voltage)' : 'var(--color-obsidian-ink)';
  return {
    fontFamily: 'var(--font-serif)',
    fontSize: 16,
    lineHeight: 1.5,
    color: 'var(--color-obsidian-ink)',
    background: disabled ? 'var(--color-mint-wash)' : 'var(--color-paper-white)',
    border: `1.5px solid ${borderColor}`,
    outline: 'none',
    boxShadow: focus && !error ? '0 0 0 3px rgba(81,111,234,0.15)' : 'none',
    transition: 'border-color .2s ease, box-shadow .2s ease',
    opacity: disabled ? 0.6 : 1,
    width: '100%',
  };
}

type InputProps = FieldChrome & InputHTMLAttributes<HTMLInputElement>;

/** Design Asylum — Input. Pill text field (54px radius); ported from
 * _ds/.../components/forms/Input.jsx. */
export function Input({ label, hint, error, id, disabled, style, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  const generatedId = useId();
  const fieldId = id || generatedId;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={labelStyle}>
          {label}
        </label>
      )}
      <input
        id={fieldId}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...fieldStyle(focus, error, disabled),
          borderRadius: 'var(--radius-inputs)',
          padding: '16px 24px',
        }}
        {...rest}
      />
      {(hint || error) && <span style={hintStyle(error)}>{error || hint}</span>}
    </div>
  );
}

type TextareaProps = FieldChrome & TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Textarea variant of Input — same chrome, body-block radius, multi-line. */
export function Textarea({ label, hint, error, id, disabled, style, rows = 5, ...rest }: TextareaProps) {
  const [focus, setFocus] = useState(false);
  const generatedId = useId();
  const fieldId = id || generatedId;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={labelStyle}>
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        disabled={disabled}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...fieldStyle(focus, error, disabled),
          borderRadius: 'var(--radius-cards)',
          padding: '18px 24px',
          resize: 'vertical',
        }}
        {...rest}
      />
      {(hint || error) && <span style={hintStyle(error)}>{error || hint}</span>}
    </div>
  );
}
