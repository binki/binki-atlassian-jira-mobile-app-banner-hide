// ==UserScript==
// @name binki-atlassian-jira-mobile-app-banner-hide
// @version 1.0.0
// @homepageURL https://github.com/binki/binki-atlassian-jira-mobile-app-banner-hide
// @match https://*.atlassian.net/*
// @require https://github.com/binki/binki-userscript-when-element-query-selector-async/raw/0a9c204bdc304a9e82f1c31d090fdfdf7b554930/binki-userscript-when-element-query-selector-async.js
// ==/UserScript==

(async () => {
  const frontEnd = document.getElementById('jira-frontend');
  while (true) {
    const linkElement = await whenElementQuerySelectorAsync(document.body, 'button[data-testid="issue-view-activity.section-message.jira-ios-download-cta"]');
    linkElement.closest('section').remove();
  }
})();
