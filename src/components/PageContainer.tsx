import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
} & Pick<ComponentPropsWithoutRef<"div">, "id">;

export default function PageContainer({
  children,
  className,
  as: Tag = "div",
  id,
}: PageContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
