export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="main_content">{children}</div>;
}
