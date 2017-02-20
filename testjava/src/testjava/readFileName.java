package testjava;

import java.io.File;

public class readFileName {

	public static void main(String[] args) {
		File root = new File("F:\\work\\YLJY\\libs");
		
		File[] jars = root.listFiles();
		for(int i=0;i<jars.length;i++){
			File file=jars[i];
			System.out.println("-libraryjars libs/"+file.getName());
		}
	}

}
