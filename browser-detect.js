<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <title>Browser Detection</title>
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="browser-detect.js"></script>
    <script type="text/javascript" src="flash_detect.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#browser').text(BrowserDetect.browser + ' ' + BrowserDetect.version)
            $('#os').text(BrowserDetect.OS)
            $('#flash').text(FlashDetect.installed ? 'Flash Installed' : 'No Flash')
            $('#flash_version').text(FlashDetect.installed ? FlashDetect.raw : '')
        });
    </script>   
</head>
<body>
<h2>Browser Details</h2>
<ul>
    <li id="browser"></li>
    <li id="os"></li>
    <li id="flash"></li>
    <li id="flash_version"></li>
</ul>
</body>

</html>
