import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ items, className }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-2", className)}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500" />}
            {index === items.length - 1 ? (
              <span className="text-xl font-medium text-gray-700">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "text-xl sm:text-lg font-medium text-white hover:text-gray-700"
                )}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
