$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example_Json.feature");
formatter.feature({
  "line": 2,
  "name": "NetEnt - interview Nicolas Mori",
  "description": "",
  "id": "netent---interview-nicolas-mori",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the url \"\u003curl\u003e\" and the database \"\u003cdb\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"\u003cfunction\u003e\" using this id \"\u003cid\u003e\", this userId \"\u003cuserId\u003e\", and this title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;",
  "rows": [
    {
      "cells": [
        "url",
        "db",
        "id",
        "userId",
        "title",
        "function"
      ],
      "line": 10,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;1"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "post",
        "",
        "",
        "",
        "get a list"
      ],
      "line": 11,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;2"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "post",
        "13",
        "25",
        "Automation Title",
        "get a register"
      ],
      "line": 12,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;3"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "post",
        "7",
        "23",
        "Automation Title",
        "update a register"
      ],
      "line": 13,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;4"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "post",
        "112",
        "62",
        "Automation Title",
        "insert a register"
      ],
      "line": 14,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;5"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "post",
        "3",
        "22",
        "Automation Title",
        "delete a register"
      ],
      "line": 15,
      "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the url \"http://localhost:3000/\" and the database \"post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"get a list\" using this id \"\", this userId \"\", and this title \"\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 9
    },
    {
      "val": "post",
      "offset": 51
    }
  ],
  "location": "Steps.accessTheBrowser(String,String)"
});
formatter.result({
  "duration": 95268091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get a list",
      "offset": 19
    },
    {
      "val": "",
      "offset": 46
    },
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "",
      "offset": 81
    }
  ],
  "location": "Steps.netEntExample1(String,String,String,String)"
});
formatter.result({
  "duration": 358195777,
  "status": "passed"
});
formatter.after({
  "duration": 51804,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the url \"http://localhost:3000/\" and the database \"post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"get a register\" using this id \"13\", this userId \"25\", and this title \"Automation Title\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 9
    },
    {
      "val": "post",
      "offset": 51
    }
  ],
  "location": "Steps.accessTheBrowser(String,String)"
});
formatter.result({
  "duration": 110083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get a register",
      "offset": 19
    },
    {
      "val": "13",
      "offset": 50
    },
    {
      "val": "25",
      "offset": 68
    },
    {
      "val": "Automation Title",
      "offset": 89
    }
  ],
  "location": "Steps.netEntExample1(String,String,String,String)"
});
formatter.result({
  "duration": 8372976,
  "status": "passed"
});
formatter.after({
  "duration": 23020,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the url \"http://localhost:3000/\" and the database \"post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"update a register\" using this id \"7\", this userId \"23\", and this title \"Automation Title\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 9
    },
    {
      "val": "post",
      "offset": 51
    }
  ],
  "location": "Steps.accessTheBrowser(String,String)"
});
formatter.result({
  "duration": 114199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update a register",
      "offset": 19
    },
    {
      "val": "7",
      "offset": 53
    },
    {
      "val": "23",
      "offset": 70
    },
    {
      "val": "Automation Title",
      "offset": 91
    }
  ],
  "location": "Steps.netEntExample1(String,String,String,String)"
});
formatter.result({
  "duration": 15992965,
  "status": "passed"
});
formatter.after({
  "duration": 13215,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the url \"http://localhost:3000/\" and the database \"post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"insert a register\" using this id \"112\", this userId \"62\", and this title \"Automation Title\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 9
    },
    {
      "val": "post",
      "offset": 51
    }
  ],
  "location": "Steps.accessTheBrowser(String,String)"
});
formatter.result({
  "duration": 96181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "insert a register",
      "offset": 19
    },
    {
      "val": "112",
      "offset": 53
    },
    {
      "val": "62",
      "offset": 72
    },
    {
      "val": "Automation Title",
      "offset": 93
    }
  ],
  "location": "Steps.netEntExample1(String,String,String,String)"
});
formatter.result({
  "duration": 16088483,
  "status": "passed"
});
formatter.after({
  "duration": 14395,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Make a differents types of actions with Json.",
  "description": "",
  "id": "netent---interview-nicolas-mori;make-a-differents-types-of-actions-with-json.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@JsonAutomation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the url \"http://localhost:3000/\" and the database \"post\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make the action \"delete a register\" using this id \"3\", this userId \"22\", and this title \"Automation Title\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 9
    },
    {
      "val": "post",
      "offset": 51
    }
  ],
  "location": "Steps.accessTheBrowser(String,String)"
});
formatter.result({
  "duration": 159137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete a register",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 53
    },
    {
      "val": "22",
      "offset": 70
    },
    {
      "val": "Automation Title",
      "offset": 91
    }
  ],
  "location": "Steps.netEntExample1(String,String,String,String)"
});
formatter.result({
  "duration": 7471993,
  "status": "passed"
});
formatter.after({
  "duration": 32226,
  "status": "passed"
});
});