//launch Chrome browser
Bootstrap.startApplication(Chrome);

//navigate to EasyJet website
new GuiBrowser().navigateTo("https://www.easyjet.com/en");

//check the landing page URL
assertEquals("https://www.easyjet.com/en", new GuiBrowser().getCurrentPageUrl());

    String origin = "Naples (NAP)";
    String destination = "London Gatwick (LGW)"; 

    //set the origin airport
GuiText fromText = new GuiText("From:");
    fromText.setText(origin);

    //set the destination airport
    GuiText toText = new GuiText("To:");
    toText.setText(destination);

    //check that all data have been correctly inserted
    assertEquals(origin, fromText.getText());
    assertEquals(destination, toText.getText());

    //sets the departing date
    new GuiHtmlElement("Departing").click();
    new GuiHtmlElement("2021-09-27").click();

    //sets the returning date
    new GuiHtmlElement("Returning").click();
    new GuiHtmlElement("2021-10-01").click();

    //check that all data have been correctly inserted
    new GuiHtmlElement("Mon 27 September 2021").waitForObject(5, 1);
    new GuiHtmlElement("Fri 1 October 2021").waitForObject(5, 1);

    //set the number of adults passengers
    String adultsNum = "2";
    GuiText numAdults = new GuiText("Adults");
    numAdults.deleteAll();
    numAdults.setText(adultsNum);

    //check that all data have been correctly inserted
    assertEquals(adultsNum, numAdults.getText());

    //click show flights to search for all available flights
    new GuiButton("Show flights").click();

    //Select the departing flight
    new GuiButton("Dep 10:10 Arr 12:05").click();
		
    //Select the returning flight
    new GuiButton("Dep 06:00 Arr 09:35").click();

    //Check the flight numbers
    new GuiHtmlElement(" EZY8532 ", new GuiHtmlElement("Naples to London Gatwick")).waitForObject(1, 1);
    new GuiHtmlElement(" EZY8531 ", new GuiHtmlElement("London Gatwick to Naples")).waitForObject(1, 1);

    //Select the seats on departing flight
		new GuiButton("15D").click();
		new GuiButton("15E").click();
		
		//Check the selected seats
		new GuiHtmlElement("Standard seat 15D", new GuiHtmlElement("Naples to London Gatwick")).waitForObject(5, 1);
		new GuiHtmlElement("Standard seat 15E", new GuiHtmlElement("Naples to London Gatwick")).waitForObject(5, 1);

		//Select the seats on returning flight
		new GuiButton("15D").click();
		new GuiButton("15E").click();
		
		//Check the selected seats
		new GuiHtmlElement("Standard seat 15D", new GuiHtmlElement("London Gatwick to Naples")).waitForObject(5, 1);
        new GuiHtmlElement("Standard seat 15E", new GuiHtmlElement("London Gatwick to Naples")).waitForObject(5, 1);

        //add a bag
        new GuiHtmlElement("Add a 15kg bag").click();
		
        //check for the added bag
        new GuiHtmlElement("Combined weight 15kg").waitForObject(1, 1);

         //skip car rental
         new GuiButton("Skip").getInstance(1).click();

          //insert username
          new GuiText("Email address").setText("maveryx@maveryx.com"); //dummy
		
          //insert password
          new GuiPasswordText("Password").setText("123456789"); //dummy
      
          //click sign in button to login
          new GuiButton("Sign in").click();

          //select the trip type (Business or Leisure)
		new GuiRadioButton("Leisure").click();

		//insert title
		new GuiComboBox("title-dropdown-adult-1").select("Mr");
		//insert age
		new GuiComboBox("age-dropdown-adult-1").select("18+");
		//insert firstname
		new GuiText("firstname-textbox-adult-1").setText("John");
		//insert surename
		new GuiText("lastname-textbox-adult-1").setText("Smith");
		Thread.sleep(5000);

		//the same for the second passenger
		new GuiText("firstname-textbox-adult-2").setText("Alice");
		new GuiText("lastname-textbox-adult-2").setText("Smith");
		new GuiComboBox("age-dropdown-adult-2").select("18+");
		new GuiComboBox("title-dropdown-adult-2").select("Mrs");

        //check passengers data
		new GuiHtmlElement("John Smith, aged 18+", new GuiHtmlElement("Passenger details")).waitForObject(5, 1);
		new GuiHtmlElement("Alice Smith, aged 18+", new GuiHtmlElement("Passenger details")).waitForObject(5, 1);

		//accept terms and conditions
		new GuiCheckBox().click();

		//check the price
		new GuiHtmlElement("Final price 372,16 €").waitForObject(5, 1);

        //insert credit card numeber
		new GuiText("Card number").setText("4263982640269299"); //dummy
		
		//insert credit card holder's name
		new GuiText("Card holder's name").setText("John Smith"); //dummy
		
		//insert credit card expiration date (month, year)
		new GuiComboBox("card-details-expiry-date-month").select("04"); //dummy
		new GuiComboBox("card-details-expiry-date-year").select("2023"); //dummy 

		//insert credit card CVV/Security number
		new GuiText("card-details-security-number").setText("738"); //dummy

        new GuiButton("Pay now").click();