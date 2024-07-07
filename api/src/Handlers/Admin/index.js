import {  delGameHand, delGenreHand, delPlatformHand } from "./delGameHand.js";
import { createGameHandler, createGenreHandler, createPlatformHandler} from './gamePostHandler.js'
import {  getGamesAdminHandler,getGenresHandler, getPlatformHandler,} from './gameshandlers.js'
import {gameUpdaterHand, genreUpdaterHand, platformUpdaterHand} from './gameUpdaterHand.js'

export default {
    delGameHand,
    delGenreHand,
    delPlatformHand,
    createGameHandler,
    createGenreHandler,
    createPlatformHandler,
    getGamesAdminHandler,
    getGenresHandler,
    getPlatformHandler,
    gameUpdaterHand,
    genreUpdaterHand,
    platformUpdaterHand
}