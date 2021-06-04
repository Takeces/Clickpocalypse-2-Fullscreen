// ==UserScript==
// @name         Clickpocalypse 2 Fullscreen
// @namespace    Clickpocalypse2
// @version      2.0
// @description  Fullscreen styling for Clickpocalypse 2
// @author       Takeces aka Akerus
// @match        https://minmaxia.com/c2/
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // normal fullscreen styles
    GM_addStyle('.gameContainer {position: unset; width: 100%; height: 100%; top: unset; left: unset; margin-left: 0;}');
    GM_addStyle('.gameTabRightPanel {left: unset; bottom: 191px; right: 0; width: 276px;}');
    GM_addStyle('.gameTabRightPanelUpgradeButtonContainer {bottom: 0;}');
    GM_addStyle('.gameTabBottomPanel {top: unset; left: unset; right: 391px; bottom: 0; height: 188px; background-color: black;}');
    GM_addStyle('.gameTabPotionPanel {top: unset; left: unset; right: 0; bottom: 0; width: 392px; height: 187px; background-color: black;}');
    GM_addStyle('.gameTabScrollButtonContainer {top: unset; bottom: 150px;}');
    GM_addStyle('.encounterNotificationPanel {top: 40px;}');
    GM_addStyle('.scrollButtonDisabled {background-color: black;}');
    GM_addStyle('.gameTabTopLeftPanel {width: unset; height: calc(100% - 197px);}');
    GM_addStyle('.toggleMenus {position: absolute; left:3px; bottom: 3px;}');

    // hide menu styles
    GM_addStyle('.gameContainer.hideMenus .tabMenu {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .gameTitleContainer {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .pauseButtonContainer {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .gameTabRightPanel {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .gameTabBottomPanel {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .gameTabScrollButtonContainer {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .gameTabPotionPanel {visibility: hidden;}');
    GM_addStyle('.gameContainer.hideMenus .mainTabContainer {top: 0; border: none;}');
    GM_addStyle('.gameContainer.hideMenus .gameTabTopLeftPanel {height: 100%; border: none; position: unset; margin: auto;}');

    function initialize() {
        var btn = document.createElement('button');
        btn.innerHTML = 'Toggle Menus';
        btn.setAttribute('class', 'toggleMenus');
        btn.addEventListener('click', toggleMenus);
        document.getElementsByClassName('mainTabContainer')[0].appendChild(btn);
    }

    function toggleMenus() {
        document.getElementById('gameContainer').classList.toggle("hideMenus");
    }

    initialize();
})();
