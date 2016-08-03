package rest.client;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import rest.Post;

public class ListJson {
	public static List<Post> getRegisterList(String url) throws Exception {
		DefaultHttpClient httpClient = new DefaultHttpClient();
		HttpGet httpGet = new HttpGet(url);
		httpGet.addHeader("accept", "application/json");
		HttpResponse response = httpClient.execute(httpGet);
		String post = readData(response);
		Gson gson = new Gson();
		Type type = new TypeToken<List<Post>>() {
		}.getType();
		return gson.fromJson(post, type);
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