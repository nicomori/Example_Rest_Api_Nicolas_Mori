package rest.client;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import com.google.gson.Gson;

import rest.Post;

public class GetJson {

	public static Post getRegister(String url, int id) throws Exception {

		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpGet httpGet = new HttpGet(url + "/" + id);
		httpGet.addHeader("accept", "application/json");
		HttpResponse response = httpClient.execute(httpGet);
		String post = readData(response);
		Gson gson = new Gson();
		return gson.fromJson(post, Post.class);
	}

	public static String readData(HttpResponse httpResponse) throws Exception {
		BufferedReader bufferReader = null;
		try {
			bufferReader = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));
			StringBuffer buffer = new StringBuffer();
			char[] dataLength = new char[1024];
			int read;
			while ((read = bufferReader.read(dataLength)) != -1) {
				buffer.append(dataLength, 0, read);
			}
			return buffer.toString();
		} catch (Exception e) {
			throw e;
		} finally {
			if (bufferReader != null)
				bufferReader.close();
		}
	}
}
// public static List<Post> getRegisterList(String url) throws Exception {
// DefaultHttpClient httpClient = new DefaultHttpClient();
// HttpGet httpGet = new HttpGet(url);
// httpGet.addHeader("accept", "application/json");
// HttpResponse response = httpClient.execute(httpGet);
// String post = readData(response);
// Gson gson = new Gson();
// Type type = new TypeToken<List<Post>>() {
// }.getType();
// return gson.fromJson(post, type);
// }

// public static void gddetRegisterList(String url) throws Exception {
// DefaultHttpClient httpClient = new DefaultHttpClient();
// HttpGet httpGet = new HttpGet(url);
// httpGet.removeHeaders("accept");
//
//
//
// HttpResponse response = httpClient.execute(httpGet);
// String post = readData(response);
// Gson gson = new Gson();
//// Type type = new TypeToken<List<Post>>() {
//// }.getType();
//// return gson.fromJson(post, type);
// }

// public static boolean getIfExistId(String url, int id) throws Exception {
//
// System.out.println(url+"/"+id);
//
// DefaultHttpClient httpClient = new DefaultHttpClient();
// HttpGet httpGet = new HttpGet(url);
//
// httpGet.addHeader("accept", "application/json");
// HttpResponse response = httpClient.execute(httpGet);
// String post = readData(response);
// Gson gson = new Gson();
//// return gson.fromJson(post, Post.class);
//
// Post post2 = gson.fromJson(post, Post.class);
//
// if (post2.getId() == id) {
// return false;
// } else {
// return true;
// }
// }

// public static void deleteJson(String url, String id) {
// DefaultHttpClient httpClient = new DefaultHttpClient();
//
// try {
//
// HttpDelete deleteRequest = new HttpDelete(url+"/"+id);
// deleteRequest.setHeader("Accept", "application/json");
//
// HttpResponse response = httpClient.execute(deleteRequest);
// String status = response.getStatusLine().toString();
//
// } catch (Exception e) {
// e.printStackTrace();
// }
// }

// }
