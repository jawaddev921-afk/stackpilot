import { cn } from "@/frontend/utils/utils";
import Image from "next/image";

export default function StackPilotLogo({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/stackpilot-icon.png"
        alt=""
        width={2488}
        height={2627}
        className={cn("dark:hidden", className)}
      />
      <Image
        src="/stackpilot-icon-dark.png"
        alt=""
        width={2488}
        height={2627}
        className={cn("hidden dark:block", className)}
      />
    </>
  );
}
