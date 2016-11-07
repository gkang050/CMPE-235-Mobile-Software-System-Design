
<html>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#008080;width:90px;height:20px;padding:40px;">
Click Me</div>

<script type="text/javascript">
var windowObjectReference;
function mDown(obj) {
    obj.style.backgroundColor = "#ADFF2F";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#00FFFF";
    obj.innerHTML="Thank You";
    windowObjectReference = window.open("helloWorld.php","DescriptiveWindowName","resizable,scrollbars,status");
}
</script>

</body>
</html> 