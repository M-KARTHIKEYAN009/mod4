(function(){
	var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
	for(var i = 0; i < names.length; i++){
		var firstletter = names[i].charAt(0).toLowerCase();
		if(firstletter === 'j'){
			byespeaker.speak(names[i]);
		}else{
			hellospeaker.speak(names[i]);
		}
	}
})();

/* Solution of module 4

Out put :
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim


*/