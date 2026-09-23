import React, { useState } from "react";
import { cn } from "@/lib/utils";
import "./GenerateButton.css";

export type GenerateButtonPalette = 
  | "indigo"    // Primary Brand Indigo (#231C50) with royal glow
  | "coral"     // Signature Coral / Peach highlight (#F09C7D)
  | "peach"     // Solid Peach button base with warm glow
  | "lavender"  // Lilac / Lavender highlight (#C6B6EB)
  | "blue"      // Sky Cerulean highlight (#74A7CE)
  | "dark";     // Sleek Dark surface

export interface GenerateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 
   * Preset palette aligned with sBLOOM brand design tokens:
   * 'indigo' | 'coral' | 'peach' | 'lavender' | 'blue' | 'dark'
   * Defaults to 'indigo'.
   */
  palette?: GenerateButtonPalette;
  /** 
   * Custom hue value (0-360) for the button's luminous highlight color.
   * If provided, overrides the preset palette's hue.
   */
  hue?: number;
  /**
   * Custom base background color for the button.
   * If provided, overrides the preset palette's button-color.
   */
  buttonColor?: string;
  /**
   * If true, forces the button into its "Generating" / animated active state.
   * By default, the button also enters this state when focused or clicked.
   */
  isGenerating?: boolean;
  /**
   * Primary label text displayed in the normal state.
   * Defaults to "Generate".
   */
  text?: string;
  /**
   * Active state label text displayed when generating.
   * Defaults to "Generating".
   */
  generatingText?: string;
  /**
   * Custom icon element. If omitted, the signature three-star sparkles SVG is rendered.
   */
  icon?: React.ReactNode;
  /**
   * Set to false to hide the leading icon. Defaults to true.
   */
  showIcon?: boolean;
}

const PALETTE_CONFIGS: Record<GenerateButtonPalette, { buttonColor: string; hue: number }> = {
  indigo: {
    buttonColor: "#231C50",
    hue: 250,
  },
  coral: {
    buttonColor: "#231C50",
    hue: 16,
  },
  peach: {
    buttonColor: "#F09C7D",
    hue: 16,
  },
  lavender: {
    buttonColor: "#231C50",
    hue: 265,
  },
  blue: {
    buttonColor: "#231C50",
    hue: 205,
  },
  dark: {
    buttonColor: "#111116",
    hue: 210,
  },
};

export function GenerateButton({
  palette = "indigo",
  hue,
  buttonColor,
  isGenerating: controlledIsGenerating,
  text = "Generate",
  generatingText = "Generating",
  icon,
  showIcon = true,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
  children,
  ...props
}: GenerateButtonProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isGenerating = controlledIsGenerating !== undefined ? controlledIsGenerating : isFocused;

  const config = PALETTE_CONFIGS[palette] || PALETTE_CONFIGS.indigo;
  const resolvedHue = hue !== undefined ? hue : config.hue;
  const resolvedButtonColor = buttonColor !== undefined ? buttonColor : config.buttonColor;

  const displayText = children && typeof children === "string" ? children : text;
  const displayGeneratingText = generatingText;

  const customStyle: React.CSSProperties = {
    ...({
      "--button-color": resolvedButtonColor,
      "--highlight-color-hue": `${resolvedHue}deg`,
    } as React.CSSProperties),
    ...style,
  };

  return (
    <div className="relative inline-block group">
      <button
        type="button"
        className={cn("gen-btn", className)}
        data-generating={isGenerating}
        style={customStyle}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        onClick={(e) => {
          setIsFocused(true);
          onClick?.(e);
        }}
        {...props}
      >
        {showIcon && (
          icon ? (
            <span className="gen-btn-svg-wrap">{icon}</span>
          ) : (
            <svg className="gen-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          )
        )}

        <div className="gen-txt-wrapper">
          <div className="gen-txt-1">
            {displayText.split("").map((letter, i) => (
              <span
                key={`t1-${i}`}
                className="gen-btn-letter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
          <div className="gen-txt-2">
            {displayGeneratingText.split("").map((letter, i) => (
              <span
                key={`t2-${i}`}
                className="gen-btn-letter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}

export default GenerateButton;
