import "@/index.css"; // Ensure styles for animations exist if not using Tailwind

export function AnimatedEmoji({
    stressLevel,
    src,
    alt,
}: {
    stressLevel: "low" | "medium" | "high";
    src: string;
    alt: string;
}) {
    let animationClass = "";

    if (stressLevel === "low") {
        animationClass = "animate-bounce";
    } else if (stressLevel === "medium") {
        animationClass = "animate-wiggle"; // Will need to define 'wiggle' in tailwind.config
    } else if (stressLevel === "high") {
        animationClass = "animate-shake"; // Will need to define 'shake' in tailwind.config
    }

    return (
        <img
            className={`h-48 w-96 object-contain ${animationClass}`}
            src={src}
            alt={alt}
        />
    );
}
