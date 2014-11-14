base_interval = null

function base_command_start(x, y, z) {
  var params = {type:"base", x:x, y:y, z:z};
  base_interval = setInterval(function() { $.get("/", params); }, 50);
}

function base_command_end() {
	clearInterval(base_interval);
}


