package rest.client;

import java.io.IOException;
import java.net.MalformedURLException;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

import rest.Post;

public class UpdateJson {
	public static boolean editARecordWithParameters(String url, int id, int userId, String title) {
		Post post;

		try {
			post = GetJson.getRegister(url, id);
			if (post.getId() != id) {
				System.out.println("the ID don't exist");
				return false;
			}
		} catch (Exception e1) {
			e1.printStackTrace();
		}

		try {
			DefaultHttpClient httpClient = new DefaultHttpClient();
			HttpPost postRequest = new HttpPost(url);
			StringEntity input = new StringEntity(
					"{\"" + "id\":" + id + ",\"" + "userId\":" + userId + ",\"" + "title\":\"" + title + "\"}");
			input.setContentType("application/json");
			postRequest.setEntity(input);
			@SuppressWarnings("unused")
			HttpResponse response = httpClient.execute(postRequest);

		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("The update is completed.");
		return true;
	}
}