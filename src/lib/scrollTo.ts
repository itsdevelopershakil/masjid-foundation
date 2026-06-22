let pendingScrollId: string | null = null;

export const setPendingScroll = (id: string) => {
    pendingScrollId = id;
};

export const getPendingScroll = () => {
    const id = pendingScrollId;
    pendingScrollId = null;
    return id;
};

export const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
