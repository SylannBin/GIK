(function() { 'use strict'
    var $navbarConnected = document.getElementById('navRightConnected')
    var $navbarDisconnected = document.getElementById('navRightDisconnected')

    document.getElementById('btnLogin').addEventListener('click', function(e) {
        $navbarConnected.style.display = ''
        $navbarDisconnected.style.display = 'none'
    })

    document.getElementById('btnSignin').addEventListener('click', function(e) {
        $navbarConnected.style.display = ''
        $navbarDisconnected.style.display = 'none'
    })

    document.getElementById('btnLogout').addEventListener('click', function(e) {
        $navbarConnected.style.display = 'none'
        $navbarDisconnected.style.display = ''
    })

}())