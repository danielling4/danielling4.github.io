var config = {
    style: 'mapbox://styles/danielling85/cl83eac2d007814qqhmh9li0l',
    accessToken: 'pk.eyJ1IjoiZGFuaWVsbGluZzg1IiwiYSI6ImNsY3RsenpzeTEwc3czcG1zZGx0aXNuazcifQ.b43pDP01dz_weOdOQvelhg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Cocaine - from Leaf to Line',
    subtitle: 'The Economics of the Cocaine Trade',
    byline: 'By Daniel Ling',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'in-the-jungle',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: 'C:\Users\DanielLing\Desktop\Misc Vizzes\Cocaine Viz\storytelling-main\storytelling-main\src\images\Coca leaves washed out.jpg',
            description: 'Cocaine is a stimulant drug that is made from the leaves of the South American Coca plant.The following visualisation highlights some of the economics involved with converting the leaves of the Coca plant into Cocaine powder and the vast sums of money involved along the way.',

            location: {
               center: [-72.80983, 0.47814],
zoom: 11.79,
pitch: 49.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'to-the-lab',
            alignment: 'right',
            hidden: false,
            title: 'Jungle Production',
            image: './path/to/image/source.png',
            description: 'Coca leaves are shredded and formed into a paste which is then mixed and processed with a variety of chemicals to product Cocaine powder..',
            location: {
                center: [-73.05118, 0.52017],
                zoom: 11.79,
                pitch: 55.50,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'to-the ports',
            alignment: 'left',
            hidden: false,
            title: 'To the Ports',
            image: './path/to/image/source.png',
            description: 'Cocaine Powder is smuggled out of Columbia in many different ways with the container ships using the port of Barranquilla a popular choice for the Cartels.',
            location: {
                center: [-74.75979, 10.96337],
                zoom: 14.37,
                pitch: 71.50,
                bearing: -59.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'reached-honduras',
            alignment: 'left',
            hidden: false,
            title: 'Reaching Honduras',
            image: './path/to/image/source.png',
            description: 'Upon reaching the ports of Honduras, the value of a kilo of Cocaine powder has now increased to $6,000.',
            location: {
                center: [-87.92215, 15.85876],
zoom: 11.84,
pitch: 25.50,
bearing: -48.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'reached-Southern-Mexico',
            alignment: 'left',
            hidden: false,
            title: 'Into Southern Mexico',
            image: './path/to/image/source.png',
            description: 'Into Southern Mexico and only one more border to cross. The value has now reached $10,000 per kilo.',
            location: {
                center: [-95.77696, 18.29999],
                zoom: 12.25,
                pitch: 25.50,
                bearing: -48.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Mexican-Border',
            alignment: 'left',
            hidden: false,
            title: 'Crossing the Mexican Border',
            image: './path/to/image/source.png',
            description: 'Into Southern Mexico and only one more border to cross. The value has now reached $10,000 per kilo.',
            location: {
                center: [-107.139, 30.99057],
                zoom: 12.25,
                pitch: 25.50,
                bearing: -48.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Dallas',
            alignment: 'left',
            hidden: false,
            title: 'Reached the USA',
            image: './path/to/image/source.png',
            description: 'Dallas becomes a hub for the wholesalers with product distributed across North America from here..',
            location: {
                center: [-97.3675, 32.69711],
                zoom: 12.25,
                pitch: 25.50,
                bearing: -48.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'New-York',
            alignment: 'left',
            hidden: false,
            title: 'Party Time in New York',
            image: './path/to/image/source.png',
            description: 'After a long journey, the Cocaine power is now sold at $80,000 per kilo or $120 per gram.',
            location: {
                center: [-74.0026, 40.74912],
                zoom: 12.25,
                pitch: 25.50,
                bearing: -48.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
