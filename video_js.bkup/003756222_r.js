var thePlayer = $f("player", "http://hidvl.nyu.edu/util/players/fp/standard/flowplayer.commercial.swf", {

    key: '#$623666ca2f667514416',

    clip: {
        urlResolvers: 'bwcheck',
        provider: 'rtmp',
        scaling: 'uniform',
        autoPlay: false,
        bitrates: [
            { url: 'mp4:003756222_300k_s.mp4', width: 448, height: 252, bitrate: 300, isDefault: true },
            { url: 'mp4:003756222_800k_s.mp4', width: 640, height: 360, bitrate: 800 }
        ]
    },

    // streaming plugins are configured under the plugins node
    plugins: {
        // bandwidth check plugin
        bwcheck: {
            url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.bwcheck.swf',
            serverType: 'fms',
            // we use dynamic switching
            dynamic: true,
            // use this connection for bandwidth detection
            netConnectionUrl: 'rtmp://ams.library.nyu.edu/hidvl_r'
        },

        controls: {
            backgroundColor: '#333333',
            timeColor: '#ffffff',
            buttonColor: '#a1a1a1',
            buttonOverColor: '#ffffff',
            durationColor: '#a1a1a1',
            tooltips: {
                buttons: 'true',
                fullscreen: 'Start video to enable Fullscreen'
            }
        },

        content: {
            url: 'http://dlib.nyu.edu/util/players/fp/standard/flowplayer.content.swf',
            opacity: 0
        },

        // here is our rtpm plugin configuration, configured for rtmp
        rtmp: {
            url: 'http://dlib.nyu.edu/util/players/fp/custom/flowplayer.rtmp.swf',

            // netConnectionUrl defines where the streams are found
            netConnectionUrl: 'rtmp://ams.library.nyu.edu/hidvl_r'
        }
    },

    onError: function(errorCode, errorMessage) {
        // remove play button
        $f().getPlugin('play').css({ opacity: 0 });
        // show error message
        var contentPlugin = $f().getPlugin('content');
        contentPlugin.setHtml("<h1>There are problems loading this clip.</h1>");
        contentPlugin.css({ opacity: 1.0 });
    }

});

