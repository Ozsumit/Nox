"use client";

import React from "react";
import { Toaster as Sonner, toast } from "sonner";
import Link from "next/link";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const toastOptions = {
    duration: 5000,
    position: "top-right" as const,
    closeButton: true,
    style: {
      background: "black",
      color: "white",
      borderRadius: "4px",
      padding: "16px",
    },
    className: "custom-toast",
  };

  return (
    <Sonner className="toaster group" toastOptions={toastOptions} {...props} />
  );
};

// Custom function to show toast with link
// export const showToastWithLink = (
//   message: string,
//   linkText: string,
//   linkHref: string
// ) => {
//   toast(
//     <div>
//       {message}{" "}
//       <Link href={linkHref} className="text-blue-500 hover:underlin">
//         {linkText}
//       </Link>
//     </div>
//   );
// };

export { Toaster, toast };
