var menuData = {
    'Home': {
        'link': "/pvis2023/",
        'sub':undefined
    },
    'Contribute': {
        'link': '/pvis2023/pages/cfp',
        'sub': {
            'Full Paper':'/pvis2023/pages/cfps/cfp_full',
            'Visualization Notes':'/pvis2023/pages/cfps/cfp_notes',
            'Posters':'/pvis2023/pages/cfps/cfp_posters',
            'Storytelling Contest':'/pvis2023/pages/cfps/cfp_story',
            'Workshop':'/pvis2023/pages/cfps/cfp_meet',
        }
    },
    'Committees': {
        'link':'/pvis2023/pages/committees',
        'sub':undefined
    },
    'Travel & Venue': {
        'link': '/pvis2023/pages/venue',
        'sub': {
            'Travel Information': '/pvis2023/pages/venue#travel',
            'Venue': '/pvis2023/pages/venue#venue',
            'Visa': '/pvis2023/pages/venue#visa'
        }
    },
    'Sponsor': {
        'link': '/pvis2023/pages/sponsor',
        'sub':undefined
    },
    'Contact': {
        'link': '/pvis2023/pages/contact',
        'sub': undefined
    }
}

window.onload = function() {
    var menuElem = document.getElementsByClassName('menu')[0];

    inHtml = ``;

    for(var menu in menuData) {
        var sub = menuData[menu];

        inHtml += `<li id="mainmenu"><a href="${sub['link']}">${menu}</a>`

        if(sub['sub'] === undefined) {
            inHtml += `</li>`;
            continue;
        }

        inHtml += `<ul>`;
        for(var subMenu in sub['sub']) {
            var link = sub['sub'][subMenu];

            inHtml += `<li><a href="${link}">${subMenu}</a></li>`;
        }
        inHtml += `</ul></li>`;
    }

    console.log(inHtml);

    menuElem.innerHTML = inHtml;
}