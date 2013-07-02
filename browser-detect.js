var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
        this.device = this.searchString(this.dataDevice) || "an unknown Device";
    },
    isBrowser: function(browser) {
    	return this.browser.toLowerCase().indexOf(browser.toLowerCase()) !== -1;
    },
    isVersion: function(version) {
    	return parseFloat(this.version) ? eval(this.version + version.replace(/^=([0-9\.]+)/, "==$1")) : null;
    },
    isOS: function(OS) {
    	return this.OS.toLowerCase().indexOf(OS.toLowerCase()) !== -1;
    },
    isDevice: function(device) {
		return this.device.toLowerCase().indexOf(device.toLowerCase()) !== -1;
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "RockMelt",
            identity: "RockMelt"
        },
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "IE",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {
            // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        },
        {
            string: navigator.userAgent,
            subString: "iOS",
            identity: "iOS"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone OS",
            identity: "iPhone OS"
        }
    ],
    dataDevice : [
        {
            string: navigator.platform,
            subString: "iPad",
            identity: "iPad"
        },
        {
            string: navigator.platform,
            subString: "iPhone",
            identity: "iPhone"
        },
        {
            string: navigator.platform,
            subString: "Android",
            identity: "Android"
        },
        {
            string: navigator.userAgent,
            subString: "Android",
            identity: "Android"
        }
    ]

};
BrowserDetect.init();