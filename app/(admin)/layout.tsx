import SideBarComponent from "@/components/sideBar/SideBarComponent";
import "@/app/globals.css";
export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        <aside className="fixed h-screen">
            <SideBarComponent />
        </aside>
        <main className="">{children}</main>
        </body>
        </html>
    );
}
