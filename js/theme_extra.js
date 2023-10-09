/*
 * Assign 'docutils' class to tables so styling and
 * JavaScript behavior is applied.
 *
 * https://github.com/mkdocs/mkdocs/issues/2028
 */

$('div.rst-content table').addClass('docutils');

function foldAllNav() {
    document.querySelectorAll(".toctree-expand").forEach(
        v => {
            if (v.parentElement.ariaExpanded != "false")
                v.click()
        }
    )
}

function waitElementExist(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector))
            return resolve(document.querySelector(selector));
        const observer = new MutationObserver(function () {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    });
}

waitElementExist('.toctree-expand').then(foldAllNav);
