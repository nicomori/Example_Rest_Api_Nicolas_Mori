package rest.client;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.DefaultHttpClient;

public class DeleteJson {
	public static void deleteJson(String url, String id) {
		DefaultHttpClient httpClient = new DefaultHttpClient();
		try {
			HttpDelete deleteRequest = new HttpDelete(url + "/" + id);
			deleteRequest.setHeader("Accept", "application/json");
			HttpResponse response = httpClient.execute(deleteRequest);
			@SuppressWarnings("unused")
			String status = response.getStatusLine().toString();
			System.out.println("The register with the id: "+id+" is deleted.");
		} catch (Exception e) {
			System.out.println("A problem exist at the moment to delente the register with the id: "+id);
		}
	}
}