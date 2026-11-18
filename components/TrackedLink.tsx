"use client";
import type { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
}

export function TrackedLink({ eventName: _eventName, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      data-tracked="true"
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
