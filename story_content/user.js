function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wfz8XbieyC":
        Script1();
        break;
      case "5hgFCzn3zce":
        Script2();
        break;
      case "6mUiPqQ1pka":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();

}

function Script2()
{
  _g.trigger("volume.changed", Getplayer().GetVar("volume"));
}

function Script3()
{
  _g.trigger("volume.changed", Getplayer().GetVar("Volume"));
}

