// ==UserScript==
// @name        Tumblr: Unfiltered
// @icon        https://cdn.discordapp.com/attachments/1158074207758995467/1158075364623523880/logo.png?ex=65db683a&is=65c8f33a&hm=96709f58bdafcfd8e8987fadb3ac688239f85cbd1a8e369b09db63083baa796e&
// @namespace   MaddHub
// @match       https://*.tumblr.com/*
// @grant       GM_addStyle
// @license     MIT
// @version     1.6.0
// @author      maddjester
// @description A simple CSS tweak to remove the mature warning filter overlays on flagged tumbler images and videos.
// @downloadURL https://update.greasyfork.org/scripts/487478/Tumblr%3A%20Unfiltered.user.js
// @updateURL   https://github.com/MaddHub-Official/Tumblr-Unfiltered/raw/main/tumblr_unfiltered.user.js
// @supportURL  https://discord.com/servers/maddhub-official-906957649956991036
// ==/UserScript==

(function() {
    'use strict'
    GM_addStyle('div[data-testid="community-label-cover"] { display: none !important; }')
})()
