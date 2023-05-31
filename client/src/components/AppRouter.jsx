import React from "react";
import {Route, Routes} from 'react-router-dom'
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import ServerConnect from "../utils/serverConnect"

const AppRouter = (props) => {
    return (
        <Routes>
            <Route path={"/"} element={<Posts heros={ServerConnect.getAllHero()}
                                              deleteHero={ServerConnect.deleteHero}
                                              buttonLeft={props.buttonLeft}
                                              buttonRight={props.buttonRight}/>}/>
            <Route path={"/post/:id"} element={<Post getOneHero={ServerConnect.getOneHero}
                                                     saveOrUpdateHero={ServerConnect.saveOrUpdateHero}/>}/>
            <Route path={"/addHero"} element={<Post getOneHero={ServerConnect.getClearHero}
                                                    saveOrUpdateHero={ServerConnect.saveOrUpdateHero}/>}/>
            <Route path={"*"}
                   element={<Posts heros={ServerConnect.getAllHero()} deleteHero={ServerConnect.deleteHero}/>}/>


        </Routes>

    )
}
export default AppRouter