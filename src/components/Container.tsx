export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="max-w-5xl w-full mx-auto px-6">{children}</div>;
}