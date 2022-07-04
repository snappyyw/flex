import React from "react";
import { Routes, Route } from "react-router-dom";

import { MAIN_LINK, BLOG_LINK } from "./link";
import { Main, Blog } from "../pages";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} element={<Main />} />
            <Route exact path={BLOG_LINK} element={<Blog />}/>
        </Routes>
    );
}

export default MainRoute;