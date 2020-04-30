exports.inject = function (el) {
    var addIframe = false;

    el.each(function () {
        var ad = $(this);
        var iframeHeight = parseInt(ad.data('height'));
        var iframeWidth = parseInt(ad.data('width'));
        var adHeight = iframeHeight - 20;
        var adWidth = iframeWidth - 20;
        var body = '<img src="https://via.placeholder.com/' + adWidth + 'x' + adHeight;
        body += '?text=' + iframeWidth + 'x' + iframeHeight + '"/>';
        if (!addIframe) {
            return ad.html(body);
        }
        var iframe = '<iframe width="' + iframeWidth + '" height="' + iframeHeight + '"></iframe>';
        ad.html(iframe).find('iframe')
            .contents().find('body').html(body);
    });
};
