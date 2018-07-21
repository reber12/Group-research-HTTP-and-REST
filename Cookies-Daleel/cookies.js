//You can create cookies using document.cookie property like this.

document.cookie = "cookiename=cookievalue";
//You can even add expiry date to your cookie so that the particular cookie will be removed from the computer on the specified date. The expiry date should be set in the UTC/GMT format. If you do not set the expiry date, the cookie will be removed when the user closes the browser.

//document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"
// You can also set the domain and path to specify to which domain and to which directories in the specific domain the cookie belongs to. By default, a cookie belongs to the page that sets the cookie.

//document.cookie = "cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC; path=/ "
//create a cookie with domain to the current page and path to the entire domain.

// You can access the cookie like this which will return all the cookies saved for the current domain.

var x = document.cookie;
// To delete a cookie, you just need to set the value of cookie to empty and set the value of expires to a passed date.

document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
