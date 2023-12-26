import Link from "next/link";

export default function SummaryNav() {
    return (
        <div className="flex items-center px-14 py-11">
            <div>
                <h6 className="text-muted-foreground">Contract</h6>
                <p className="text-white">ACM, SAS</p>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                <nav
                    className="xl:flex hidden items-center space-x-4 lg:space-x-6"
                >
                    <Link
                        href=""
                        className="transition-colors text-white hover:text-white"
                    >
                        Copy URL
                    </Link>
                    <Link
                        href=""
                        className="text-muted-foreground transition-colors hover:text-white"
                    >
                        Share
                    </Link>
                    <Link
                        href=""
                        className="bg-[#94A3B8] text-[#666] rounded-md p-1.5 inline-block"
                    >
                        Editable
                    </Link>
                </nav>
            </div>
        </div>
    );
}
