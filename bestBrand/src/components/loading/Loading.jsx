const Loading = () => {
    return (
        <main>
            <section className="myContainer py-24 flex justify-center items-center xl:h-[45rem] sm:h-[30rem]">
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                </div>
            </section>
        </main>
    );
};

export default Loading;
