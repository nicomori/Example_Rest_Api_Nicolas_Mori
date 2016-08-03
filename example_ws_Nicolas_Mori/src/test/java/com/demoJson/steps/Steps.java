package com.demoJson.steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import rest.Post;
import rest.client.DeleteJson;
import rest.client.GetJson;
import rest.client.ListJson;
import rest.client.PostJson;
import rest.client.UpdateJson;

public class Steps {

	String url;
	String database;

	@Given("the url \"(.*)?\" and the database \"(.*)?\"")
	public void accessTheBrowser(String urlGet, String databaseGet) {
		url = urlGet;
		database = databaseGet;
	}

	@And("I make the action \"(.*)?\" using this id \"(.*)?\", this userId \"(.*)?\", and this title \"(.*)?\"")
	public void netEntExample1(String action, String id, String userId, String title)
			throws NumberFormatException, Exception {

		switch (action) {
		case "get a register":
			Post post = GetJson.getRegister(url + database, Integer.parseInt(id));
			System.out.println("The get data is completed: " + post);
			break;
		case "get a list":
			List<Post> postList = ListJson.getRegisterList(url + database);
			for (int i = 0; i < postList.size(); i++) {
				System.out.println(i + " " + postList.get(i).getId());
				System.out.println(i + " " + postList.get(i).getUserId());
				System.out.println(i + " " + postList.get(i).getTitle());
				System.out.println(i + " " + postList.get(i).getBody());
				System.out.println("---------");
			}
			System.out.println("The list is completed.");
			break;
		case "update a register":
			Assert.assertTrue(UpdateJson.editARecordWithParameters(url + database, Integer.parseInt(id),
					Integer.parseInt(userId), title));
			break;
		case "insert a register":
			Assert.assertTrue(PostJson.postARecordConParametros(url + database, Integer.parseInt(id),
					Integer.parseInt(userId), title));
			break;
		case "delete a register":
			DeleteJson.deleteJson(url + database, id);
			break;
		default:
			Post postDefault = GetJson.getRegister(url + database, Integer.parseInt(id));
			System.out.println("The get data is completed: " + postDefault);
			break;
		}
		// System.out.println(monthString);
	}

	@After
	public void after() {
		// closeDriver();
	}
}