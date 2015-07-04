package com.demo.rhino.js;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.Reader;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class JSDemoSwing {

	public static void main(String[] args) {

		File jsFile = new File("./JSDemoSwing.js");
		ScriptEngineManager factory = new ScriptEngineManager();
		ScriptEngine jsEngine = factory.getEngineByName("javascript");//rb//jython//groovy
		System.out.println("Engine name : "
				+ jsEngine.getFactory().getEngineName());

		jsEngine.put("out", System.out);
		Reader reader = null;
		try {
			reader = new FileReader(jsFile);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			jsEngine.eval(reader);
		} catch (ScriptException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}
}