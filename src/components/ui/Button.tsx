"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "link" | "golden"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Comp
          className={cn(
            "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
            {
              "bg-white text-black hover:bg-white/90": variant === "default",
              "bg-gradient-to-r from-[#fada09] to-[#fe9a17] text-black shadow-[0_0_20px_rgba(254,154,23,0.3)] hover:shadow-[0_0_40px_rgba(254,154,23,0.5)]": variant === "golden",
              "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm": variant === "outline",
              "hover:bg-white/10 text-white": variant === "ghost",
              "text-white underline-offset-4 hover:underline": variant === "link",
              "h-12 px-8 py-2 rounded-full": size === "default",
              "h-10 px-4 text-xs rounded-full": size === "sm",
              "h-14 px-10 text-base rounded-full": size === "lg",
              "h-12 w-12 rounded-full": size === "icon",
            },
            className
          )}
          ref={ref}
          {...props}
        >
          {/* Subtle shine effect wrapper */}
          <span className="relative z-10 flex items-center gap-2">{props.children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
        </Comp>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button }
