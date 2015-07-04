//cd /Users/atalp/poc/rhino/RhinoLibraryDemo
//jrunscript echo.js

{
	var message= "Hello " + "world ! Today's date is "+   new Date();
	echo(message);
	pid=37031;
	var p = java.lang.Runtime.getRuntime().exec("jmap", [ "-histo", 54734])
	p.waitFor();
	java.lang.Thread.sleep(10000);
	var args = [ "-histo", pid ]
	Packages.sun.tools.jmap.JMap.main(args)
}