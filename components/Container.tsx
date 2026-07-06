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
            "mx-auto w-full max-w-xl px-4 lg:px-0",
            className
        )}>
            {children}
        </div>
    );
};

export { Container };
