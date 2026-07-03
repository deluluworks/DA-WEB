/* @ds-bundle: {"format":3,"namespace":"DesignAsylumDesignSystem_594314","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ArrowLink","sourcePath":"components/buttons/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"CaseStudy","sourcePath":"components/editorial/CaseStudy.jsx"},{"name":"ContactRow","sourcePath":"components/footer/ContactRow.jsx"},{"name":"FooterNav","sourcePath":"components/footer/FooterNav.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"AnimatedHero","sourcePath":"components/hero/AnimatedHero.jsx"},{"name":"PillNav","sourcePath":"components/hero/PillNav.jsx"},{"name":"JumboPillCTA","sourcePath":"components/sections/JumboPillCTA.jsx"},{"name":"NewsletterBand","sourcePath":"components/sections/NewsletterBand.jsx"},{"name":"SectionHeader","sourcePath":"components/sections/SectionHeader.jsx"},{"name":"StatementBlock","sourcePath":"components/sections/StatementBlock.jsx"},{"name":"FeatureCard","sourcePath":"components/work/FeatureCard.jsx"},{"name":"WorkCard","sourcePath":"components/work/WorkCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2ced85eba271","components/buttons/ArrowLink.jsx":"42875d9f9ce0","components/buttons/Button.jsx":"176ffabd5b09","components/content/Avatar.jsx":"8367813dcd8f","components/content/Card.jsx":"dc96cc38d25e","components/content/Tag.jsx":"338ed5db073b","components/editorial/CaseStudy.jsx":"ff94da50d35e","components/footer/ContactRow.jsx":"dcc7a7c39b62","components/footer/FooterNav.jsx":"ad7954882894","components/forms/Input.jsx":"c75cec762272","components/hero/AnimatedHero.jsx":"c7b7e3ca5e1a","components/hero/PillNav.jsx":"4de2c3e765bc","components/sections/JumboPillCTA.jsx":"369c843de2c8","components/sections/NewsletterBand.jsx":"cecd7e3e5897","components/sections/SectionHeader.jsx":"82e5f4c7da08","components/sections/StatementBlock.jsx":"4f5ed2cd77c4","components/work/FeatureCard.jsx":"ffee07eb6c98","components/work/WorkCard.jsx":"a8948092c5d4","ui_kits/website/App.jsx":"67cbd4a229a9","ui_kits/website/Contact.jsx":"91c313cfb780","ui_kits/website/Footer.jsx":"868246ff2f7a","ui_kits/website/Hero.jsx":"6c0e129f33b1","ui_kits/website/Nav.jsx":"68fe1e44cca5","ui_kits/website/Statement.jsx":"ca954d425fec","ui_kits/website/Work.jsx":"d1b35f6c80ba","ui_kits/website/kit-ui.jsx":"2c89a0aa1d0e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignAsylumDesignSystem_594314 = window.DesignAsylumDesignSystem_594314 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Logo
 * The wordmark IS the identity: expanded display sans, uppercase, tight
 * tracking. Stacked lockup by default; `layout="inline"` for nav/badges.
 */
function Logo({
  layout = 'stacked',
  color = 'var(--color-obsidian-ink)',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 13,
    md: 22,
    lg: 40
  };
  const fs = sizes[size] || sizes.md;
  const word = {
    fontFamily: 'var(--font-display)',
    fontStretch: 'var(--display-stretch)',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    fontSize: fs,
    lineHeight: 0.86,
    color
  };
  if (layout === 'inline') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...word,
        whiteSpace: 'nowrap',
        ...style
      }
    }, rest), "Design\xA0Asylum");
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: word
  }, "Design"), /*#__PURE__*/React.createElement("span", {
    style: word
  }, "Asylum"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — ArrowLink
 * Editorial inline link: uppercase display micro-label with a trailing arrow
 * that nudges forward on hover. Used for "read more" / nav affordances.
 */
function ArrowLink({
  children,
  href = '#',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: 'var(--color-obsidian-ink)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--color-obsidian-ink)',
      paddingBottom: '3px',
      cursor: 'pointer',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: hover ? 'translateX(4px)' : 'translateX(0)',
      transition: 'transform .2s ease'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Button
 * Fully-rounded pill action. Obsidian fill is primary; the lone chromatic
 * moment is the Iris Voltage outline on the secondary variant.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconRight,
  iconLeft,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 20px',
      font: '12px'
    },
    md: {
      padding: '15px 28px',
      font: '14px'
    },
    lg: {
      padding: '20px 38px',
      font: '16px'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-display)',
    fontStretch: 'var(--display-stretch)',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: 'var(--radius-buttons)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color .25s ease, color .25s ease, border-color .25s ease, transform .12s ease',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.4 : 1
  };
  const variants = {
    primary: {
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)',
      borderColor: 'var(--color-obsidian-ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'var(--color-iris-voltage)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'transparent'
    },
    inverse: {
      background: 'var(--color-paper-white)',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'var(--color-paper-white)'
    }
  };
  const hoverFor = {
    primary: {
      background: 'var(--color-deep-teal)',
      borderColor: 'var(--color-deep-teal)'
    },
    secondary: {
      background: 'var(--color-iris-voltage)',
      color: 'var(--color-paper-white)'
    },
    ghost: {
      background: 'var(--color-mint-wash)'
    },
    inverse: {
      background: 'var(--color-mint-wash)',
      borderColor: 'var(--color-mint-wash)'
    }
  };
  const onEnter = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, hoverFor[variant] || {});
  };
  const onLeave = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, variants[variant] || {});
    e.currentTarget.style.transform = 'none';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Avatar
 * Circular portrait with an Obsidian hairline. Falls back to initials on
 * Mint Wash when no image is supplied.
 */
