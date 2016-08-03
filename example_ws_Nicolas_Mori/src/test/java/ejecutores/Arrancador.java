package ejecutores;

import java.util.List;

import rest.Post;
import rest.client.ListJson;

public class Arrancador {

	public static void main(String[] args) throws Exception {

		// ############## GET UN POST ##############
//		 Post post = GetJson.getRegister("http://localhost:3000/post", 8);
//		 System.out.println(post);

		// ############## Listar POST ##############
		 List<Post> postList =
		 ListJson.getRegisterList("http://localhost:3000/post");
		
		 for (int i = 0; i < postList.size(); i++) {
		 System.out.println(i + " " + postList.get(i).getId());
		 System.out.println(i + " " + postList.get(i).getUserId());
		 System.out.println(i + " " + postList.get(i).getTitle());
		 System.out.println(i + " " + postList.get(i).getBody());
		 System.out.println("---------");
		 }

		// ############## MANDAR UN POST CON PARAMETROS ##############
		// PostJson.postARecordConParametros("http://localhost:3000/post", 121,
		// 129, "pepe pepe pepe");

		// ############## EDITAR UN POST CON PARAMETROS ##############
		// UpdateJson.editARecordWithParameters("http://localhost:3000/post",12,129,
		// "pepe pepe pepe");

		// ############## BORRAR UN POST ##############
		// DeleteJson.deleteJson("http://localhost:3000/post", "2");
	}
}