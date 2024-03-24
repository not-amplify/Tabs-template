let tabIndex = 0;

function createTab() {
    const tabsContainer = document.getElementById('tabs');
    const tabContentContainer = document.getElementById('tab-content');
    const newTabId = 'tab-' + tabIndex;
    const newContentId = 'content-' + tabIndex;

    let newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.id = newTabId;
    newTab.textContent = "New Tab"; // Replace this with the page title if available
    newTab.draggable = true;

    // Create the close button for the tab
    let closeButton = document.createElement('button');
    closeButton.classList.add('close-tab');
    closeButton.textContent = 'X'; // Again, consider using an icon for a better user experience
    closeButton.onclick = function (event) {
        // Close the tab
        newTab.remove();
        newContent.remove(); // The content pane associated with the tab
        event.stopPropagation(); // Prevent triggering the tab's click event
    };
    newTab.appendChild(closeButton);
    tabsContainer.appendChild(newTab);


    // Create the content pane
    let newContent = document.createElement('div');
    newContent.classList.add('tab-pane');
    newContent.id = newContentId;
    tabContentContainer.appendChild(newContent);

    // Create the iframe within the content pane
    let newIframe = document.createElement('iframe');
    newIframe.setAttribute('src', "newtab.html");
    newIframe.setAttribute('name', 'New Tab');
    newIframe.style.width = '100%';
    newIframe.style.height = '80%'; // Customizable to suit your design
    newContent.appendChild(newIframe);

    // Event listener to make the tab active
    newTab.addEventListener('click', () => {
        document.querySelectorAll('.tab, .tab-pane').forEach(el => {
            el.classList.remove('active');
        });
        newTab.classList.add('active');
        newContent.classList.add('active');
    });

    // Increment the index for the next tab
    tabIndex++;
}