function Avatar({
  src,
  alt = '',
  name,
  size = 48,
  style,
  ...rest
}) {
  const initials = (name || alt || '').split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '999px',
      overflow: 'hidden',
      background: 'var(--color-mint-wash)',
      border: '1px solid var(--color-obsidian-ink)',
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      fontSize: Math.round(size * 0.32),
      letterSpacing: '0.02em',
      color: 'var(--color-deep-teal)'
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Card
 * Big-rounded (40px) editorial content card. Optional media area on top, then
 * eyebrow, title and body. Hover lifts subtly. Compose with Tag / ArrowLink.
 */
function Card({
  eyebrow,
  title,
  children,
  media,
  surface = 'paper',
  interactive = false,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surfaces = {
    paper: {
      background: 'var(--color-paper-white)',
      color: 'var(--color-obsidian-ink)',
      border: '1px solid var(--color-fog)'
    },
    mint: {
      background: 'var(--color-mint-wash)',
      color: 'var(--color-obsidian-ink)',
      border: '1px solid transparent'
    },
    teal: {
      background: 'var(--color-deep-teal)',
      color: 'var(--color-paper-white)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)',
      border: '1px solid transparent'
    }
  };
  const sur = surfaces[surface] || surfaces.paper;
  const muted = surface === 'teal' || surface === 'ink' ? 'rgba(255,255,255,0.6)' : 'var(--color-ash)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      ...sur,
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: 'none',
      /* system rule: no shadows — depth via tone + motion only */
      transition: 'transform .3s ease, border-color .3s ease',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--color-mint-wash)'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-padding)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '10px',
      color: muted
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: 1.2,
      color: 'inherit'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'inherit',
      opacity: surface === 'paper' || surface === 'mint' ? 0.82 : 0.86
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Tag
 * Small outlined pill label in uppercase display type. Used for categories,
 * filters and metadata. Default is an Obsidian hairline; `tone` switches.
 */
function Tag({
  children,
  tone = 'outline',
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'var(--color-obsidian-ink)'
    },
    solid: {
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)',
      borderColor: 'var(--color-obsidian-ink)'
    },
    mint: {
      background: 'var(--color-mint-wash)',
      color: 'var(--color-deep-teal)',
      borderColor: 'transparent'
    },
    iris: {
      background: 'transparent',
      color: 'var(--color-iris-voltage)',
      borderColor: 'var(--color-iris-voltage)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '10px',
      lineHeight: 1,
      padding: '8px 14px',
      borderRadius: 'var(--radius-buttons)',
      border: '1.5px solid transparent',
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CaseStudy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — CaseStudy (split block)
 * The signature work layout: text-left / image-right at a 5:7 ratio, with the
 * project name set as a rotated vertical mark in white expanded display over a
 * solid colour or gradient panel. No shadows — depth comes from tone. Alternate
 * `flip` down a page for the editorial headline / air / image rhythm.
 */
function CaseStudy({
  index,
  name,
  description,
  tagline,
  location,
  cover = 'var(--color-deep-teal)',
  flip = false,
  href = '#',
  style,
  ...rest
}) {
  const Text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8px 0'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: 'var(--color-ash)',
      marginBottom: '20px'
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(28px,3.4vw,40px)',
      lineHeight: 1.05,
      color: 'var(--color-obsidian-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: '420px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: 1.43,
      color: 'var(--color-graphite)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      alignItems: 'baseline',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '14px',
      color: 'var(--color-obsidian-ink)'
    }
  }, tagline), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '14px',
      color: 'var(--color-graphite)'
    }
  }, location)));
  const Panel = /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      background: cover,
      aspectRatio: '4 / 3',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%) rotate(-90deg)',
      transformOrigin: 'center',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '20px',
      color: 'rgba(255,255,255,0.92)'
    }
  }, name));
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: flip ? '7fr 5fr' : '5fr 7fr',
      gap: '48px',
      alignItems: 'stretch',
      ...style
    }
  }, rest), flip ? /*#__PURE__*/React.createElement(React.Fragment, null, Panel, Text) : /*#__PURE__*/React.createElement(React.Fragment, null, Text, Panel));
}
Object.assign(__ds_scope, { CaseStudy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// components/footer/ContactRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — ContactRow
 * A labelled contact line: Fraunces label, value as a link, and a "Copy"
 * affordance far-right that copies the value to the clipboard (label flips to
 * "Copied" briefly). Used in stacks in the footer / contact block.
 */
function ContactRow({
  label,
  value,
  href,
  copyValue,
  onDark = false,
  style,
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const toCopy = copyValue || value;
  const copy = async e => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (_) {/* clipboard unavailable */}
  };
  const fg = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const sub = onDark ? 'rgba(255,255,255,0.55)' : 'var(--color-graphite)';
  const line = onDark ? 'rgba(255,255,255,0.16)' : 'var(--color-fog)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(90px, 0.5fr) 1fr auto',
      gap: '16px',
      alignItems: 'baseline',
      padding: '20px 0',
      borderBottom: `1px solid ${line}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '15px',
      color: sub
    }
  }, label), /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(18px,2.2vw,24px)',
      color: fg,
      textDecoration: 'none',
      overflowWrap: 'anywhere'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    className: "pill-hover",
    style: {
      justifySelf: 'end',
      cursor: 'pointer',
      border: `1px solid ${onDark ? 'rgba(255,255,255,0.3)' : 'var(--color-obsidian-ink)'}`,
      background: copied ? fg : 'transparent',
      color: copied ? onDark ? 'var(--color-obsidian-ink)' : 'var(--color-paper-white)' : fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '10px',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, copied ? 'Copied' : 'Copy'));
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/footer/FooterNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — FooterNav
 * A two-column Fraunces text-link nav: primary pages on the left, legal /
 * secondary links on the right. Stacks to a single column on mobile.
 */
function FooterNav({
  primary = [],
  secondary = [],
  onDark = true,
  style,
  ...rest
}) {
  const [mobile, setMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth <= 640);
  React.useEffect(() => {
    const on = () => setMobile(window.innerWidth <= 640);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const fg = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const sub = onDark ? 'rgba(255,255,255,0.55)' : 'var(--color-graphite)';
  const col = (items, muted) => /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: muted ? '15px' : 'clamp(18px,2vw,22px)',
      color: muted ? sub : fg,
      textDecoration: 'none'
    }
  }, it.label))));
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 1fr',
      gap: mobile ? '32px' : '40px',
      ...style
    }
  }, rest), col(primary, false), col(secondary, true));
}
Object.assign(__ds_scope, { FooterNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/FooterNav.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — Input
 * Pill text field (54px radius). Obsidian hairline border, Iris Voltage ring
 * on focus, uppercase display label sitting above.
 */
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--color-iris-voltage)' : focus ? 'var(--color-iris-voltage)' : 'var(--color-obsidian-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '10px',
      color: 'var(--color-obsidian-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--color-obsidian-ink)',
      background: disabled ? 'var(--color-mint-wash)' : 'var(--color-paper-white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-inputs)',
      padding: '16px 24px',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px rgba(81,111,234,0.15)' : 'none',
      transition: 'border-color .2s ease, box-shadow .2s ease',
      opacity: disabled ? 0.6 : 1
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      color: error ? 'var(--color-iris-voltage)' : 'var(--color-ash)',
      paddingLeft: '24px'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/hero/AnimatedHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — AnimatedHero
 * Full-viewport opening: a slowly-morphing organic mesh gradient behind a
 * giant edge-to-edge uppercase Blinker wordmark. Pass a <PillNav> via the
 * `nav` slot so it floats over the gradient. The headline is fluid (clamp)
 * and wraps to two lines on small screens. Gradient loop pauses under
 * prefers-reduced-motion (via the `gradient-loop` utility class).
 */
function AnimatedHero({
  wordmark = 'Design Asylum',
  nav,
  palette,
  minHeight = 'clamp(560px, 100svh, 1000px)',
  children,
  style,
  ...rest
}) {
  // Mesh = layered radial gradients over a moving linear base.
  const c = palette || ['#ffc240', '#ff8fbf', '#96ebeb', '#516fea', '#f6f5f1'];
  const mesh = [`radial-gradient(60% 70% at 18% 22%, ${c[0]} 0%, transparent 60%)`, `radial-gradient(55% 65% at 82% 18%, ${c[1]} 0%, transparent 58%)`, `radial-gradient(65% 75% at 75% 82%, ${c[2]} 0%, transparent 60%)`, `radial-gradient(55% 60% at 22% 85%, ${c[3]} 0%, transparent 58%)`, `linear-gradient(120deg, ${c[4]}, ${c[0]})`].join(', ');
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'relative',
      minHeight,
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gradient-loop",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '-20%',
      background: mesh,
      filter: 'saturate(1.05)'
    }
  }), nav, /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      margin: 0,
      padding: '0 var(--gutter)',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      lineHeight: 0.92,
      fontSize: 'var(--text-mega)',
      color: 'var(--color-paper-white)',
      mixBlendMode: 'soft-light',
      textWrap: 'balance'
    }
  }, wordmark), children);
}
Object.assign(__ds_scope, { AnimatedHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/AnimatedHero.jsx", error: String((e && e.message) || e) }); }

// components/hero/PillNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Breakpoint hook — mobile ≤640, tablet 641–1024, desktop ≥1025. */
function useBreakpoint() {
  const get = () => typeof window === 'undefined' ? 'desktop' : window.innerWidth <= 640 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop';
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bp;
}

/**
 * Design Asylum — PillNav
 * Floating capsule navigation that pins over content. Desktop: inline chip
 * groups (left + right), active pill filled dark, the rest translucent with a
 * backdrop blur. Tablet/mobile: collapses to wordmark + a circular "+" toggle
 * that opens a full-screen overlay of large Fraunces pill links, organically
 * offset, over a blurred backdrop.
 */
function PillNav({
  brand = 'Design Asylum',
  items = [],
  activeId,
  onSelect,
  onBrandClick,
  style,
  ...rest
}) {
  const bp = useBreakpoint();
  const [open, setOpen] = React.useState(false);
  const isCompact = bp !== 'desktop';
  const left = items.filter(i => i.group !== 'right');
  const right = items.filter(i => i.group === 'right');
  React.useEffect(() => {
    if (!isCompact) setOpen(false);
  }, [isCompact]);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const select = id => {
    onSelect && onSelect(id);
    setOpen(false);
  };
  const chip = it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: "pill-hover",
      onClick: () => select(it.id),
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        fontSize: '12px',
        cursor: 'pointer',
        padding: '11px 18px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        color: active ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
        background: active ? 'var(--color-obsidian-ink)' : 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }
    }, it.label);
  };
  const Brand = /*#__PURE__*/React.createElement("button", {
    onClick: onBrandClick,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      fontSize: '17px',
      lineHeight: 0.9,
      color: 'var(--color-obsidian-ink)',
      textAlign: 'left'
    }
  }, brand);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      padding: '18px var(--gutter)',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      pointerEvents: 'auto',
      width: '100%',
      maxWidth: 'var(--page-max-width)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, Brand, !isCompact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      padding: '5px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(234,247,243,0.6)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, left.map(chip)), right.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      padding: '5px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(234,247,243,0.6)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, right.map(chip))), isCompact && /*#__PURE__*/React.createElement("button", {
    "aria-label": open ? 'Close menu' : 'Open menu',
    className: "pill-hover",
    onClick: () => setOpen(o => !o),
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1,
      color: open ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
      background: open ? 'var(--color-obsidian-ink)' : 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      transition: 'transform var(--motion-base) var(--ease-out), background var(--motion-base)',
      transform: open ? 'rotate(45deg)' : 'none'
    }
  }, "+")), isCompact && open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 55,
      pointerEvents: 'auto',
      background: 'rgba(246,245,241,0.82)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px'
    }
  }, items.map((it, idx) => {
    const active = it.id === activeId;
    const nudge = idx % 2 === 0 ? -18 : 22;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => select(it.id),
      style: {
        transform: `translateX(${nudge}px)`,
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontStyle: 'italic',
        fontSize: 'clamp(30px, 9vw, 48px)',
        lineHeight: 1.1,
        cursor: 'pointer',
        padding: '6px 30px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        color: active ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
        background: active ? 'var(--color-obsidian-ink)' : 'transparent'
      }
    }, it.label);
  })));
}
Object.assign(__ds_scope, { PillNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/PillNav.jsx", error: String((e && e.message) || e) }); }

// components/sections/JumboPillCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — JumboPillCTA
 * A large, centred solid-dark capsule with a Fraunces (serif) label. The
 * single biggest call-to-action moment; gently scales/shifts on hover.
 */
function JumboPillCTA({
  label = "Let's talk",
  href = '#',
  onClick,
  tone = 'ink',
  style,
  ...rest
}) {
  const tones = {
    ink: {
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)'
    },
    iris: {
      background: 'var(--color-iris-voltage)',
      color: 'var(--color-paper-white)'
    },
    solar: {
      background: 'var(--color-solar-bloom)',
      color: 'var(--color-obsidian-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--section-pad-y) var(--gutter)',
      display: 'flex',
      justifyContent: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "pill-hover",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      padding: 'clamp(28px, 5vw, 56px) clamp(48px, 9vw, 120px)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 'clamp(28px, 5vw, 64px)',
      lineHeight: 1,
      letterSpacing: '-0.01em',
      ...(tones[tone] || tones.ink)
    }
  }, label));
}
Object.assign(__ds_scope, { JumboPillCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/JumboPillCTA.jsx", error: String((e && e.message) || e) }); }

// components/sections/NewsletterBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — NewsletterBand
 * Bold Blinker heading, then a single-line email field + capsule "Sign up"
 * submit (input flexes to fill, button stays fixed at every breakpoint),
 * with Fraunces fine-print below. UI only — wire `onSubmit` to your backend.
 */
function NewsletterBand({
  heading = 'Never miss a move.',
  placeholder = 'you@studio.com',
  cta = 'Sign up',
  finePrint = 'No spam. One considered email a month. Unsubscribe anytime.',
  surface = 'mint',
  onSubmit,
  style,
  ...rest
}) {
  const [email, setEmail] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const surfaces = {
    mint: {
      background: 'var(--color-mint-wash)',
      color: 'var(--color-obsidian-ink)'
    },
    paper: {
      background: 'var(--color-paper-off)',
      color: 'var(--color-obsidian-ink)'
    },
    ink: {
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)'
    }
  };
  const sur = surfaces[surface] || surfaces.mint;
  const onDark = surface === 'ink';
  const submit = e => {
    e.preventDefault();
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return;
    onSubmit && onSubmit(email);
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: 'var(--section-pad-y) var(--gutter)',
      ...sur,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1.0,
      fontSize: 'var(--text-section)',
      color: 'inherit'
    }
  }, heading), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lede)',
      color: 'inherit'
    }
  }, "You're in. Watch your inbox.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'stretch',
      maxWidth: '620px',
      background: onDark ? 'rgba(255,255,255,0.08)' : 'var(--color-paper-white)',
      border: `1.5px solid ${focus ? 'var(--color-iris-voltage)' : onDark ? 'rgba(255,255,255,0.25)' : 'var(--color-obsidian-ink)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: '7px 7px 7px 24px',
      transition: 'border-color var(--motion-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    placeholder: placeholder,
    required: true,
    onChange: e => setEmail(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "pill-hover",
    style: {
      flex: '0 0 auto',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '13px',
      padding: '13px 26px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)'
    }
  }, cta)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      opacity: 0.7,
      color: 'inherit'
    }
  }, finePrint)));
}
Object.assign(__ds_scope, { NewsletterBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/NewsletterBand.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — SectionHeader
 * Section intro: a small Blinker label on the left and a Fraunces tagline on
 * the right, sharing one baseline above a thin divider rule. Keeps its
 * two-end (label-left / tagline-right) split at every breakpoint — only the
 * type shrinks on mobile.
 */
function SectionHeader({
  label,
  tagline,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 var(--gutter)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '20px',
      paddingBottom: '18px',
      borderBottom: rule ? '1px solid var(--color-fog)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 'clamp(13px, 1.6vw, 16px)',
      color: 'var(--color-obsidian-ink)'
    }
  }, label), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(13px, 1.6vw, 18px)',
      lineHeight: 1.3,
      color: 'var(--color-graphite)',
      textAlign: 'right',
      maxWidth: '52%'
    }
  }, tagline))));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/sections/StatementBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Scroll reveal — ghost → full opacity + slide up. Honors reduced-motion. */
