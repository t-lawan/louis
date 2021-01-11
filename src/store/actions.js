export const SET_PAGES = "SET_PAGES";
export const SET_SITE_INFO= "SET_SITE_INFO";
export const SET_SIDEBAR_LINKS = "SET_SIDEBAR_LINKS";
export const IS_LOADED = "IS_LOADED";


export const isLoaded = () => {
    return {
        type: IS_LOADED
    }
}

export const setPages = (pages) => {
    return {
        type: SET_PAGES,
        pages: pages
    }
}

export const setSiteInfo = (site_info) => {
    return {
        type: SET_SITE_INFO,
        site_info: site_info
    }
}

export const setSidebarLinks = (sidebar_links) => {
    return {
        type: SET_SIDEBAR_LINKS,
        sidebar_links: sidebar_links
    }
}