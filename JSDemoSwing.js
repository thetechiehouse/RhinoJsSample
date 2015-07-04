 
 packages = new JavaImporter(javax.swing, java.awt, 
		 java.awt.event); 
		  
		 with(packages) 
		 { 
		  var frame = JFrame("Swing"); 
		  frame.setSize(200, 100); 
		  var button = JButton("Click me"); 
		  var label = JLabel("test"); 
		  
		  frame.getContentPane().add(button); 
		  frame.getContentPane().add(label);  
		 
		  
		  frame.getContentPane().setLayout(new FlowLayout()); 
		  
		  button.addActionListener( 
		  function() { label.setText("Script!"); } 
		  ); 
		  
		  frame.setVisible(true); 
		  
		  java.lang.Thread.sleep(10000); 
		 } 
		  
