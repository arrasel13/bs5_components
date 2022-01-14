// Live Alert JS Code start
var showLiveAlertHere = document.getElementById('showLiveAlertHere')
var alertTrigger = document.getElementById('liveAlert')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  showLiveAlertHere.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Lorem ipsum, dolor sit amet, consectetur adipisicing elit', 'primary')
  })
}
// Live Alert JS Code end
