// ==UserScript==
// @name        Tumblr Unfiltered
// @namespace   MaddHub Scripts
// @match       https://*.tumblr.com/*
// @grant       GM_addStyle
// @version     1.1.0
// @author      maddjester
// @description 2/16/2024, 5:25:08 PM - A simple CSS tweak to remove the mature warning filter overlays on flagged tumbler images and videos.
// @downloadURL https://update.greasyfork.org/scripts/487478/Tumblr%20Unfiltered.user.js
// @updateURL https://update.greasyfork.org/scripts/487478/Tumblr%20Unfiltered.user.js
// ==/UserScript==


(function() {
    'use strict';
    GM_addStyle('div[data-testid="community-label-cover"] { display: none !important; }');
})();



