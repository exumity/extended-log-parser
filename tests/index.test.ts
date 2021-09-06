import ExtendedLogParser from '../src'

describe('index tests', function () {
    test('valid parse check (with sample 1)', async () => {
        const logString =
            `#Version: 1.0
#Fields: date time x-edge-location sc-bytes c-ip cs-method cs(Host) cs-uri-stem sc-status cs(Referer) cs(User-Agent) cs-uri-query cs(Cookie) x-edge-result-type x-edge-request-id x-host-header cs-protocol cs-bytes time-taken x-forwarded-for ssl-protocol ssl-cipher x-edge-response-result-type cs-protocol-version fle-status fle-encrypted-fields c-port time-to-first-byte x-edge-detailed-result-type sc-content-type sc-content-len sc-range-start sc-range-end
2019-12-04	21:02:31	LAX1	392	192.0.2.100	GET	d111111abcdef8.cloudfront.net	/index.html	200	-	Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36	-	-	Hit	SOX4xwn4XV6Q4rgb7XiVGOHms_BGlTAC4KyHmureZmBNrjGdRLiNIQ==	d111111abcdef8.cloudfront.net	https	23	0.001	-	TLSv1.2	ECDHE-RSA-AES128-GCM-SHA256	Hit	HTTP/2.0	-	-	11040	0.001	Hit	text/html	78	-	-
2019-12-04	21:02:31	LAX1	392	192.0.2.100	GET	d111111abcdef8.cloudfront.net	/index.html	200	-	Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36	-	-	Hit	k6WGMNkEzR5BEM_SaF47gjtX9zBDO2m349OY2an0QPEaUum1ZOLrow==	d111111abcdef8.cloudfront.net	https	23	0.000	-	TLSv1.2	ECDHE-RSA-AES128-GCM-SHA256	Hit	HTTP/2.0	-	-	11040	0.000	Hit	text/html	78	-	-
2019-12-04	21:02:31	LAX1	392	192.0.2.100	GET	d111111abcdef8.cloudfront.net	/index.html	200	-	Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36	-	-	Hit	f37nTMVvnKvV2ZSvEsivup_c2kZ7VXzYdjC-GUQZ5qNs-89BlWazbw==	d111111abcdef8.cloudfront.net	https	23	0.001	-	TLSv1.2	ECDHE-RSA-AES128-GCM-SHA256	Hit	HTTP/2.0	-	-	11040	0.001	Hit	text/html	78	-	-
2019-12-13	22:36:27	SEA19-C1	900	192.0.2.200	GET	d111111abcdef8.cloudfront.net	/favicon.ico	502	http://www.example.com/	Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36	-	-	Error	1pkpNfBQ39sYMnjjUQjmH2w1wdJnbHYTbag21o_3OfcQgPzdL2RSSQ==	www.example.com	http	675	0.102	-	-	-	Error	HTTP/1.1	-	-	25260	0.102	OriginDnsError	text/html	507	-	-
2019-12-13	22:36:26	SEA19-C1	900	192.0.2.200	GET	d111111abcdef8.cloudfront.net	/	502	-	Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36	-	-	Error	3AqrZGCnF_g0-5KOvfA7c9XLcf4YGvMFSeFdIetR1N_2y8jSis8Zxg==	www.example.com	http	735	0.107	-	-	-	Error	HTTP/1.1	-	-	3802	0.107	OriginDnsError	text/html	507	-	-
2019-12-13	22:37:02	SEA19-C2	900	192.0.2.200	GET	d111111abcdef8.cloudfront.net	/	502	-	curl/7.55.1	-	-	Error	kBkDzGnceVtWHqSCqBUqtA_cEs2T3tFUBbnBNkB9El_uVRhHgcZfcw==	www.example.com	http	387	0.103	-	-	-	Error	HTTP/1.1	-	-	12644	0.103	OriginDnsError	text/html	507	-	-`

        const logs = ExtendedLogParser.parse(logString, '\t')
        expect(logs).toEqual([
            {
                "date": "2019-12-04",
                "time": "21:02:31",
                "x-edge-location": "LAX1",
                "sc-bytes": "392",
                "c-ip": "192.0.2.100",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/index.html",
                "sc-status": "200",
                "cs(Referer)": "-",
                "cs(User-Agent)": "Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Hit",
                "x-edge-request-id": "SOX4xwn4XV6Q4rgb7XiVGOHms_BGlTAC4KyHmureZmBNrjGdRLiNIQ==",
                "x-host-header": "d111111abcdef8.cloudfront.net",
                "cs-protocol": "https",
                "cs-bytes": "23",
                "time-taken": "0.001",
                "x-forwarded-for": "-",
                "ssl-protocol": "TLSv1.2",
                "ssl-cipher": "ECDHE-RSA-AES128-GCM-SHA256",
                "x-edge-response-result-type": "Hit",
                "cs-protocol-version": "HTTP/2.0",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "11040",
                "time-to-first-byte": "0.001",
                "x-edge-detailed-result-type": "Hit",
                "sc-content-type": "text/html",
                "sc-content-len": "78",
                "sc-range-start": "-",
                "sc-range-end": "-"
            },
            {
                "date": "2019-12-04",
                "time": "21:02:31",
                "x-edge-location": "LAX1",
                "sc-bytes": "392",
                "c-ip": "192.0.2.100",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/index.html",
                "sc-status": "200",
                "cs(Referer)": "-",
                "cs(User-Agent)": "Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Hit",
                "x-edge-request-id": "k6WGMNkEzR5BEM_SaF47gjtX9zBDO2m349OY2an0QPEaUum1ZOLrow==",
                "x-host-header": "d111111abcdef8.cloudfront.net",
                "cs-protocol": "https",
                "cs-bytes": "23",
                "time-taken": "0.000",
                "x-forwarded-for": "-",
                "ssl-protocol": "TLSv1.2",
                "ssl-cipher": "ECDHE-RSA-AES128-GCM-SHA256",
                "x-edge-response-result-type": "Hit",
                "cs-protocol-version": "HTTP/2.0",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "11040",
                "time-to-first-byte": "0.000",
                "x-edge-detailed-result-type": "Hit",
                "sc-content-type": "text/html",
                "sc-content-len": "78",
                "sc-range-start": "-",
                "sc-range-end": "-"
            },
            {
                "date": "2019-12-04",
                "time": "21:02:31",
                "x-edge-location": "LAX1",
                "sc-bytes": "392",
                "c-ip": "192.0.2.100",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/index.html",
                "sc-status": "200",
                "cs(Referer)": "-",
                "cs(User-Agent)": "Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Hit",
                "x-edge-request-id": "f37nTMVvnKvV2ZSvEsivup_c2kZ7VXzYdjC-GUQZ5qNs-89BlWazbw==",
                "x-host-header": "d111111abcdef8.cloudfront.net",
                "cs-protocol": "https",
                "cs-bytes": "23",
                "time-taken": "0.001",
                "x-forwarded-for": "-",
                "ssl-protocol": "TLSv1.2",
                "ssl-cipher": "ECDHE-RSA-AES128-GCM-SHA256",
                "x-edge-response-result-type": "Hit",
                "cs-protocol-version": "HTTP/2.0",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "11040",
                "time-to-first-byte": "0.001",
                "x-edge-detailed-result-type": "Hit",
                "sc-content-type": "text/html",
                "sc-content-len": "78",
                "sc-range-start": "-",
                "sc-range-end": "-"
            },
            {
                "date": "2019-12-13",
                "time": "22:36:27",
                "x-edge-location": "SEA19-C1",
                "sc-bytes": "900",
                "c-ip": "192.0.2.200",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/favicon.ico",
                "sc-status": "502",
                "cs(Referer)": "http://www.example.com/",
                "cs(User-Agent)": "Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Error",
                "x-edge-request-id": "1pkpNfBQ39sYMnjjUQjmH2w1wdJnbHYTbag21o_3OfcQgPzdL2RSSQ==",
                "x-host-header": "www.example.com",
                "cs-protocol": "http",
                "cs-bytes": "675",
                "time-taken": "0.102",
                "x-forwarded-for": "-",
                "ssl-protocol": "-",
                "ssl-cipher": "-",
                "x-edge-response-result-type": "Error",
                "cs-protocol-version": "HTTP/1.1",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "25260",
                "time-to-first-byte": "0.102",
                "x-edge-detailed-result-type": "OriginDnsError",
                "sc-content-type": "text/html",
                "sc-content-len": "507",
                "sc-range-start": "-",
                "sc-range-end": "-"
            },
            {
                "date": "2019-12-13",
                "time": "22:36:26",
                "x-edge-location": "SEA19-C1",
                "sc-bytes": "900",
                "c-ip": "192.0.2.200",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/",
                "sc-status": "502",
                "cs(Referer)": "-",
                "cs(User-Agent)": "Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/78.0.3904.108%20Safari/537.36",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Error",
                "x-edge-request-id": "3AqrZGCnF_g0-5KOvfA7c9XLcf4YGvMFSeFdIetR1N_2y8jSis8Zxg==",
                "x-host-header": "www.example.com",
                "cs-protocol": "http",
                "cs-bytes": "735",
                "time-taken": "0.107",
                "x-forwarded-for": "-",
                "ssl-protocol": "-",
                "ssl-cipher": "-",
                "x-edge-response-result-type": "Error",
                "cs-protocol-version": "HTTP/1.1",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "3802",
                "time-to-first-byte": "0.107",
                "x-edge-detailed-result-type": "OriginDnsError",
                "sc-content-type": "text/html",
                "sc-content-len": "507",
                "sc-range-start": "-",
                "sc-range-end": "-"
            },
            {
                "date": "2019-12-13",
                "time": "22:37:02",
                "x-edge-location": "SEA19-C2",
                "sc-bytes": "900",
                "c-ip": "192.0.2.200",
                "cs-method": "GET",
                "cs(Host)": "d111111abcdef8.cloudfront.net",
                "cs-uri-stem": "/",
                "sc-status": "502",
                "cs(Referer)": "-",
                "cs(User-Agent)": "curl/7.55.1",
                "cs-uri-query": "-",
                "cs(Cookie)": "-",
                "x-edge-result-type": "Error",
                "x-edge-request-id": "kBkDzGnceVtWHqSCqBUqtA_cEs2T3tFUBbnBNkB9El_uVRhHgcZfcw==",
                "x-host-header": "www.example.com",
                "cs-protocol": "http",
                "cs-bytes": "387",
                "time-taken": "0.103",
                "x-forwarded-for": "-",
                "ssl-protocol": "-",
                "ssl-cipher": "-",
                "x-edge-response-result-type": "Error",
                "cs-protocol-version": "HTTP/1.1",
                "fle-status": "-",
                "fle-encrypted-fields": "-",
                "c-port": "12644",
                "time-to-first-byte": "0.103",
                "x-edge-detailed-result-type": "OriginDnsError",
                "sc-content-type": "text/html",
                "sc-content-len": "507",
                "sc-range-start": "-",
                "sc-range-end": "-"
            }
        ])
    });
    test('valid parse check (with sample 2)', async () => {
        const logString =
            `#Version: 1.0
#Date: 12-Jan-1996 00:00:00
#Fields: time cs-method cs-uri
00:34:23 GET /foo/bar.html
12:21:16 GET /foo/bar.html
12:45:52 GET /foo/bar.html
12:57:34 GET /foo/bar.html`
        const logs = ExtendedLogParser.parse(logString)
        expect(logs).toEqual([
            {
                "time": "00:34:23",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:21:16",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:45:52",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:57:34",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            }
        ])
    });
    test('valid parse check (with empty line)', async () => {
        const logString =
            `#Version: 1.0
#Date: 12-Jan-1996 00:00:00
#Fields: time cs-method cs-uri
00:34:23 GET /foo/bar.html
12:21:16 GET /foo/bar.html
12:45:52 GET /foo/bar.html
12:57:34 GET /foo/bar.html
`
        const logs = ExtendedLogParser.parse(logString)
        expect(logs).toEqual([
            {
                "time": "00:34:23",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:21:16",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:45:52",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            },
            {
                "time": "12:57:34",
                "cs-method": "GET",
                "cs-uri": "/foo/bar.html"
            }
        ])
    });
});
