// components/PageWithTransition.tsx
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
const PageWithTransition = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const [transitioning, setTransitioning] = useState(false);
    useEffect(() => {
        // 👇 this handler will create a transition effect between route changes,
        // so that it doesn't automatically display the next screen.
        const handler = () => {
            setTransitioning(true);
            setTimeout(() => {
                setTransitioning(false);
            }, 280);
        };
        router.events.on("routeChangeComplete", handler);
        return () => {
            router.events.off("routeChangeComplete", handler);
        };
    }, [router.events]);
    // 👇 temporay loading component since we don't have animations yet
    const Loading = () => <div className="container mx-auto">Loading...</div>;

    // 👇 determine what screen to display depending on the transition state
    const Screen = !transitioning ? Component : Loading;
    // 👇 render the screen
    return (
        <div>
            <Screen {...pageProps} />
        </div>
    );
};
export default PageWithTransition;
