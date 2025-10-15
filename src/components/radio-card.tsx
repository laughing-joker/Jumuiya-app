import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  selected?: boolean;
  value: string;
  onSelect?: (value: string) => void;
}

export function RadioCard({
  children,
  className,
  selected,
  value,
  onSelect,
  ...props
}: RadioCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(value);
        }
      }}
      className={cn(
        "relative flex cursor-pointer rounded-lg border-2 p-6 transition-all duration-300",
        "hover:border-primary hover:shadow-lg",
        selected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border bg-card",
        className
      )}
      {...props}
    >
      {selected && (
        <div className="absolute top-4 right-4 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary-foreground" />
        </div>
      )}
      {children}
    </div>
  );
}
