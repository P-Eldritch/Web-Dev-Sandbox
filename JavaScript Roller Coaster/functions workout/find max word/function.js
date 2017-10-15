var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
//MaxZodis randa ilgiausia zodi eilutej
function MaxZodis(eilute){ 
	var StringArejus = eilute.split(" ");
	var first = StringArejus[0];
	for (var i = 1; i < StringArejus.length; i++) {
		if(first.length < StringArejus[i].length){
			first = StringArejus[i];
		}
	}
	return first;
}
//MaxZodziai randa ilgiausia zody eiluciu masyve; panaudoja f-ja MaxZodis
function MaxZodziai (masyvas) {
	var Stringy = [];
	for (var i = 0; i < masyvas.length; i++) {
		Stringy[i] = MaxZodis(masyvas[i]);
	}
	console.log(Stringy.join(" "));
}
MaxZodziai(posts);
