const targetLinks = document.querySelectorAll('main a[href^=http]')

targetLinks.forEach(link => link.setAttribute("target", "_blank"));

