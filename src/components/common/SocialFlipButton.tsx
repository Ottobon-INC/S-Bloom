import React from "react";
import {
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaDiscord,
} from "react-icons/fa";

// Minimal local replacement for `cn` without requiring tailwind-merge
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

export interface SocialItem {
    letter: string;
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
}

interface SocialFlipButtonProps {
    items?: SocialItem[];
    className?: string;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
}

const defaultItems: SocialItem[] = [
    { letter: "C", icon: <FaGithub />, label: "Github", href: "#" },
    { letter: "O", icon: <FaTwitter />, label: "Twitter", href: "#" },
    { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "#" },
    { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "#" },
    { letter: "C", icon: <FaEnvelope />, label: "Email", href: "#" },
    { letter: "T", icon: <FaDiscord />, label: "Discord", href: "#" },
];

const SocialFlipNode = ({
    item,
    itemClassName,
    frontClassName,
    backClassName,
}: {
    item: SocialItem;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
}) => {
    const Wrapper = item.href ? "a" : "div";
    const wrapperProps = item.href
        ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
        : { onClick: item.onClick };

    return (
        <Wrapper
            {...wrapperProps as any}
            className={cn("social-flip-node-wrap", itemClassName)}
        >
            <div className="social-flip-tooltip">
                {item.label}
                <div className="social-flip-tooltip-arrow" />
            </div>

            <div className="social-flip-inner">
                {/* Front - Letter */}
                <div className={cn("social-flip-front", frontClassName)}>
                    {item.letter}
                </div>

                {/* Back - Icon */}
                <div className={cn("social-flip-back", backClassName)}>
                    {item.icon}
                </div>
            </div>
        </Wrapper>
    );
};

export default function SocialFlipButton({
    items = defaultItems,
    className,
    itemClassName,
    frontClassName,
    backClassName,
}: SocialFlipButtonProps) {
    return (
        <div className={cn("social-flip-container", className)}>
            <div className="social-flip-group">
                {/* Animated Border Lines Container */}
                <div className="social-flip-borders">
                    <div className="social-flip-border-top" />
                    <div className="social-flip-border-bottom" />
                </div>

                {items.map((item, index) => (
                    <SocialFlipNode
                        key={index}
                        item={item}
                        itemClassName={itemClassName}
                        frontClassName={frontClassName}
                        backClassName={backClassName}
                    />
                ))}
            </div>
        </div>
    );
}
