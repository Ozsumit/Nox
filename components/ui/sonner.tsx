"use client";

// import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "dark-theme" } = useTheme();

  // Customize toast options without explicitly typing as ToastOptions
  const toastOptions = {
    duration: 5000, // Duration in milliseconds
    position: "top-right", // Position of the toast
    classNames: {
      toast:
        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg transition-all duration-300 ease-in-out transform",
      description: "group-[.toast]:text-muted-foreground text-sm",
      actionButton:
        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-bold",
      cancelButton:
        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
    },
    style: {
      borderRadius: "1px", // Rounded corners for the toast
      padding: "16px", // Padding inside the toast
      background: "black", // Background color
      color: "white", // Text color
    },
  };

  // Additional customization based on theme
  // const customTheme = theme === "dark" ? "dark-theme" : "light-theme";

  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      className={`toaster group `}
      toastOptions={toastOptions}
      {...props}
    />
  );
};

export { Toaster };
