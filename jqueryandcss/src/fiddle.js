function onClick() {

    var height = $("#height").val();
    var width = $("#width").val();

    var screenObject = $("#outer");

    screenObject.innerHeight(height);
    screenObject.innerWidth(width);
}