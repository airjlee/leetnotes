// Create a new observer object
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Check if the mutation added a new node
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Iterate over added nodes
            mutation.addedNodes.forEach(function(addedNode) {
                // Check if the added node is the desired span element
                if (addedNode.tagName === 'SPAN' && 
                    addedNode.dataset.e2eLocator === 'submission-result' && 
                    addedNode.textContent.trim() === 'Accepted') {
                    // Inject iframe into the page
                    var iframe = document.createElement('iframe');
                    iframe.src = 'https://twonouns.com/';
                    document.body.appendChild(iframe);
                }
            });
        }
    });
});

// Define the target node to observe
var targetNode = document.body; // Assuming you want to observe mutations on the whole body

// Define the configuration options for the observer
var config = { childList: true, subtree: true };

// Start observing the target node for mutations
observer.observe(targetNode, config);
