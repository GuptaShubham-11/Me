import { cn } from "../lib/utils";

const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(
            "mx-auto px-4 w-full max-w-xl md:px-0",
            className
        )}>
            {children}
        </div>
    );
};

export { Container };
