var config = {
    style: 'mapbox://styles/danielling85/ck88vv2n6242d1ikb79w6vi7m',
    accessToken: 'pk.eyJ1IjoiZGFuaWVsbGluZzg1IiwiYSI6ImNrNWd0eGpmYTBhbTAzZnFyb2VzZzhseXEifQ.Oxe-H95ubG1Rv2SsLgOlcw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'IRISH WATER SUPPLY EVENTS',
    subtitle: 'This is a story about Irish Water Supply Events',
    byline: 'By Daniel Ling',
    footer: 'Source: https://data.world/infolabie/irish-water-supply-events',
    chapters: [
        {
            id: 'Chapter1',
            title: 'How many Water Events Have there been?',
            image: 'https://danielling4.github.io/Water/EventsbyMonth.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-8.62932, 53.82374],
                zoom: 5.79,
                pitch: 12.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                 layer: 'water-events',
                   opacity: 1.0
                }
            ],
            onChapterExit: [
                 {
                    layer: 'water-events',
                    opacity: 1.0
                 }
            ]
            },
        {
            id: 'other-identifier',
            title: 'Focus On Dublin',
            image: 'https://danielling4.github.io/Water/byTypeDublin.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-6.34642, 53.35708],
                zoom: 10.37,
                pitch: 60,
                bearing: -0.63
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'part-3',
            title: 'Lets Take a Look at Cork County',
            image: 'https://danielling4.github.io/Water/byTypeCork.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-8.48693, 51.90176],
                zoom: 12.10,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'part-4',
            title: 'Lets Take a closer look into Cork City Centre',
            image: 'https://danielling4.github.io/Water/byTypeCorkCityDetail.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-8.47377, 51.90021],
                zoom: 14.36,
                pitch: 55.50,
                bearing: -68.10
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        ,

        {
            id: 'part-5',
            title: 'what about Galway',
            image: 'https://danielling4.github.io/Water/byTypeGalway.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [ -9.04386, 53.28382],
                zoom: 12.06,
                pitch: 55.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        ,

        {
            id: 'part-6',
            title: 'and now zoom back out',
            image: 'https://danielling4.github.io/Water/EventsbyMonth.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [ -8.38385, 53.48128],
                zoom: 5.98,
                pitch: 18.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        ,

        {
            id: 'part-7',
            title: 'And this is where i was when i made this',
            image: 'https://danielling4.github.io/Water/KillarneyorNot.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [ -9.51503, 52.05269],
                zoom: 17.66,
                pitch: 55.00,
                bearing: -23.42
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