function useReveal(threshold = 0.2) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}
function revealStyle(shown, delay = 0) {
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? 'none' : 'translateY(28px)',
    transition: `opacity var(--motion-reveal) var(--ease-out) ${delay}ms, transform var(--motion-reveal) var(--ease-out) ${delay}ms`
  };
}

/**
 * Design Asylum — StatementBlock
 * Oversized bold Blinker manifesto headline + a large Fraunces lede, left
 * aligned with generous room. Fades up from a ghost state on scroll-in
 * (headline first, lede staggered after).
 */
function StatementBlock({
  eyebrow,
  headline,
  lede,
  align = 'left',
  style,
  ...rest
}) {
  const [ref, shown] = useReveal();
  return /*#__PURE__*/React.createElement("section", _extends({
    ref: ref,
    style: {
      padding: 'var(--section-pad-y) var(--gutter)',
      background: 'var(--surface-paper-white)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      ...revealStyle(shown, 0),
      marginBottom: '28px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--color-iris-voltage)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '11px',
      color: 'var(--color-graphite)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...revealStyle(shown, 80),
      margin: 0,
      maxWidth: '16ch',
      marginInline: align === 'center' ? 'auto' : undefined,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'none',
      letterSpacing: '-0.02em',
      lineHeight: 1.0,
      fontSize: 'var(--text-statement)',
      color: 'var(--color-obsidian-ink)',
      textWrap: 'balance'
    }
  }, headline), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      ...revealStyle(shown, 200),
      margin: '32px 0 0',
      maxWidth: '680px',
      marginInline: align === 'center' ? 'auto' : undefined,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'var(--text-lede)',
      lineHeight: 1.45,
      color: 'var(--color-graphite)'
    }
  }, lede)));
}
Object.assign(__ds_scope, { StatementBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/StatementBlock.jsx", error: String((e && e.message) || e) }); }

// components/work/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Design Asylum — FeatureCard
 * A solid vivid colour block for editorial / "happenings" grids: small category
 * label centred top, an open-in-new-tab icon top-right, a bold Blinker headline
 * centred, author/source (Fraunces) bottom-centre, and a contextual capsule CTA
 * bottom-right that fills/brightens on hover.
 */
function FeatureCard({
  bg = 'var(--color-block-iris)',
  ink = 'auto',
  // 'auto' | 'light' | 'dark'
  categoryLabel,
  title,
  source,
  ctaLabel = 'Read',
  href = '#',
  isExternal = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  // light blocks (solar/mint) want dark ink
  const dark = ink === 'dark' || ink === 'auto' && (bg.includes('solar') || bg.includes('mint') || bg.includes('#ffc') || bg.includes('#eaf'));
  const fg = dark ? 'var(--color-obsidian-ink)' : 'var(--color-paper-white)';
  const subtle = dark ? 'rgba(24,31,31,0.62)' : 'rgba(255,255,255,0.72)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-cards)',
      padding: 'clamp(24px, 3vw, 36px)',
      minHeight: 'clamp(280px, 34vw, 380px)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--motion-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, categoryLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '11px',
      color: subtle
    }
  }, categoryLabel), isExternal && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      fontSize: 18,
      color: subtle
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.05,
      fontSize: 'clamp(24px,2.6vw,34px)',
      textWrap: 'balance'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      minHeight: 40
    }
  }, source && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '15px',
      color: subtle,
      textAlign: 'center'
    }
  }, source), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '11px',
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${hover ? 'transparent' : fg}`,
      background: hover ? fg : 'transparent',
      color: hover ? bg : fg,
      transition: 'background var(--motion-base), color var(--motion-base), border-color var(--motion-base)'
    }
  }, ctaLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/work/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useReveal(threshold = 0.2) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}
function useIsMobile() {
  const get = () => typeof window !== 'undefined' && window.innerWidth <= 640;
  const [m, setM] = React.useState(get);
  React.useEffect(() => {
    const on = () => setM(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return m;
}
const rev = (shown, d = 0) => ({
  opacity: shown ? 1 : 0,
  transform: shown ? 'none' : 'translateY(24px)',
  transition: `opacity var(--motion-reveal) var(--ease-out) ${d}ms, transform var(--motion-reveal) var(--ease-out) ${d}ms`
});

/**
 * Design Asylum — WorkCard
 * The core repeating project module: a tall full-bleed media block with a logo
 * centred over it, then project name (Blinker), a one-line Fraunces description
 * and a headline statistic (big Blinker number + small circular icon + Fraunces
 * caption). A persistent capsule "More" pill floats bottom-right. Text reveals
 * up, staggered name → description → stat. Mobile: media goes portrait and all
 * text stacks single-column; the More pill stays anchored bottom-right.
 */
function WorkCard({
  media,
  mediaSrc,
  logo,
  title,
  description,
  statValue,
  statIcon = '↗',
  statCaption,
  href = '#',
  moreLabel = 'More',
  style,
  ...rest
}) {
  const [ref, shown] = useReveal();
  const mobile = useIsMobile();
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    ref: ref,
    style: {
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      background: 'var(--color-mint-wash)',
      aspectRatio: mobile ? '3 / 4' : '16 / 9'
    }
  }, media || mediaSrc && /*#__PURE__*/React.createElement("img", {
    src: mediaSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), logo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, logo), /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      padding: '11px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '12px',
      color: hover ? 'var(--color-obsidian-ink)' : 'var(--color-paper-white)',
      background: hover ? 'var(--color-paper-white)' : 'rgba(24,31,31,0.55)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--motion-base) var(--ease-out), background var(--motion-base), color var(--motion-base)'
    }
  }, moreLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: mobile ? '20px' : '32px',
      marginTop: '28px',
      gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...rev(shown, 0),
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.0,
      fontSize: 'clamp(28px,3.4vw,44px)',
      color: 'var(--color-obsidian-ink)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      ...rev(shown, 120),
      margin: '16px 0 0',
      maxWidth: '46ch',
      fontFamily: 'var(--font-serif)',
      fontSize: '18px',
      lineHeight: 1.45,
      color: 'var(--color-graphite)'
    }
  }, description)), statValue && /*#__PURE__*/React.createElement("div", {
    style: {
      ...rev(shown, 240)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-obsidian-ink)',
      color: 'var(--color-paper-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    },
    "aria-hidden": "true"
  }, statIcon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      fontSize: 'var(--text-stat)',
      color: 'var(--color-obsidian-ink)'
    }
  }, statValue)), statCaption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '15px',
      lineHeight: 1.4,
      color: 'var(--color-graphite)'
    }
  }, statCaption))));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/WorkCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Design Asylum — website kit app shell. */
function App() {
  const toContact = () => {
    const el = document.getElementById('sec-contact');
    if (el) window.scrollTo({
      top: el.offsetTop - 90,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DANav, {
    onStart: toContact
  }), /*#__PURE__*/React.createElement(DAHero, null), /*#__PURE__*/React.createElement(DAIntro, {
    onStart: toContact
  }), /*#__PURE__*/React.createElement(DAMarquee, null), /*#__PURE__*/React.createElement(DAWork, null), /*#__PURE__*/React.createElement(DAStatement, null), /*#__PURE__*/React.createElement(DAContact, null), /*#__PURE__*/React.createElement(DAFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Contact section — interactive enquiry form with a thank-you state. */
function DAField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  textarea,
  error
}) {
  const [focus, setFocus] = React.useState(false);
  const border = error ? 'var(--color-iris-voltage)' : focus ? 'var(--color-iris-voltage)' : 'var(--color-obsidian-ink)';
  const common = {
    fontFamily: 'var(--font-serif)',
    fontSize: '16px',
    lineHeight: 1.5,
    color: 'var(--color-obsidian-ink)',
    background: '#fff',
    border: `1.5px solid ${border}`,
    padding: textarea ? '18px 24px' : '16px 24px',
    borderRadius: textarea ? '28px' : 'var(--radius-inputs)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: focus && !error ? '0 0 0 3px rgba(81,111,234,0.15)' : 'none',
    transition: 'border-color .2s, box-shadow .2s',
    resize: 'vertical',
    fontFamily: 'var(--font-serif)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '10px',
      color: 'var(--color-obsidian-ink)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: common
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: common
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      color: 'var(--color-iris-voltage)',
      paddingLeft: '24px'
    }
  }, error));
}
function Contact() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState({});
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const submit = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Tell us who you are.';
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(f.email)) e.email = 'A real email, please.';
    if (!f.message.trim()) e.message = 'A sentence is plenty.';
    setErr(e);
    if (Object.keys(e).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "sec-contact",
    style: {
      background: 'var(--surface-mint-wash)',
      padding: '120px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(40px,6vw,68px)',
      lineHeight: 0.95,
      color: 'var(--color-obsidian-ink)'
    }
  }, "Let\u2019s make", /*#__PURE__*/React.createElement("br", null), "something loud."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      lineHeight: 1.5,
      color: 'var(--color-graphite)'
    }
  }, "Projects start around \xA315k. Tell us what you\u2019re building and we\u2019ll reply within a day."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'var(--color-obsidian-ink)'
    }
  }, "hello@designasylum.studio")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-fog)',
      borderRadius: 'var(--radius-cards)',
      padding: '32px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '13px',
      letterSpacing: '0.06em',
      color: 'var(--color-iris-voltage)'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '30px',
      lineHeight: 1.15,
      color: 'var(--color-obsidian-ink)'
    }
  }, "Thanks, ", f.name.split(' ')[0] || 'friend', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--color-graphite)'
    }
  }, "We\u2019ve got it. Expect a reply within one working day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(DAButton, {
    variant: "secondary",
    size: "sm",
    onClick: () => {
      setSent(false);
      setF({
        name: '',
        email: '',
        message: ''
      });
    }
  }, "Send another"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(DAField, {
    label: "Your name",
    placeholder: "Asha Rao",
    value: f.name,
    onChange: set('name'),
    error: err.name
  }), /*#__PURE__*/React.createElement(DAField, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    value: f.email,
    onChange: set('email'),
    error: err.email
  }), /*#__PURE__*/React.createElement(DAField, {
    label: "What are you building?",
    textarea: true,
    placeholder: "A rebrand for\u2026",
    value: f.message,
    onChange: set('message'),
    error: err.message
  }), /*#__PURE__*/React.createElement(DAButton, {
    variant: "primary",
    size: "md",
    iconRight: true,
    onClick: submit
  }, "Send enquiry")))));
}
Object.assign(window, {
  DAContact: Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Obsidian footer — giant wordmark, columns, fine print. */
function Footer() {
  const cols = [['Studio', ['Work', 'About', 'Thinking', 'Careers']], ['Connect', ['Instagram', 'LinkedIn', 'Are.na', 'Newsletter']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-obsidian-ink)',
      color: '#fff',
      padding: '90px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: '40px',
      paddingBottom: '64px',
      borderBottom: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '20px',
      lineHeight: 1.4,
      maxWidth: '320px',
      color: 'rgba(255,255,255,0.82)'
    }
  }, "Bold by design. A brand & digital studio for the ambitious.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '16px',
      color: '#fff',
      textDecoration: 'none',
      cursor: 'pointer',
      opacity: 0.86
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      lineHeight: 0.8,
      fontSize: 'clamp(64px, 16vw, 220px)',
      color: '#fff',
      padding: '48px 0 24px',
      whiteSpace: 'nowrap'
    }
  }, "Asylum"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Design Asylum Studio"), /*#__PURE__*/React.createElement("span", null, "London \xB7 Lisbon"))));
}
Object.assign(window, {
  DAFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — full-bleed solar gradient banner with a centred edge-to-edge wordmark.
   No buttons in the hero (the nav is separate); value prop + CTAs follow below. */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      height: 'clamp(560px, 92vh, 900px)',
      background: 'var(--gradient-solar-bloom)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      padding: '0 16px',
      textAlign: 'center',
      width: '100%',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      lineHeight: 1.0,
      fontSize: 'clamp(48px, 13vw, 168px)',
      color: '#fff'
    }
  }, "Design\xA0Asylum"));
}

/* Intro band — the editorial statement + CTAs that the hero deliberately omits. */
function Intro({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-paper-white)',
      padding: '120px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--color-iris-voltage)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '11px',
      color: 'var(--color-graphite)'
    }
  }, "Brand & Digital Studio \u2014 London")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '900px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(28px,4vw,52px)',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      color: 'var(--color-obsidian-ink)',
      textWrap: 'balance'
    }
  }, "We build brands that refuse to be ignored \u2014 strategy, identity and digital for the ambitious. No safe. No filler. No apologies."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '48px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DAButton, {
    variant: "primary",
    size: "lg",
    iconRight: true,
    onClick: onStart
  }, "Start a project"), /*#__PURE__*/React.createElement(DAButton, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      const el = document.getElementById('sec-work');
      if (el) window.scrollTo({
        top: el.offsetTop - 110,
        behavior: 'smooth'
      });
    }
  }, "See the work"))));
}
Object.assign(window, {
  DAHero: Hero,
  DAIntro: Intro
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Floating nav pill — Mint Wash, wordmark left, links center, CTA right. */
function Nav({
  onStart
}) {
  const links = ['Work', 'Studio', 'Thinking', 'Contact'];
  const [active, setActive] = React.useState('Work');
  const go = l => {
    setActive(l);
    if (l === 'Contact') {
      onStart();
      return;
    }
    const el = document.getElementById('sec-' + l.toLowerCase());
    if (el) window.scrollTo({
      top: el.offsetTop - 110,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      pointerEvents: 'auto',
      width: '100%',
      maxWidth: 'var(--page-max-width)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(234,247,243,0.82)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: '1px solid rgba(24,31,31,0.08)',
      borderRadius: 'var(--radius-nav)',
      padding: '12px 14px 12px 26px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 0.86
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      fontSize: '15px',
      color: 'var(--color-obsidian-ink)'
    }
  }, "Design"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      fontSize: '15px',
      color: 'var(--color-obsidian-ink)'
    }
  }, "Asylum")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => go(l),
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '11px',
      color: active === l ? 'var(--color-obsidian-ink)' : 'var(--color-graphite)',
      background: active === l ? '#fff' : 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 16px',
      borderRadius: '999px',
      transition: 'all .2s'
    }
  }, l))), /*#__PURE__*/React.createElement(DAButton, {
    variant: "primary",
    size: "sm",
    iconRight: true,
    onClick: onStart
  }, "Start a project")));
}
Object.assign(window, {
  DANav: Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Statement.jsx
try { (() => {
/* Deep-teal statement band + services list. */
function Statement() {
  const services = [['01', 'Brand Strategy', 'Positioning, naming, narrative and the sharp idea everything hangs from.'], ['02', 'Identity Design', 'Logos, type, colour and motion systems built to scale and to last.'], ['03', 'Digital Product', 'Websites and products designed and shipped with our engineering partners.'], ['04', 'Campaign', 'Launch ideas that travel — across film, print, social and space.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "sec-studio",
    style: {
      background: 'var(--surface-deep-teal)',
      color: '#fff',
      padding: '140px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '980px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '11px',
      color: '#96ebeb'
    }
  }, "The studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'clamp(28px,4.4vw,52px)',
      lineHeight: 1.22,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, "We\u2019re a small studio with a low tolerance for boring. We make brands that pick a side, hold a line, and look like nothing else in the room."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(DAArrowLink, {
    dark: true
  }, "Read our manifesto")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-paper-white)',
      padding: '120px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 48px',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(36px,5vw,56px)',
      color: 'var(--color-obsidian-ink)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("div", null, services.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1.1fr',
      gap: '24px',
      alignItems: 'baseline',
      padding: '34px 0',
      borderTop: '1px solid var(--color-fog)',
      borderBottom: i === services.length - 1 ? '1px solid var(--color-fog)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      fontSize: '14px',
      color: 'var(--color-ash)'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(24px,3vw,34px)',
      lineHeight: 1.1,
      color: 'var(--color-obsidian-ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      lineHeight: 1.5,
      color: 'var(--color-graphite)'
    }
  }, d)))))));
}
Object.assign(window, {
  DAStatement: Statement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Statement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Client marquee + selected work as alternating editorial split blocks. */
const DA_CLIENTS = ['NOMA', 'VOLT', 'KINFOLK', 'ARC', 'SÄLEN', 'MERIDIAN', 'OBLIQUE', 'FERN'];
const DA_WORK = [{
  index: '01',
  name: 'Free Soul',
  description: 'A full identity system built on contrast and restraint — packaging that reads as pure confidence.',
  tagline: 'Branding · Packaging',
  location: 'London',
  cover: 'var(--color-deep-teal)'
}, {
  index: '02',
  name: 'Noma',
  description: 'Rewilding a heritage spirits house with a single chromatic gesture and a lot of nerve.',
  tagline: 'Strategy · Identity',
  location: 'Copenhagen',
  cover: 'var(--gradient-solar-bloom)'
}, {
  index: '03',
  name: 'Volt',
  description: 'A fintech that feels human — naming, voice and a product language built to scale.',
  tagline: 'Naming · Digital',
  location: 'Berlin',
  cover: 'linear-gradient(135deg,#96ebeb,#516fea)'
}, {
  index: '04',
  name: 'Meridian',
  description: 'Editorial for a culture magazine — type as the entire personality.',
  tagline: 'Editorial · Web',
  location: 'New York',
  cover: 'var(--color-obsidian-ink)'
}];
function Marquee() {
  const row = [...DA_CLIENTS, ...DA_CLIENTS];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-fog)',
      borderBottom: '1px solid var(--color-fog)',
      overflow: 'hidden',
      padding: '22px 0',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '64px',
      whiteSpace: 'nowrap',
      animation: 'da-marquee 28s linear infinite',
      width: 'max-content'
    }
  }, row.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '20px',
      color: 'var(--color-ash)'
    }
  }, c))));
}
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sec-work",
    style: {
      padding: '120px 24px',
      background: 'var(--surface-paper-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(36px,5vw,56px)',
      color: 'var(--color-obsidian-ink)'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement(DAArrowLink, null, "All case studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '120px'
    }
  }, DA_WORK.map((w, i) => /*#__PURE__*/React.createElement(DACaseStudy, _extends({
    key: w.name
  }, w, {
    flip: i % 2 === 1
  }))))));
}
Object.assign(window, {
  DAWork: Work,
  DAMarquee: Marquee
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit-ui.jsx
try { (() => {
/* Design Asylum — UI kit primitives.
   Mirror of the design-system components, defined locally so the kit renders
   standalone. Styling reads from the real token CSS (styles.css). */

function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconRight,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 20px',
      font: '12px'
    },
    md: {
      padding: '15px 28px',
      font: '14px'
    },
    lg: {
      padding: '20px 38px',
      font: '16px'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-obsidian-ink)',
      color: '#fff',
      borderColor: 'var(--color-obsidian-ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'var(--color-iris-voltage)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'transparent'
    },
    inverse: {
      background: '#fff',
      color: 'var(--color-obsidian-ink)',
      borderColor: '#fff'
    }
  };
  const hov = {
    primary: {
      background: 'var(--color-deep-teal)',
      borderColor: 'var(--color-deep-teal)'
    },
    secondary: {
      background: 'var(--color-iris-voltage)',
      color: '#fff'
    },
    ghost: {
      background: 'var(--color-mint-wash)'
    },
    inverse: {
      background: 'var(--color-mint-wash)',
      borderColor: 'var(--color-mint-wash)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      fontSize: s.font,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--radius-buttons)',
      border: '2px solid transparent',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background-color .25s, color .25s, border-color .25s, transform .12s',
      transform: press ? 'scale(0.97)' : 'none',
      ...variants[variant],
      ...(hover ? hov[variant] : {}),
      ...style
    }
  }, children, iconRight && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
function ArrowLink({
  children,
  onClick,
  dark,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: dark ? '#fff' : 'var(--color-obsidian-ink)',
      textDecoration: 'none',
      borderBottom: `1px solid ${dark ? '#fff' : 'var(--color-obsidian-ink)'}`,
      paddingBottom: '3px',
      cursor: 'pointer',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform .2s'
    }
  }, "\u2192"));
}
function Tag({
  children,
  tone = 'outline',
  onClick,
  active,
  style
}) {
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--color-obsidian-ink)',
      borderColor: 'var(--color-obsidian-ink)'
    },
    solid: {
      background: 'var(--color-obsidian-ink)',
      color: '#fff',
      borderColor: 'var(--color-obsidian-ink)'
    },
    mint: {
      background: 'var(--color-mint-wash)',
      color: 'var(--color-deep-teal)',
      borderColor: 'transparent'
    },
    iris: {
      background: 'transparent',
      color: 'var(--color-iris-voltage)',
      borderColor: 'var(--color-iris-voltage)'
    }
  };
  const t = active ? tones.solid : tones[tone] || tones.outline;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '10px',
      lineHeight: 1,
      padding: '9px 16px',
      borderRadius: 'var(--radius-buttons)',
      border: '1.5px solid transparent',
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all .2s',
      ...t,
      ...style
    }
  }, children);
}
function CaseStudy({
  index,
  name,
  description,
  tagline,
  location,
  cover,
  flip,
  href = '#'
}) {
  const Text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: 'var(--color-ash)',
      marginBottom: '20px'
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(28px,3.4vw,40px)',
      lineHeight: 1.05,
      color: 'var(--color-obsidian-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: '420px',
      fontFamily: 'var(--font-serif)',
      fontSize: '20px',
      lineHeight: 1.43,
      color: 'var(--color-graphite)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '14px',
      color: 'var(--color-obsidian-ink)'
    }
  }, tagline), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '14px',
      color: 'var(--color-graphite)'
    }
  }, location)));
  const Panel = /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      background: cover,
      aspectRatio: '4 / 3',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%) rotate(-90deg)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)',
      fontStretch: 'var(--display-stretch)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: '20px',
      color: 'rgba(255,255,255,0.92)'
    }
  }, name));
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: flip ? '7fr 5fr' : '5fr 7fr',
      gap: '48px'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, Panel, Text) : /*#__PURE__*/React.createElement(React.Fragment, null, Text, Panel));
}
Object.assign(window, {
  DAButton: Button,
  DAArrowLink: ArrowLink,
  DATag: Tag,
  DACaseStudy: CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CaseStudy = __ds_scope.CaseStudy;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.FooterNav = __ds_scope.FooterNav;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.AnimatedHero = __ds_scope.AnimatedHero;

__ds_ns.PillNav = __ds_scope.PillNav;

__ds_ns.JumboPillCTA = __ds_scope.JumboPillCTA;

__ds_ns.NewsletterBand = __ds_scope.NewsletterBand;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatementBlock = __ds_scope.StatementBlock;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
