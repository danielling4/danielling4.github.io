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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
