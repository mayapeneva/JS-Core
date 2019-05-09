function traverse(selector) {
    let parentNode = $(selector);
    parentNode.addClass("highlight")

    let bestDepth = -1;
    let bestSelector;
    getDeepestChild(parentNode, 0);

    highlight(bestSelector);

    function getDeepestChild(selector, depth) {
        if (depth > bestDepth) {
            bestDepth = depth;
            bestSelector = selector;
        }

        for (const child of selector.children()) {
            getDeepestChild($(child), depth+1);
        }
    }

    function highlight(selector) {
        selector.addClass("highlight");

        if (selector.attr("id") == parentNode.attr("id")) {
            return;
        }
        
        highlight(selector.parent()); 
    }
}